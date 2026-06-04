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
