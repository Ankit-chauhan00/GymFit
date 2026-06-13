import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { equipmentOptions } from "@/constants/config";
import { CreateExerciseFormValues } from "@/types/global";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const EquipementsForm = () => {
  const form = useFormContext<CreateExerciseFormValues>();
  return (
    <Card className=" bg-color rounded-md">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row items-center gap-2 md:gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 p-2 text-sm font-bold md:text-xl">
              4
            </span>
            <h2 className="font-asap text-xl md:text-2xl">Equipements</h2>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid-4 mt-3 sm:grid-cols-2 md:grid-cols-4">
          <Controller
            control={form.control}
            name="equipments"
            render={({ field }) => (
              <>
                {equipmentOptions.map((equipment) => (
                  <div key={equipment} className="flex items-center gap-1 rounded-md border p-2">
                    <Checkbox
                      checked={field.value?.includes(equipment) ?? false}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          field.onChange([...(field.value ?? []), equipment]);
                        } else {
                          //means item is one of the value inside
                          field.onChange((field.value ?? []).filter((item : (typeof equipmentOptions)[number]) => item !== equipment));
                        }
                      }}
                    />
                    <label className="font-asap text-sm">{equipment}</label>
                  </div>
                ))}
              </>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default EquipementsForm;
