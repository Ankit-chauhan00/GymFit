"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { CreateExerciseFormValues } from "@/types/global";
import { createExerciseSchema } from "@/lib/validation";
import BasicInformation from "./BasicInformation";
import ExerciseMedia from "./ExerciseMedia";

interface ExerciseFormProps {
  onSubmit: (data: CreateExerciseFormValues) => Promise<{ success: boolean }>;
}

export default function ExerciseForm({ onSubmit }: ExerciseFormProps) {
  const form = useForm<CreateExerciseFormValues>({
    resolver: zodResolver(createExerciseSchema),
  });

  return (
    <FormProvider {...form}>
      <div className="mt-5">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            {/* Sections */}

            <div className="flex flex-col gap-3">
              <BasicInformation />
              <ExerciseMedia />
            </div>
            <div className="mt-5 flex">
              <Button type="submit">Create Exercise</Button>
            </div>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
