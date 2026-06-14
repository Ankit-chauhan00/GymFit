
import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import Image from "next/image";
import { Badge } from "../ui/badge";

import { Exercise } from "@prisma/client";

interface TrainerExerciseTableProps {
  data: Exercise[];
}

const TrainerExerciseTable = ({data}:TrainerExerciseTableProps) => {
  const exercises = data;

  

  return (
    <Table className="bg-color rouned-1.5 p-2">
      <TableCaption>A List of your Recent Created Exercises</TableCaption>
      <TableHeader className="font-asap rounded-1.5 border p-2">
        <TableHead className="max-w-[200px] text-xl">Exercise</TableHead>
        <TableHead className="min-w-[200px] text-xl">Muscle Group</TableHead>
        <TableHead className="min-w-[200px] text-xl">Equipements</TableHead>
        <TableHead className="min-w-[200px] text-xl">Actions</TableHead>
      </TableHeader>

      <TableBody>
        {exercises.map((exercise) => (
          <TableRow key={exercise.id}>
            <TableCell>
              <div className="flex gap-3 p-2">
                <Image height={100} width={100} className="rounded-md" src={exercise.imageUrl!} alt="thumbnail" />
                <div className="flex flex-col pt-6">
                  <p className="text-xl">{exercise.name}</p>
                  <p className="text-sm opacity-70">{exercise.description}</p>
                </div>
              </div>
            </TableCell>

            <TableCell>
              <Badge className="bg-red-600 text-white">{exercise.muscleGroup}</Badge>
            </TableCell>

            <TableCell>{exercise.equipments}</TableCell>

            <TableCell>{exercise.category}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TrainerExerciseTable;
