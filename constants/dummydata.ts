import { Client } from "@/types/global";
import { ColumnDef } from "@tanstack/react-table";

export const demoProducts = [

  {
    id: "prod_1",
    title: "Optimum Gold Whey Protein 2lb",
    description: "Premium whey protein isolate blend for muscle recovery and lean muscle growth.",
    price: 2499,
    stock: 18,
    category: "SUPPLEMENTS",
    productType: "WHEY_PROTEIN",
    modelUrl: "https://example.com/models/whey-protein.glb",
    createdByUserId: "admin_1",
    createdAt: new Date(),
    updatedAt: new Date(),

    images: [
      {
        id: "img_1",
        imageUrl: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d",
        productId: "prod_1",
        createdAt: new Date(),
      },
      {
        id: "img_2",
        imageUrl: "https://images.unsplash.com/photo-1579722821273-0f6c1f2f2c8f",
        productId: "prod_1",
        createdAt: new Date(),
      },
    ],
  },

  {
    id: "prod_2",
    title: "MuscleBlaze Creatine Monohydrate",
    description: "Micronized creatine powder for strength, endurance, and explosive performance.",
    price: 899,
    stock: 35,
    category: "SUPPLEMENTS",
    productType: "CREATINE",
    modelUrl: "https://example.com/models/creatine.glb",
    createdByUserId: "admin_1",
    createdAt: new Date(),
    updatedAt: new Date(),

    images: [
      {
        id: "img_3",
        imageUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
        productId: "prod_2",
        createdAt: new Date(),
      },
    ],
  },

  {
    id: "prod_3",
    title: "C4 Ultimate Pre Workout",
    description: "High stimulant pre-workout formula for focus, energy, and gym performance.",
    price: 1799,
    stock: 12,
    category: "SUPPLEMENTS",
    productType: "PREWORKOUT",
    modelUrl: "https://example.com/models/preworkout.glb",
    createdByUserId: "admin_2",
    createdAt: new Date(),
    updatedAt: new Date(),

    images: [
      {
        id: "img_4",
        imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
        productId: "prod_3",
        createdAt: new Date(),
      },
    ],
  },

  {
    id: "prod_4",
    title: "Adjustable Dumbbell Set",
    description: "Space-saving adjustable dumbbells ideal for home and professional workouts.",
    price: 6999,
    stock: 6,
    category: "EQUIPMENTS",
    productType: "DUMBBELL",
    modelUrl: "https://example.com/models/dumbbell.glb",
    createdByUserId: "admin_2",
    createdAt: new Date(),
    updatedAt: new Date(),

    images: [
      {
        id: "img_5",
        imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
        productId: "prod_4",
        createdAt: new Date(),
      },
      {
        id: "img_6",
        imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
        productId: "prod_4",
        createdAt: new Date(),
      },
    ],
  },

  {
    id: "prod_5",
    title: "Premium Resistance Bands Kit",
    description: "Heavy-duty resistance bands for strength training, stretching, and rehab exercises.",
    price: 1299,
    stock: 25,
    category: "EQUIPMENTS",
    productType: "RESISTANCE_BAND",
    modelUrl: "https://example.com/models/resistance-band.glb",
    createdByUserId: "admin_1",
    createdAt: new Date(),
    updatedAt: new Date(),

    images: [
      {
        id: "img_7",
        imageUrl: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712",
        productId: "prod_5",
        createdAt: new Date(),
      },
    ],
  },

  {
    id: "prod_6",
    title: "Leather Gym Gloves",
    description: "Breathable anti-slip gym gloves with wrist support for lifting sessions.",
    price: 599,
    stock: 42,
    category: "ACCESSORIES",
    productType: "GYM_GLOVES",
    modelUrl: "https://example.com/models/gym-gloves.glb",
    createdByUserId: "admin_3",
    createdAt: new Date(),
    updatedAt: new Date(),

    images: [
      {
        id: "img_8",
        imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
        productId: "prod_6",
        createdAt: new Date(),
      },
    ],
  },

  {
    id: "prod_7",
    title: "Steel Protein Shaker Bottle",
    description: "Leakproof stainless steel shaker bottle with blending whisk.",
    price: 449,
    stock: 50,
    category: "ACCESSORIES",
    productType: "SHAKER",
    modelUrl: "https://example.com/models/shaker.glb",
    createdByUserId: "admin_1",
    createdAt: new Date(),
    updatedAt: new Date(),

    images: [
      {
        id: "img_9",
        imageUrl: "https://images.unsplash.com/photo-1526401485004-2fda9f0d7f8b",
        productId: "prod_7",
        createdAt: new Date(),
      },
    ],
  },

  {
    id: "prod_8",
    title: "Omega Fish Oil Capsules",
    description: "High purity omega-3 fish oil capsules supporting heart and joint health.",
    price: 799,
    stock: 31,
    category: "SUPPLEMENTS",
    productType: "FISH_OIL",
    modelUrl: "https://example.com/models/fish-oil.glb",
    createdByUserId: "admin_2",
    createdAt: new Date(),
    updatedAt: new Date(),

    images: [
      {
        id: "img_10",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
        productId: "prod_8",
        createdAt: new Date(),
      },
    ],
  },
];




export const trainerData: Client[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    age: 24,
    plan: "Weight Loss",
    status: "Active",
  },
  {
    id: "2",
    name: "Priya Verma",
    age: 28,
    plan: "Muscle Gain",
    status: "Active",
  },
  {
    id: "3",
    name: "Amit Kumar",
    age: 31,
    plan: "Strength Training",
    status: "Inactive",
  },
  {
    id: "4",
    name: "Neha Singh",
    age: 26,
    plan: "Fat Loss",
    status: "Active",
  },
  {
    id: "5",
    name: "Rohit Yadav",
    age: 22,
    plan: "Body Recomposition",
    status: "Active",
  },
  {
    id: "6",
    name: "Anjali Gupta",
    age: 29,
    plan: "Weight Loss",
    status: "Active",
  },
  {
    id: "7",
    name: "Karan Malhotra",
    age: 34,
    plan: "Muscle Gain",
    status: "Inactive",
  },
  {
    id: "8",
    name: "Sneha Kapoor",
    age: 27,
    plan: "Fat Loss",
    status: "Active",
  },
  {
    id: "9",
    name: "Vikram Singh",
    age: 30,
    plan: "Strength Training",
    status: "Active",
  },
  {
    id: "10",
    name: "Pooja Sharma",
    age: 25,
    plan: "Weight Loss",
    status: "Inactive",
  },
  {
    id: "11",
    name: "Arjun Verma",
    age: 23,
    plan: "Muscle Gain",
    status: "Active",
  },
  {
    id: "12",
    name: "Riya Jain",
    age: 28,
    plan: "Fat Loss",
    status: "Active",
  },
  {
    id: "13",
    name: "Manish Kumar",
    age: 35,
    plan: "Strength Training",
    status: "Inactive",
  },
  {
    id: "14",
    name: "Kritika Sharma",
    age: 24,
    plan: "Body Recomposition",
    status: "Active",
  },
  {
    id: "15",
    name: "Sahil Mehta",
    age: 32,
    plan: "Muscle Gain",
    status: "Active",
  },
  {
    id: "16",
    name: "Nisha Arora",
    age: 26,
    plan: "Weight Loss",
    status: "Active",
  },
  {
    id: "17",
    name: "Deepak Yadav",
    age: 29,
    plan: "Fat Loss",
    status: "Inactive",
  },
  {
    id: "18",
    name: "Ayesha Khan",
    age: 27,
    plan: "Body Recomposition",
    status: "Active",
  },
  {
    id: "19",
    name: "Harsh Vardhan",
    age: 33,
    plan: "Strength Training",
    status: "Active",
  },
  {
    id: "20",
    name: "Simran Kaur",
    age: 25,
    plan: "Weight Loss",
    status: "Inactive",
  },
];

export const trainerColumns: ColumnDef<Client>[] = [
  {
    accessorKey: "name",
    header: "Client Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "plan",
    header: "Workout Plan",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  
];