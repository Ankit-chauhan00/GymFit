import CommonFilters from "@/components/filters/CommonFilters";
import Pagination from "@/components/Pagination";
import LoaclSearch from "@/components/search/LoaclSearch";
import UserTable from "@/components/Trainer_pannel/UserTable";
import { DefaultFilters } from "@/constants/filter";
import ROUTES from "@/constants/routes";
import { getTrainerClients } from "@/lib/actions/trainer.action";

interface SearchParams {
  searchParams: Promise<Record<string, string | undefined>>;
}

const TrainerClients = async ({searchParams}: SearchParams) => {
  const params = await searchParams;

  const {page, pageSize, query, filter} = params!;

  const { data } = await getTrainerClients({
    page: Number(page) || 1,
    pageSize: Number(pageSize) || 10,
    query,
    filter,
  });

  const clients = data?.clients ?? [];
  const isNext = data?.isNext ?? false;

  return (
    <section className="flex-1">
      <div className="mt-15 flex flex-col p-5">
        <header className="flex flex-col">
          <h1 className="font-iceland text-4xl md:text-6xl">Add Client</h1>
          <p className="font-asap opacity-70">Add clients associated to you</p>

          <div className="mt-2 flex flex-col md:mt-5">
            <div className="mt-5 flex flex-col gap-4 md:flex-row">
              <LoaclSearch
                route={`${ROUTES.TRAINER_PANNEL}/trainer-clients`}
                iconPosition="right"
                imgSrc="/icons/search.svg"
                placeholder="Search your clients..."
                otherClasses="w-full bg-color border"
              />

              <CommonFilters filters={DefaultFilters} placeholder="Sort By" otherClasses="bg-color md:w-[180px]" />
            </div>

            <div className="mt-10 w-full flex-1">
              <UserTable users={clients}  />
              <Pagination page={Number(page) || 1} isNext={isNext} containerClasses="mt-3" />
            </div>
          </div>
        </header>

        <main className="mt-5"></main>
      </div>
    </section>
  );
};

export default TrainerClients;
