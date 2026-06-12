"use client";
import { DataTable } from "@/components/Trainer_pannel/DataTable";
import TrainerSmallCard from "@/components/Trainer_pannel/TrainerSmallCard";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { BiHome, BiUser, BiDumbbell, BiCalendar, BiTrendingUp } from "react-icons/bi";

import Link from "next/link";
import { trainerColumns } from "@/components/Trainer_pannel/TrainerColumn";
import { trainerData } from "@/constants/dummydata";
import QuickAccess from "@/components/Trainer_pannel/QuickAccess";

const TrainerPannelPage = () => {
  const dashboardCards = [
    {
      icon: BiUser,
      title: "Total Clients",
      analytics: 23,
      footer: {
        title: "18 Active",
        cardType: "Clients",
      },
    },

    {
      icon: BiDumbbell,
      title: "Exercises",
      analytics: 48,
      footer: {
        title: "12 New",
        cardType: "This Month",
      },
    },

    {
      icon: BiCalendar,
      title: "Workout Plans",
      analytics: 15,
      footer: {
        title: "4 Updated",
        cardType: "This Week",
      },
    },

    {
      icon: BiTrendingUp,
      title: "Completed Sessions",
      analytics: 124,
      footer: {
        title: "+18%",
        cardType: "Growth",
      },
    },

    {
      icon: BiHome,
      title: "Assigned Programs",
      analytics: 31,
      footer: {
        title: "8 Pending",
        cardType: "Reviews",
      },
    },
  ];

  const column = trainerColumns;
  const data = trainerData;

  return (
    <main className="min-h-[80%] w-full flex-1">
      <section className="mt-15 flex w-full flex-col p-5">
        <p className="font-asap text-sm opacity-55 md:text-xl">/Trainer-Pannel</p>
        <p className="font-iceland text-3xl transition-all lg:text-4xl">Trainer Pannel</p>

        <div className="mt-5 flex w-full flex-col">
          <div className="flex w-full flex-col justify-between gap-5 lg:flex-row">
            <div className="flex flex-col">
              <h1 className="font-asap text-3xl font-medium md:text-4xl">Welcome Back, Ankit 👋</h1>
              <p className="font-asap text-sm font-light opacity-70 lg:text-xl">
                Here What happening with your clients toaday
              </p>
            </div>

            <div className="">
              <Link href={`${ROUTES.TRAINER_PANNEL}/create-exercise`}>
                <Button className="rounded-sm bg-red-600 font-bold text-white hover:scale-110 hover:bg-green-600">
                  + Create New Exercise
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="lg:grid-row-1 grid w-full gap-5 md:grid-cols-2 lg:grid-cols-5">
            {dashboardCards.map((card) => (
              <TrainerSmallCard key={card.title} data={card} />
            ))}
          </div>
        </div>

        <div className="mt-5 grid md:grid-cols-2 gap-5">
          <DataTable  columns={column} data={data} />
          <QuickAccess/>
        </div>
      </section>
    </main>
  );
};

export default TrainerPannelPage;
