const formatMoney = (amount = 0) => {
  const options = {
    style: 'currency',
    currency: 'BDT',
  };
  const formatter = Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
};

export default formatMoney;
