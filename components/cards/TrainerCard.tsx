import Image from "next/image";
import React from "react";

interface Trainer {
  id: number;
  name: string;
  role: string;
  specialization: string;
  image: string;
  experience: number;
  certification: string;
  rating: number;
  clients: number;
  isActive: boolean;
}

interface TrainerCardProps {
  data: Trainer;
  variant?: "compact" | "full";
}

const TrainerCard = ({
  data: { name, role, specialization, image, experience, certification, rating, clients, isActive },
  variant = "compact",
}: TrainerCardProps) => {
  const isFull = variant === "full";

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white text-black transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
      {/* Image */}
      <div className={`relative w-full overflow-hidden ${isFull ? "h-80 sm:h-96 lg:h-[500px]" : "h-56 sm:h-64"}`}>
        <Image src={image} fill alt="trainer" className="object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 lg:p-6">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex-1">
            <h2
              className={`leading-tight font-black uppercase ${
                isFull ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"
              }`}
            >
              {name}
            </h2>

            <p className="mt-1 text-xs tracking-widest text-red-500 uppercase sm:text-sm">{role}</p>
          </div>

          <span
            className={`flex-shrink-0 rounded-full px-2 py-1 text-xs font-semibold whitespace-nowrap sm:px-3 ${
              isActive
                ? "bg-green-500/20 text-green-400 dark:bg-green-500/20 dark:text-green-400"
                : "bg-red-500/20 text-red-400 dark:bg-red-500/20 dark:text-red-400"
            }`}
          >
            {isActive ? "Active" : "Offline"}
          </span>
        </div>

        <p className={`mt-3 text-gray-600 dark:text-zinc-400 ${isFull ? "text-base" : "text-xs sm:text-sm"}`}>
          {specialization}
        </p>

        {/* Compact View */}
        {!isFull && (
          <div className="mt-4 flex items-center justify-between text-xs text-gray-700 sm:mt-5 sm:text-sm dark:text-zinc-300">
            <span>{experience}+ Years</span>
            <span>⭐ {rating}</span>
            <span>{clients}+ Clients</span>
          </div>
        )}

        {/* Full View */}
        {isFull && (
          <>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
              <div className="rounded-xl bg-gray-100 p-3 sm:p-4 dark:bg-zinc-900">
                <p className="text-xs text-gray-600 sm:text-sm dark:text-zinc-500">Experience</p>
                <h3 className="mt-2 text-lg font-bold sm:text-2xl">{experience}+ Years</h3>
              </div>

              <div className="rounded-xl bg-gray-100 p-3 sm:p-4 dark:bg-zinc-900">
                <p className="text-xs text-gray-600 sm:text-sm dark:text-zinc-500">Rating</p>
                <h3 className="mt-2 text-lg font-bold sm:text-2xl">⭐ {rating}</h3>
              </div>

              <div className="rounded-xl bg-gray-100 p-3 sm:p-4 dark:bg-zinc-900">
                <p className="text-xs text-gray-600 sm:text-sm dark:text-zinc-500">Clients</p>
                <h3 className="mt-2 text-lg font-bold sm:text-2xl">{clients}+</h3>
              </div>

              <div className="rounded-xl bg-gray-100 p-3 sm:p-4 dark:bg-zinc-900">
                <p className="text-xs text-gray-600 sm:text-sm dark:text-zinc-500">Certification</p>
                <h3 className="mt-2 text-lg font-bold sm:text-2xl">{certification}</h3>
              </div>
            </div>

            <button className="mt-6 w-full rounded-xl bg-red-600 py-3 text-sm font-bold tracking-wide uppercase transition hover:bg-red-700 sm:mt-8 sm:py-4 sm:text-base">
              Book Session
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TrainerCard;
