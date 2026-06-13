"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { CreateExerciseFormValues } from "@/types/global";
import { createExerciseSchema } from "@/lib/validation";
import BasicInformation from "./BasicInformation";
import ExerciseMedia from "./ExerciseMedia";
import ExerciseDetails from "./ExerciseDetails";
import EquipementsForm from "./EquipementsForm";
import { toast } from "sonner";

interface ExerciseFormProps {
  onSubmit: (data: CreateExerciseFormValues) => Promise<{ success: boolean }>;
}

export default function ExerciseForm({ onSubmit }: ExerciseFormProps) {
  const form = useForm<CreateExerciseFormValues>({
    resolver: zodResolver(createExerciseSchema),
    defaultValues: {
      category: "",
      muscleGroup: "",
      difficulty: "",
    },
  });

  const handleSubmit: SubmitHandler<CreateExerciseFormValues> = async (data) => {
    const result = await onSubmit(data);

    if (result.success) {
      toast.success("Exercise created successfully");
      form.reset({
        imageUrl: "",
        videoUrl: "",
      });
      form.reset();
    } else {
      toast.error("Failed to create exercise");
    }
  };
  return (
    <FormProvider {...form}>
      <div className="mt-5">
        <form className="w-full" onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="flex flex-col">
            <div className="flex w-full flex-col items-center">
              {/* Sections */}

              <div className="grid gap-3 lg:grid-cols-2">
                <BasicInformation />
                <ExerciseMedia />
                <ExerciseDetails />
                <EquipementsForm />
              </div>
              <div className="mt-5 flex gap-6">
                <Button type="submit">Create Exercise</Button>
                <Button
                  onClick={() => {
                    form.reset({
                      imageUrl: "",
                      videoUrl: "",
                    });
                  }}
                >
                  Reset Form
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
