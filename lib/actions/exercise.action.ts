"use server";
import { ActionResponse } from "@/types/action";
import handleError from "../handlers/error";
import { CreateExerciseFormValues, ErrorResponse } from "@/types/global";
import action from "../handlers/actions";
import prisma from "../prisma";
import { createExerciseSchema } from "../validation";
import logger from "../logger";

export async function createExercise(params: CreateExerciseFormValues): Promise<ActionResponse> {
  const validationRsult = await action({
    params,
    schema: createExerciseSchema,
    authorize: true,
    isTrainer: true,
  });
  if (validationRsult instanceof Error) return handleError(validationRsult) as ErrorResponse;

  const userIdOfTrainer = validationRsult.session?.user.id;
  logger.info({ userIdOfTrainer });

  if (!userIdOfTrainer) {
    throw new Error("Trainer not found");
  }

  const { ...exerciseData } = validationRsult.params!;

  const normalizedData = {
    ...exerciseData,
    category: exerciseData.category.toUpperCase(),
    muscleGroup: exerciseData.muscleGroup.toUpperCase(),
    difficulty: exerciseData.difficulty.toUpperCase(),
    equipments: exerciseData.equipments.map((e: string) => e.toUpperCase()),
  };

  try {
    const trainer = await prisma.trainer.findUnique({
      where: {
        userId: userIdOfTrainer,
      },
    });

    if (!trainer) throw new Error("Trainer not found");
   
    
    await prisma.exercise.create({
      data: {
        trainerId: trainer.id,
        ...normalizedData,
      },
    });

    return { success: true, message: "Exercise created successfully" };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }
}
