import { createExerciseSchema } from "@/lib/validation";
import type { DefaultSession } from "next-auth";

type ErrorResponse = ActionResponse<undefined> & { success: false };

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      role?: string;
    } & DefaultSession["user"];
  }

  interface User {
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string;
  }
}

interface PaginatedSearchParams {
  page?: number;
  pageSize?: number;
  query?: string;
  filter?: string;
  sort?: string;
  isVerified?: boolean;
}

interface CreateMemberships {
  name: string;
  description?: string;
  price: number;
  durationDays: number;
  image: string;
}

type SerializedProduct = Omit<Product, "price"> & {
  price: number;
};
type TrainerWithUser = Trainer & { user: { image: string | null; name: string | null } };

interface RouteParams {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

export interface ProductWithSingleImageProps {
  id: string;
  title: string;
  price: Decimal;
  stock: number;
  modelUrl: string | null;
  category: Category | null;
  productType: ProductType | null;
  images: {
    imageUrl: string;
  }[];
}

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

type Client = {
  id: string;
  name: string;
  age: number;
  plan: string;
  status: "Active" | "Inactive";
};

export type CreateExerciseSchema = z.infer<typeof createExerciseSchema>;

export interface CreateExerciseFormValues {
  name: string;
  description: string;

  category: "strength" | "cardio" | "flexibility" | "mobility" | "balance";

  muscleGroup: "chest" | "back" | "shoulders" | "biceps" | "triceps" | "legs" | "glutes" | "core" | "full_body";

  difficulty: "beginner" | "intermediate" | "advanced";

  imageUrl?: string;
  videoUrl?: string;

  sets: number;
  reps: number;

  duration?: number;
  restTime: number;

  equipment: (typeof equipmentOptions)[number][];

  isPublic: boolean;

  caloriesBurned?: number;

  instructions: string[];
}
