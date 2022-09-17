const wallet = [
  {
    name: "BTC",
    balance: 3045.89,
  },
  {
    name: "ETH",
    balance: 3748.89,
  },
];

const totalBalance = wallet
  .map((item) => item.balance)
  .reduce((acc, curr) => {
    return acc + curr;
  }, 0);

const value = (item) => {
  return (item/totalBalance) * 100
}

const result = value(wallet[1].balance)
  console.log(result);
console.log(totalBalance.toFixed(2));
