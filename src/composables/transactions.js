import { reactive, ref } from "vue";
import { currentBalance } from "./chart.js";
console.log(currentBalance);

const amount = ref(null);
const description = ref("");
let finalBalance = 0;
const state = reactive({
  transactionActivity: [],
});

const transaction = (name, style) => (amount, type) => {
  currentBalance.amount += Number(amount)
  finalBalance = currentBalance.amount;
  return state.transactionActivity.push({
    name,
    style,
    amount,
    change: amount,
    type,
    finalBalance,
  });
};

const buy = (name, amount) => {
  const payment = transaction(name, "#026838");
  const total = Number(amount);
  return payment(total.toFixed(2), "Buy");
};
const sell = (name, amount) => {
  const payment = transaction(name, "red");
  const total = Number(amount * -1);
  return payment(amount.toFixed(2), "Sold");
};

const transfer = (initialCurrency, amount, finalCurrency) => {
  const name = `${initialCurrency} to ${finalCurrency}`;
    return state.transactionActivity.push({
      name,
      style : "purple",
      amount: amount.toFixed(2),
      change: 0,
      type: "Transferred",
    });
  };


buy("BTC", 200);
// buy("BTC", 2000);
// buy("Ethereum", 200);
// buy("BTC", 200);
// sell("BNB", 200);
sell("BNB", 200);
buy("Ethereum", 400);

transfer("ADX" , 200, "BTC")
transfer("ADX" , 200, "BTC")
sell("BNB", 200);

export { state, currentBalance , buy, sell , transfer };
