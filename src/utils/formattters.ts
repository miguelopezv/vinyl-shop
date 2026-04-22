export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

export const getImagePath = (imagePath: string) => {
  const cloudinaryBaseUrl = "https://res.cloudinary.com";
  return imagePath.startsWith(cloudinaryBaseUrl)
    ? imagePath
    : `/products/${imagePath}.jpg`;
};
