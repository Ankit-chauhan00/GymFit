import { difficultyLevels, equipmentOptions, exerciseCategories, muscleGroups } from "@/constants/config";
import z from "zod";

export const SigninWithOAuthSchema = z.object({
  provider: z.enum(["github", "google"]),
  providerAccountId: z.string().min(1, { message: "Provider Account Required" }),
  user: z.object({
    name: z.string().min(1, "Name is required"),
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z
      .string()
      .email("Invalid email address")
      .transform((value) => value.trim().toLowerCase()),
    image: z.url("Invalid image URL").optional(),
  }),
});

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." })
    .max(30, { message: "Username cannot exceed 30 characters." })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores.",
    }),

  name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(50, { message: "Name cannot exceed 50 characters." })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name can only contain letters and spaces.",
    }),

  email: z
    .email({ message: "Please provide a valid email address." })
    .min(1, { message: "Email is required." })
    .transform((value) => value.trim().toLowerCase()),

  //we can make password strong later in production
  password: z.string(),
});

export const SignInSchema = z.object({
  email: z
    .email({ message: "Please provide a valid email address." })
    .min(1, { message: "Email is required." })
    .transform((value) => value.trim().toLowerCase()),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(100, { message: "Password cannot exceed 100 characters." }),
});

export const AdminFormschema = z.object({
  email: z
    .email()
    .min(1, { message: "Email is Required" })
    .transform((value) => value.trim().toLowerCase()),
  password: z.string().min(6, "password must be 6 character long"),
  image: z.string().optional(),
  username: z.string().min(1, { message: "username is Required" }),
  name: z.string().min(1, { message: " name is Required" }),
});

export const PaginatedSearchParamsSchema = z.object({
  page: z.number().int().positive().default(1),
  pageSize: z.number().int().default(10),
  query: z.string().optional(),
  filter: z.string().optional(),
  sort: z.string().optional(),
  isVerified: z.boolean().optional(),
});

export const TrainerSchema = z.object({
  email: z.email().min(1, { message: "Email is required" }),
  username: z.string().min(5, { message: "min 5 length username is required" }),
  specialization: z.string().optional(),
  phone: z.string().optional(),
  experience: z.string().optional(),
  image: z.string().optional(),
  password: z.string(),
});

export const CreateMembershipSchema = z.object({
  membershipName: z.string().min(1, { message: "Membership name is Required" }),
  description: z.string().optional(),
  membershipPrice: z.number(),
  membershipDuration: z.number().int(),
  isActive: z.boolean().default(true),
});

export const productCreationSchema = z.object({
  title: z.string().min(1, { message: "Title is Required" }),
  description: z.string().min(1, { message: "Description is Required" }),
  price: z.number(),
  stock: z.number().int(),
  category: z.enum(["SUPPLEMENTS", "EQUIPMENTS", "ACCESSORIES"]),
  productType: z.enum([
    "WHEY_PROTEIN",
    "MASS_GAINER",
    "PREWORKOUT",
    "CREATINE",
    "BCAA",
    "MULTIVITAMIN",
    "FISH_OIL",
    "SHAKER",
    "GYM_GLOVES",
    "RESISTANCE_BAND",
    "DUMBBELL",
  ]),
  images: z.array(z.string()).optional(),

  modelUrl: z.string().optional(),
});

export const productCreationActionSchema = z.object({
  title: z.string().min(1, { message: "Title is Required" }),
  description: z.string().min(1, { message: "Description is Required" }),
  price: z.number(),
  stock: z.number().int(),
  category: z.enum(["SUPPLEMENTS", "EQUIPMENTS", "ACCESSORIES"]),
  productType: z.enum([
    "WHEY_PROTEIN",
    "MASS_GAINER",
    "PREWORKOUT",
    "CREATINE",
    "BCAA",
    "MULTIVITAMIN",
    "FISH_OIL",
    "SHAKER",
    "GYM_GLOVES",
    "RESISTANCE_BAND",
    "DUMBBELL",
  ]),
  images: z.array(z.string()).optional(),

  modelUrl: z.string().optional(),
});

export const GetTrainerByIdSchema = z.object({
  trainerId: z.string().min(1, { message: "Trainer Id is required" }),
});

export const GetProductByIdSchema = z.object({
  productId: z.string().min(1, { message: "Product Id is required" }),
});

export const GetFilteredProductsSchema = z.object({
  page: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  query: z.string().optional(),
  filter: z.string().optional(),
  category: z.string().optional(),
  productType: z.string().optional(),
});

export const AddToCartSchema = z.object({
  productId: z.string().min(1, { message: "Product Id is Required" }),
});

export const GetCartItemsSchema = PaginatedSearchParamsSchema.extend({
  userId: z.string().min(1, { message: "User Id needed" }),
});

export const createOrderSchema = z.object({
  productId: z.string().min(1, { message: "product id is required" }),
  quantity: z.number().int(),
  totalAmount: z.number().positive(),

  fullname: z.string().min(1, { message: "Full name is requires" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  addressLine1: z.string().min(1, { message: "Address is Required" }),
  addressLine2: z.string().optional(),
  city: z.string().min(1, { message: "City is Reqired" }),
  state: z.string().min(1, { message: "State is Required" }),
  postalCode: z.string().min(1, { message: "postal Code is required" }),
  country: z.string().min(1, { message: "country is Required" }),
  paymentMode: z.enum(["PREPAID", "COD"]),
});

export const createOrderFormSchema = z.object({
  fullname: z.string().min(1, { message: "Full name is requires" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  addressLine1: z.string().min(1, { message: "Address is Required" }),
  addressLine2: z.string().optional(),
  city: z.string().min(1, { message: "City is Reqired" }),
  state: z.string().min(1, { message: "State is Required" }),
  postalCode: z.string().min(1, { message: "postal Code is required" }),
  country: z.string().min(1, { message: "country is Required" }),
  paymentMode: z.enum(["PREPAID", "COD"]),
});

export const createExerciseSchema = z.object({
  name: z.string().min(3, "Exercise name must be at least 3 characters").max(100),

  description: z.string().min(10, "Description is required").max(200),

  category: z.enum(exerciseCategories),

  muscleGroup: z.enum(muscleGroups),

  difficulty: z.enum(difficultyLevels),

  imageUrl: z.url("Invalid image URL").optional().or(z.literal("")),

  videoUrl: z.url("Invalid video URL").optional().or(z.literal("")),

  sets: z.number().min(1, "Sets must be at least 1").max(20).optional(),

  reps: z.number().min(1, "Reps must be at least 1").max(100).optional(),

  duration: z.number().min(1).max(180).optional(),

  restTime: z.number().min(0).max(600).optional(),

  equipments: z.array(z.enum(equipmentOptions)).min(1,{message:"Select at least one Equipement"}),

  isPublic: z.boolean().default(true),

  caloriesBurned: z.number().optional(),

});

export const getPaginatedExerciseServerActionSchema = PaginatedSearchParamsSchema.extend({
  category: z.enum(exerciseCategories).optional(),
  equipments: z.enum(equipmentOptions).optional(),
  muscleGroup: z.enum(muscleGroups).optional()
})

export const deleteTrainerExerciseSchema = z.object({
  exerciseId: z.string().min(1,{message: "Exercsie Id is Required"}),
})

export const getUserForTrainerSchema = PaginatedSearchParamsSchema;

export const createTrianerClientSchema = z.object({
  clientId: z.string().min(1,{message: "User Id is Required"}),
})

export const removeTrainerClientSchema = z.object({
  clientId: z.string().min(1,{message: "User Id is Required"}),
})
