"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { difficultyLevels, exerciseCategories, muscleGroups } from "@/constants/config";
import { CreateExerciseFormValues } from "@/types/global";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const BasicInformation = () => {
  const form = useFormContext<CreateExerciseFormValues>();
  return (
    <Card className="bg-color rounded-md">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row items-center gap-2 md:gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 p-2 text-sm font-bold md:text-xl">
              1
            </span>
            <h2 className="font-asap text-xl md:text-2xl">Basic Information</h2>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-4 flex flex-col gap-2">
        <div>
          <div className="grid gap-5 rounded-md border p-3 md:grid-cols-2">
            <Field>
              <FieldLabel className="font-asap flex items-center text-sm font-light opacity-80 md:text-xl">
                Exercise Name <span className="text-red-500">*</span>
              </FieldLabel>
              <Input
                {...form.register("name")}
                className="font-asap rounded-md font-light"
                autoComplete="name"
                placeholder="Enter the exercise name... ex:- Dumbelpress, Squts etc"
              />
            </Field>

            <Field>
              <FieldLabel className="font-asap flex items-center text-sm font-light opacity-80 md:text-xl">
                Category <span className="text-red-500">*</span>
              </FieldLabel>

              <Controller
                control={form.control}
                name="category"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={(value) => field.onChange(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>

                    <SelectContent>
                      {exerciseCategories.map((category) => (
                        <SelectItem className="font-asap font-light" key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>

            <Field>
              <FieldLabel className="font-asap flex items-center text-sm font-light opacity-80 md:text-xl">
                Muscle Group<span className="text-red-500">*</span>
              </FieldLabel>

              <Controller
                control={form.control}
                name="muscleGroup"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={(value) => field.onChange(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Muscle Group" />
                    </SelectTrigger>

                    <SelectContent>
                      {muscleGroups.map((muscle) => (
                        <SelectItem className="font-asap font-light" key={muscle} value={muscle}>
                          {muscle}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>

            <Field>
              <FieldLabel className="font-asap flex items-center text-sm font-light opacity-80 md:text-xl">
                Difficulty Level <span className="text-red-500">*</span>
              </FieldLabel>

              <Controller
                control={form.control}
                name="difficulty"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={(value) => field.onChange(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Deficulty Level" />
                    </SelectTrigger>

                    <SelectContent>
                      {difficultyLevels.map((level) => (
                        <SelectItem className="font-asap font-light" key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>
          </div>
          <div className="mt-3 rounded-md border p-3">
            <Field className="flex flex-col">
              <FieldLabel className="font-asap text-sm font-light opacity-70 md:text-xl">
                Description
                <span className="text-red-600">*</span>
              </FieldLabel>

              <Textarea
                {...form.register("description")}
                rows={4}
                placeholder="Describe the exercise, benefits, and execution..."
                className="font-asap rounded-md font-light"
              />
            </Field>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicInformation;
