import Link from "next/link";
import React from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { FaDumbbell, FaUserPlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { TbClipboardList } from "react-icons/tb";
import { RiUserUnfollowLine } from "react-icons/ri";

const actions = [
  {
    title: "Create New Exercise",
    description: "Add a new exercise to your library",
    href: "/",
    icon: FaDumbbell,
  },
  {
    title: "Add New User",
    description: "Add a new client to your roster",
    href: "/",
    icon: FaUserPlus,
  },
  {
    title: "Remove User",
    description: "Remove a client from your roster",
    href: "/",
    icon: RiUserUnfollowLine,
  },
  {
    title: "Exercise Library",
    description: "View and manage exercises",
    href: "/",
    icon: MdOutlineLibraryBooks,
  },
  {
    title: "Workout Plans",
    description: "Create and manage workout plans",
    href: "/",
    icon: TbClipboardList,
  },
];

const QuickAccess = () => {
  return (
    <section className="w-full rounded-xl border  dark:border-white/10 dark:bg-[#0F1117] p-5 ">
      {/* Header */}
      <div className="flex items-center gap-3">
        <AiTwotoneThunderbolt size={24} className="text-red-500" />

        <h3 className="font-asap text-xl font-semibold text-black dark:text-white">Quick Actions</h3>
      </div>

      {/* Actions */}
      <div className="mt-5 space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-red-500/30 hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                  <Icon size={18} className="text-red-500" />
                </div>

                <div>
                  <p className="font-medium text-black dark:text-white">{action.title}</p>

                  <p className="text-sm text-gray-400">{action.description}</p>
                </div>
              </div>

              <IoIosArrowForward size={18} className="text-gray-500" />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default QuickAccess;
