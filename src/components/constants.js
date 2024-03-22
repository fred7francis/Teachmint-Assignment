const STAGES = {
  0: "Order Placed",
  1: "Order in Making",
  2: "Order Ready",
  3: "Order Picked",
  4: "Cancelled",
};

const TYPES = [
  { key: "veg", displayName: "Veg" },
  { key: "non-veg", displayName: "Non-Veg" },
];

const SIZES = [
  { key: "small", displayName: "Small" },
  { key: "medium", displayName: "Medium" },
  { key: "large", displayName: "Large" },
];

const BASES = [
  { key: "thin", displayName: "Thin" },
  { key: "thick", displayName: "Thick" },
];

const MAX_ORDERS = 10;

const MAKING_TIME = {
  small: 3 * 60 * 1000,
  medium: 4 * 60 * 1000,
  large: 5 * 60 * 1000,
};

const DANGER_TIME = 3 * 60 * 1000;

// For Testing Purposes

// const MAKING_TIME = {
//   small: 3 * 10 * 1000,
//   medium: 4 * 10 * 1000,
//   large: 5 * 10 * 1000,
// };

// const DANGER_TIME = 1 * 10 * 1000;

export { STAGES, TYPES, SIZES, BASES, MAKING_TIME, DANGER_TIME, MAX_ORDERS };
