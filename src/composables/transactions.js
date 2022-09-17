import { reactive, ref } from "vue";
import { currentBalance } from "./chart.js";
console.log(currentBalance);

const amount = ref(null);
const description = ref("");
const state = reactive({
  transactionActivity: [],
});

const transaction = (name, style) => (amount, type) => {
  currentBalance.amount += Number(amount)
  const finalBalance = currentBalance.amount;
  return state.transactionActivity.push({
    name,
    style,
    amount,
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
  return payment(total.toFixed(2), "Sold");
};

buy("BTC", 200);
buy("BTC", 200);
buy("BTC", 200);
buy("BTC", 200);
sell("BNB", 200);
sell("BNB", 200);
sell("BNB", 200);

export { state, currentBalance };
