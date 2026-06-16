"use server";
import {
  ActionResponse,
  createTrainerClientParams,
  deleteTrainerExerciseParams,
  getPaginatedExerciseParams,
  getUsersForTrainerParams,
  SafeTrainerUser,
} from "@/types/action";
import handleError from "../handlers/error";
import { CreateExerciseFormValues, ErrorResponse } from "@/types/global";
import action from "../handlers/actions";
import prisma from "../prisma";
import {
  createExerciseSchema,
  createTrianerClientSchema,
  deleteTrainerExerciseSchema,
  getPaginatedExerciseServerActionSchema,
  getUserForTrainerSchema,
} from "../validation";
import logger from "../logger";
import { Exercise, Prisma } from "@prisma/client";

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

export async function getExerciseByTrainer(
  params: getPaginatedExerciseParams
): Promise<ActionResponse<{ exercises: Exercise[]; isNext: boolean }>> {
  const validationResult = await action({
    params,
    schema: getPaginatedExerciseServerActionSchema,
    authorize: true,
    isTrainer: true,
  });

  if (validationResult instanceof Error) return handleError(validationResult) as ErrorResponse;

  const { page, pageSize, query, filter, muscleGroup, equipments, category } = validationResult.params!;
  //search query

  const userId = validationResult.session?.user.id;

  const trainer = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      trainerProfile: {
        select: {
          id: true,
        },
      },
    },
  });
  const trainerId = trainer?.trainerProfile?.id;
  console.log("TRAINER ID:", trainerId);

  if (!trainerId) {
    return handleError(new Error("Trainer profile not found")) as ErrorResponse;
  }

  const where: Prisma.ExerciseWhereInput = {
    trainerId,

    ...(query && {
      name: {
        contains: query,
        mode: "insensitive",
      },
    }),

    ...(muscleGroup && {
      muscleGroup,
    }),

    ...(equipments && {
      equipments: {
        has: equipments,
      },
    }),

    ...(category && {
      category,
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

  const skip = (page - 1) * pageSize;

  try {
    const [exercises, totalExercise] = await Promise.all([
      prisma.exercise.findMany({
        where,
        orderBy,
        skip,
        take: pageSize,
      }),
      prisma.exercise.count({
        where,
      }),
    ]);

    const isNext = skip + exercises.length < totalExercise;

    return {
      success: true,
      data: {
        exercises,
        isNext,
      },
    };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }
}

export async function deleteTrainerExercise(params: deleteTrainerExerciseParams): Promise<ActionResponse> {
  const validationResult = await action({
    params,
    schema: deleteTrainerExerciseSchema,
    authorize: true,
    isTrainer: true,
  });

  if (validationResult instanceof Error) return handleError(validationResult) as ErrorResponse;

  const userId = validationResult.session?.user.id;
  const { exerciseId } = validationResult.params;

  try {
    const trainer = await prisma.trainer.findUnique({
      where: {
        userId,
      },
      select: {
        id: true,
      },
    });

    if (!trainer) {
      throw new Error("Trainer not found");
    }

    const result = await prisma.exercise.deleteMany({
      where: {
        id: exerciseId,
        trainerId: trainer.id,
      },
    });

    if (result.count === 0) throw new Error("Exercise Not Found");

    return {
      success: true,
      message: "Exercise Deleted Successfully",
    };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }
}

export async function getUserForTrainer(
  params: getUsersForTrainerParams
): Promise<ActionResponse<{ users: SafeTrainerUser[]; isNext: boolean }>> {
  const validationResult = await action({
    params,
    schema: getUserForTrainerSchema,
    authorize: true,
    isTrainer: true,
  });

  if (validationResult instanceof Error) return handleError(validationResult) as ErrorResponse;

  const { query, page, pageSize, filter } = validationResult.params;

  try {
    const where = {
      role: "USER",

      ...(query && {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            email: {
              contains: query,
              mode: "insensitive",
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

    const skip = (page - 1) * pageSize;

    const [users, totalUsers] = await Promise.all([
      prisma.user.findMany({
        where,
        orderBy,
        skip,
        take: pageSize,
        select:{
          id: true,
          name: true,
          username: true,
          email: true,
          createdAt: true
        }
      }),
      prisma.user.count({
        where,
      }),
    ]);

    const isNext = skip + users.length < totalUsers;

    return {
      success: true,
      data: {
        users,
        isNext,
      },
    };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }
}

export async function createTrainerClient(params: createTrainerClientParams): Promise<ActionResponse> {
  const validationResult = await action({
    params,
    schema: createTrianerClientSchema,
    authorize: true,
    isTrainer: true,
  });

  if (validationResult instanceof Error) return handleError(validationResult) as ErrorResponse;

  const trainerUserId = validationResult.session?.user.id;
  const { clientId } = validationResult.params!;

  try {
    const trainer = await prisma.trainer.findUnique({
      where: {
        userId: trainerUserId,
      },
    });

    if (!trainer) throw new Error("Trainer Not Found");

    const expireAt = new Date(Date.now() + 31 * 24 * 60 * 60 * 1000);

    const existingClient = await prisma.trainerClient.findFirst({
      where: {
        trainerId: trainer.id,
        userId: clientId,
      },
    });

    if (existingClient) {
      throw new Error("Client already added");
    }
    await prisma.trainerClient.create({
      data: {
        trainerId: trainer.id,
        userId: clientId,
        ptStatus: "ACTIVE",
        expireAt,
      },
    });

    return {
      success: true,
      message: "Trainer Created Successfully",
    };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }
}
