"use client";
import ExerciseForm from "@/components/Trainer_pannel/TrainerForms/ExerciseForm";
import { createExercise } from "@/lib/actions/exercise.action";
import React from "react";
import { FaDumbbell } from "react-icons/fa";

const CreateExecise = () => {
  return (
    <section className="flex-1">
      <div className="mt-15 w-full flex-col p-3 transition-opacity md:p-5 lg:p-8">
        <header className="flex w-full flex-row items-center gap-3 md:gap-5">
          <FaDumbbell className="size-[40px] text-red-600 md:size-[50px]" />
          <div className="flex flex-col">
            <h1 className="font-asap text-2xl font-bold">Create New Exercise</h1>
            <p className="font-asap text-sm font-light opacity-70">Add a new Exercise to Your library</p>
          </div>
        </header>

        <main className="flex w-full">
          <ExerciseForm onSubmit={createExercise} />
        </main>
      </div>
    </section>
  );
};

export default CreateExecise;
