export const company = {
  foundedYear: 1984,
  areasOfBusiness: "Manufacturing & Development",
  mainProducts: ["Batteries", "Sprockets", "Battery Plates"],
  tagline: "Engineering Enterprise & General Order Suppliers",
  customers: [
  { name: "Ravi Automobile (Pvt) Ltd.", shortName: "Ravi Automobile" },
  { name: "Eifel Industries (Pvt) Ltd.", alias: "Road Prince" },
  { name: "Jamal Engineering" },
  { name: "Alpha Plastic and Rubber Works (SMC) Ltd." },
  { name: "Raazy Motor Industries", alias: "Hi-Speed Parts" },
  { name: "Mega Engineering" },
  { name: "ZXMCO Pakistan (Pvt) Ltd." },
  { name: "Sakai Trading" },
  ],
  contact: {
    email: "crown.solo@gmail.com",
    salesEmail: "crown.solo@gmail.com",
  },
} as const;

export function yearsInBusiness(): number {
  return new Date().getFullYear() - company.foundedYear;
}
