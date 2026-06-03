"use server";

import { ActionResponse } from "@/types/action";
import { ErrorResponse, PaginatedSearchParams } from "@/types/global";
import { Trainer } from "@prisma/client";
import action from "../handlers/actions";
import { PaginatedSearchParamsSchema } from "../validation";
import handleError from "../handlers/error";
import prisma from "../prisma";

export async function getSavedTrainers(
  params: PaginatedSearchParams
): Promise<ActionResponse<{ trainers: Trainer[]; isNext: boolean }>> {
  const validationResult = await action({
    params,
    schema: PaginatedSearchParamsSchema,
  });

  if (validationResult instanceof Error) return handleError(validationResult) as ErrorResponse;

  if (validationResult instanceof Error) return handleError(validationResult) as ErrorResponse;

  const { page = 1, pageSize = 1, query, filter, } = validationResult.params!;

  const where = {
    ...(query && {
      OR: [
        {
          specialization: {
            contains: query,
            mode: "insensitive" as const,
          },
        },
        {
          experience: {
            contains: query,
            mode: "insensitive" as const,
          },
        },
      ],
    }),

  };

  let orderBy = {};

  switch (filter) {
    case "oldest":
      orderBy = {
        createdAt: "asc",
      };
      break;
    case "newest":
    default:
      orderBy = {
        createdAt: "desc",
      };
  }

  //pagination
  const skip = (page - 1) * pageSize;


  try {

    const [trainers,totalTrainers] = await Promise.all([

        prisma.trainer.findMany({
        where,
        orderBy,
        skip,
        take: pageSize,

        include:{
            user: {
                select:{
                    image: true, 
                    name: true,
                    email: true
                }
            }
        }
    }),
    prisma.trainer.count({
        where
    })
    ]) 

    const isNext  = totalTrainers > skip + trainers.length;

    return {
        success: true,
        data: {
            trainers,
            isNext,
        }
    }
    
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }

}
