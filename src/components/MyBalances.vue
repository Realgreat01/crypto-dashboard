<template>
  <div class="">
    <div class="mr-10 flex h-[50px] justify-between px-4">
      <h1>My Balances</h1>
      <div class="flex rounded">
        <img
          class="m-2 w-min rounded-lg border bg-white p-1 ring-0 ring-slate-100"
          src="../assets/donut_chart.svg"
          alt=""
        />
        <img
          class="m-2 w-min rounded-lg border bg-white p-1 ring-0 ring-slate-100"
          src="../assets/add.svg"
          alt=""
        />
      </div>
    </div>

    <div class="grid h-[200px] grid-cols-2 px-4">
      <div
        class="mr-10 flex h-full flex-col justify-around rounded px-4"
        :style="`background-color:${balance.color}`"
        v-for="(balance, index) in balances"
        :key="index"
      >
        <div class="flex">
          <span class="material-icons bg-2">{{ balance.symbol }}</span>
          <span class="capitalize">{{ balance.currency }}</span>
        </div>

        <p class="border-b-2 border-dashed border-gray-300 text-2xl">
          {{ balance.amount }}
        </p>
        <div class="flex justify-between">
          <p class="material-icons">credit_card</p>
          <p class="material-icons">add_circle_outline</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const balances = ref([
  {
    currency: "dollar",
    symbol: "attach_money",
    amount: 4008.28,
    color: "#4632ff8e",
  },
  {
    currency: "euro",
    symbol: "euro",
    amount: 4008.28,
    color: "#ffbe5de5",
  },
]);
</script>
