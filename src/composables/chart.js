import { reactive } from "vue";

const state = reactive({
  Jan: 200,
  Feb: 352,
  Mar: 10,
  Apr: 300,
  May: 32,
  Jun: 330,
  Jul: 40.3,
  Aug: 689,
  Sep: 345,
  Oct: 40,
  Nov: 300,
  Dec: 40,
});
const VALUES = Object.values(state);
const LABELS = Object.keys(state);

const number = [];
for (let i = 0; i < 12; i++) {
  const num = Math.random() * 300;
  number.push(num);
}
console.log(number);
const FIRST_COLORS = [];
const SECOND_COLORS = [];

function getHexColor(count, arr) {
  for (let i = 0; i < count; i++) {
    const HEX_NUMBER = Math.random();
    const HEX_VALUE = HEX_NUMBER.toString(16).substring(4, 8);
    const HEX_CODE = "#" + HEX_VALUE;
    arr.push(HEX_CODE);
  }
}

const data = {
  labels: LABELS,
  datasets: [
    {
      type: "line",
      data: VALUES,
      label: "Account Statistics",
      backgroundColor: FIRST_COLORS,
      borderColor: "green",
    },
    {
      type: "line",
      data: number,
      label: "Growth Index",
      backgroundColor: SECOND_COLORS,
      borderColor: "crimson",
      fill: true,
      order: 0,
    },
  ],
};
// options.scales[scaleId].grid;
const config = {
  data: data,
  options: {
    tension: 0.4,
    borderWidth: 1,
  
    hitRadius: 50,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: function (value, index, ticks) {
            if (value >= 100) {
              return "$ " + value + "k";
            } else {
              return "$ " + value;
            }
          },
        },
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 2,
      },
    },
  },
  plugins: [],
};

const totalBalance = VALUES.reduce((acc, curr) => {
  return acc + curr;
}, 0);

const currentBalance = reactive({
  amount: totalBalance,
});

console.log(currentBalance.amount);
getHexColor(VALUES.length, FIRST_COLORS);
getHexColor(VALUES.length, SECOND_COLORS);
export { config, currentBalance };
