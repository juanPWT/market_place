export const formatCurrency = (number) => {
  const convert = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);

  return convert;
};
