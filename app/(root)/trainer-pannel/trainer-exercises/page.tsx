import CommonFilters from "@/components/filters/CommonFilters";
import Pagination from "@/components/Pagination";
import LoaclSearch from "@/components/search/LoaclSearch";
import TrainerExerciseTable from "@/components/Trainer_pannel/TrainerExerciseTable";
import { Button } from "@/components/ui/button";
import {EquipmentFilters, ExerciseCategoryFilters, MuscleGroupFilters } from "@/constants/filter";
import ROUTES from "@/constants/routes";
import {  getExerciseByTrainer } from "@/lib/actions/exercise.action";
import Link from "next/link";

interface SearchParams {
  searchParams: Promise<Record<string, string | undefined>>;
}

const TrainerExercisePage = async ({ searchParams }: SearchParams) => {
  const params = await searchParams;

  const { page, pageSize, query, filter, exerciseCategory, equipements, muscleGroup } = params;

  const { data } =  await getExerciseByTrainer({
  page: Number(page) || 1,
  pageSize: Number(pageSize) || 8,
  filter,
  category: exerciseCategory,
  equipements,
  muscleGroup,
  query,
});


  const exercises = data?.exercises ?? [];
  const isNext = data?.isNext ?? false;

  const path = ROUTES.TRAINER_PANNEL + "/trainer-exercises";
  return (
    <section className="flex-1">
      <div className="mt-15 flex w-full flex-col p-5">
        <header className="flex w-full flex-col justify-between gap-4 p-2 lg:flex-row">
          <div className="flex flex-col justify-between gap-1">
            <h1 className="font-iceland text-4xl md:text-5xl">Trainer Exercises</h1>
            <p className="font-asap text-sm opacity-70 md:text-xl">Create, manage and organise your exercise library</p>
          </div>

          <Link href={`${ROUTES.TRAINER_PANNEL}/trainer-exercises`}>
            <Button className="font-asap rounded-sm bg-red-600 px-2 py-3 font-bold text-white">+ Add exercise</Button>
          </Link>
        </header>

        <div className="mt-5 flex w-full">
          <div className="flex w-full items-center justify-between gap-3 rounded-md border p-2">
            <LoaclSearch
              route={path}
              imgSrc="/icons/search.svg"
              placeholder="Search your created Exercise..."
              iconPosition="right"
              otherClasses="max-w-1/2 bg-color "
            />

            <div className="font-asap flex flex-wrap gap-2 lg:w-1/2">
              <CommonFilters
                filters={ExerciseCategoryFilters}
                otherClasses="w-full"
                containerClasses=" bg-color rounded-md px-3 py-2"
                placeholder="Category"
                filterKey="exerciseCategory"
              />

              <CommonFilters
                filters={MuscleGroupFilters}
                otherClasses="w-full"
                containerClasses="bg-color rounded-md px-3 py-2"
                placeholder="Muscle Group"
                filterKey="muscleGroup"
              />
              <CommonFilters
                filters={EquipmentFilters}
                otherClasses="w-full"
                containerClasses="bg-color rounded-md px-3 py-2"
                placeholder="Equipements"
                filterKey="equipements"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex w-full flex-col">
          <TrainerExerciseTable data={exercises} />
          <Pagination containerClasses="mt-2" page={Number(page) || 1} isNext={isNext} />
        </div>
      </div>
    </section>
  );
};

export default TrainerExercisePage;
