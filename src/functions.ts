export const formatMoney = (price: number | undefined) => {
  if (!price) return "0,00 ₺";
  const money = price.toFixed(2).replace(".", ",");
  return money.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₺";
};
