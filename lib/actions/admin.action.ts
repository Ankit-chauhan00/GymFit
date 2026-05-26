"use server";

import { ErrorResponse, PaginatedSearchParams } from "@/types/global";
import action from "../handlers/actions";
import handleError from "../handlers/error";
import { AdminFormschema, PaginatedSearchParamsSchema } from "../validation";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { auth } from "@/auth";
import { User } from "@/generated/prisma/client";

export async function CreateAdmin(params: AdminCreationParams): Promise<ActionResponse> {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  const validationResult = await action({ params, schema: AdminFormschema });
  if (validationResult instanceof Error) throw handleError(validationResult) as ErrorResponse;

  const { name, username, email, password, image } = validationResult.params!;
  const normalizedEmail = email.trim().toLowerCase();

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: normalizedEmail,
      },
    });

    if (existingUser) {
      if (existingUser.role === "ADMIN") {
        throw new Error("Admin Already Exists");
      }

      await prisma.user.update({
        where: {
          email: normalizedEmail,
        },

        data: {
          role: "ADMIN",
        },
      });

      return {
        success: true,
      };
    }

    await prisma.user.create({
      data: {
        password: hashedPassword,
        role: "ADMIN",
        name,
        username,
        email: normalizedEmail,
        image,
      },
    });

    return {
      success: true,
    };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }
}

export async function getUsers(params: PaginatedSearchParams): Promise<ActionResponse<{ users: User[] }>> {
  const validationResult = await action({
    params,
    schema: PaginatedSearchParamsSchema,
  });

  if (validationResult instanceof Error) return handleError(validationResult) as ErrorResponse;

  const { page = 1, pageSize = 10, query, filter } = await params;

  // search Query
  const where = query
    ? {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive" as const,
            },
          },
          {
            email: {
              contains: query,
              mode: "insensitive" as const,
            },
          },
        ],
      }
    : {};

  //Filtering

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

  // pagination

  const skip = (page - 1) * pageSize;

  try {
    const users = await prisma.user.findMany({
      where,
      orderBy,
      skip,
      take: pageSize,
    });

    return {
      success: true,
      data: {
        users,
      },
    };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }
}
