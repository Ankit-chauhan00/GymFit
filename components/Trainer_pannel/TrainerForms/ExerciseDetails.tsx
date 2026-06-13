"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { CreateExerciseFormValues } from "@/types/global";
import React from "react";
import { useFormContext } from "react-hook-form";

const ExerciseDetails = () => {
  const form = useFormContext<CreateExerciseFormValues>();
  return (
    <Card className="bg-color p-2 rounded-md ">
      <CardTitle>
        <div className="flex flex-row items-center gap-2 md:gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 p-2 text-sm font-bold md:text-xl">
            3
          </span>
          <h2 className="font-asap text-xl md:text-2xl">Exercie Details</h2>
        </div>
      </CardTitle>
      <CardContent className="mt-2 lg:mt-6 flex flex-col gap-2 ">
        <div>
          <div className="grid gap-2 md:grid-cols-2 md:gap-5">
            <Field>
              <FieldLabel className="font-asap flex items-center text-sm font-light opacity-80 md:text-xl">
                Sets <span className="text-red-500">*</span>
              </FieldLabel>

              <Input
                {...form.register("sets", {
                  valueAsNumber: true,
                })}
                placeholder="Number of sets..."
                className="font-asap font-light"
                type="number"
                autoComplete="sets"
                min={1}
              />
            </Field>

            <Field>
              <FieldLabel className="font-asap flex items-center text-sm font-light opacity-80 md:text-xl">
                Reps <span className="text-red-500">*</span>
              </FieldLabel>

              <Input
                {...form.register("reps",{
                    valueAsNumber: true
                })}
                placeholder="Number of reps..."
                className="font-asap font-light"
                type="number"
                autoComplete="reps"
                min={1}
              />
            </Field>

            <Field>
              <FieldLabel className="font-asap flex items-center text-sm font-light opacity-80 md:text-xl">
                Rest Time (sec) <span className="text-red-500">*</span>
              </FieldLabel>
              <Input
                {...form.register("restTime",{
                    valueAsNumber: true
                })}
                placeholder="Rest time in seconds..."
                className="font-asap font-light"
                type="number"
                autoComplete="rest"
                min={0}
              />
            </Field>

            <Field>
              <FieldLabel className="font-asap flex items-center text-sm font-light opacity-80 md:text-xl">
                Duration <span className="text-red-500">*</span>
              </FieldLabel>
              <Input
                {...form.register("duration",{
                    valueAsNumber:true
                })}
                placeholder="Total duration"
                className="font-asap font-light"
                type="number"
                autoComplete="duration"
                min={1}
              />
            </Field>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExerciseDetails;
