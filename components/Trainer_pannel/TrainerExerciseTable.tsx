"use client";
import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import Image from "next/image";
import { Badge } from "../ui/badge";

import { Exercise } from "@prisma/client";
import { Button } from "../ui/button";
import { MdDelete } from "react-icons/md";
import { deleteTrainerExercise } from "@/lib/actions/trainer.action";
import { useRouter } from "next/navigation";
interface TrainerExerciseTableProps {
  data: Exercise[];
}

const TrainerExerciseTable = ({ data }: TrainerExerciseTableProps) => {
  const exercises = data;
  const router = useRouter();

  const handleExerciseDelete = async (exerciseId: string) => {
    const result = await deleteTrainerExercise({ exerciseId });

    if (result.success) {
      router.refresh();
    }
  };

  return (
    <Table className="bg-color rouned-1.5 p-2">
      <TableCaption>A List of your Recent Created Exercises</TableCaption>
      <TableHeader className="font-asap rounded-1.5 border p-2">
        <TableRow>
          <TableHead className="max-w-[200px] text-xl">Exercise</TableHead>
          <TableHead className="min-w-[200px] text-xl">Muscle Group</TableHead>
          <TableHead className="min-w-[200px] text-xl">Equipments</TableHead>
          <TableHead className="min-w-[200px] text-xl">Actions</TableHead>
        </TableRow>
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

            <TableCell>
              <div className="flex flex-wrap gap-2">
                {exercise.equipments.map((equipment) => (
                  <Badge key={equipment}>{equipment}</Badge>
                ))}
              </div>
            </TableCell>

            <TableCell>
              <Button
                onClick={() => handleExerciseDelete(exercise.id)}
                className="bg-red-600 text-white hover:bg-red-400 hover:text-green-400"
              >
                <MdDelete />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TrainerExerciseTable;
