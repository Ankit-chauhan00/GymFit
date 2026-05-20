import { ValidationError } from "@/lib/http-errors";
import prisma from "@/lib/prisma";
import { SigninWithOAuthSchema } from "@/lib/validation";
import { NextResponse } from "next/server";
import z from "zod";

export async function POST(request: Request) {
  const { provider, user, providerAccountId } = await request.json();

  const validatedData = SigninWithOAuthSchema.safeParse({
    provider,
    providerAccountId,
    user,
  });
  if (!validatedData.success) {
    const flattenError = z.treeifyError(validatedData.error);
    throw new ValidationError(flattenError);
  }

  await prisma.$transaction(async (tx) => {
    const existingUser = await tx.user.findUnique({
      where: {
        email: user.email!,
      },
    });

    if (!existingUser) {
      await tx.user.create({
        data: {
          email: user.email!,
          name: user.name,
          imageUrl: user.image,
          username: user.email!.split("@")[0],
        },
      });
    } else {
      const updatedData: {
        name?: string;
        imageUrl?: string;
      } = {};

      if (user.name && existingUser.name !== user.name) updatedData.name = user.name;
      if (user.image && existingUser.imageUrl != user.image) updatedData.imageUrl = user.image;

      if(Object.keys(updatedData).length > 0){
        await tx.user.update({
            where:{
            id: existingUser.id,
            },
            data: updatedData,
        });
      }
    }
  });

  return NextResponse.json({success: true});
}
