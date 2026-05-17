"use client";
import TrainerCard from "@/components/cards/TrainerCard";
import Link from "next/link";

export const trainers = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Strength Coach",
    specialization: "Strength & Conditioning Specialist",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e6349?q=80&w=1200&auto=format&fit=crop",
    experience: 8,
    certification: "NASM",
    rating: 4.9,
    clients: 500,
    isActive: true,
  },

  {
    id: 2,
    name: "Jessica Davis",
    role: "Fitness Coach",
    specialization: "Weight Loss & Transformation Expert",
    image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?q=80&w=1200&auto=format&fit=crop",
    experience: 6,
    certification: "ACE",
    rating: 4.8,
    clients: 320,
    isActive: true,
  },

  {
    id: 3,
    name: "David Thompson",
    role: "Performance Coach",
    specialization: "Performance & Mobility Coach",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    experience: 10,
    certification: "CSCS",
    rating: 4.9,
    clients: 700,
    isActive: false,
  },

  {
    id: 4,
    name: "Sophia Carter",
    role: "Yoga Trainer",
    specialization: "Flexibility & Mindfulness Expert",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    experience: 5,
    certification: "RYT-200",
    rating: 4.7,
    clients: 280,
    isActive: true,
  },

  {
    id: 5,
    name: "Ryan Cooper",
    role: "CrossFit Coach",
    specialization: "HIIT & Functional Training",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop",
    experience: 7,
    certification: "CrossFit Level 2",
    rating: 4.8,
    clients: 450,
    isActive: true,
  },

  {
    id: 6,
    name: "Emily Watson",
    role: "Nutrition Coach",
    specialization: "Sports Nutrition & Diet Planning",
    image: "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1200&auto=format&fit=crop",
    experience: 4,
    certification: "Precision Nutrition",
    rating: 4.6,
    clients: 210,
    isActive: false,
  },
];

const Trainers = () => {
  return (
    <section className="min-h-screen w-full bg-white transition-colors duration-300 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-red-500 uppercase">Expert Trainers</p>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-black uppercase md:text-6xl dark:text-white">
            Meet Our Coaches
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Train with certified professionals dedicated to helping you achieve your fitness goals.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {trainers.map((trainer) => (
            <Link className="block" key={trainer.id} href={`/trainers/${trainer.id}`}>
              <TrainerCard data={trainer} variant="compact" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
