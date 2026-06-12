export const fieldConfig = {
  membershipName: {
    label: "Membership Name",
    placeholder: "Enter membership name",
    type: "text",
  },
  membershipPrice: {
    label: "Membership Price",
    placeholder: "Enter membership price",
    type: "number",
  },
  membershipDuration: {
    label: "Duration (days)",
    placeholder: "Enter membership duration",
    type: "number",
  },
  description: {
    label: "Description",
    placeholder: "Enter membership description",
    type: "text",
  },
  isActive: {
    label: "Is Active",
    type: "select",
  },
};

export const PRODUCT_TYPE_VALUES = [
  "WHEY_PROTEIN",
  "MASS_GAINER",
  "CREATINE",
  "PREWORKOUT",
  "MULTIVITAMIN",
  "BCAA",
  "FISH_OIL",
  "SHAKER",
  "GYM_GLOVES",
  "RESISTANCE_BAND",
  "DUMBBELL",
] as const;
export const CATEGORY_VALUES = ["SUPPLEMENTS", "EQUIPMENTS", "ACCESSORIES"] as const;

export const equipmentOptions = [
  "Bodyweight",
  "Dumbbell",
  "Barbell",
  "Machine",
  "Cable",
  "Kettlebell",
  "Resistance Band",
  "Bench",
] as const;

export const exerciseCategories = [
  "strength",
  "cardio",
  "flexibility",
  "mobility",
  "balance",
] as const;

export const muscleGroups = [
  "chest",
  "back",
  "shoulders",
  "biceps",
  "triceps",
  "legs",
  "glutes",
  "core",
  "full_body",
] as const;

export const difficultyLevels = [
  "beginner",
  "intermediate",
  "advanced",
] as const;