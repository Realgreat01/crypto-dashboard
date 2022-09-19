<template>
  <div class="pt-4 px-4">
    <div class="mr-10 flex h-[50px] justify-between ">
      <h1 class="mb-2 h-[50px] font-headline font-normal text-gray-800 ">
        My Balances
      </h1>
      <!-- two icons near my balances -->
      <div class="flex rounded">
        <img
          class="m-3 w-min rounded-lg border bg-white p-1 ring-0 ring-slate-100"
          src="../assets/donut_chart.svg"
          alt=""
        />
        <img
          class="m-3 w-min rounded-lg border bg-white p-1 ring-0 ring-slate-100"
          src="../assets/add.svg"
          alt=""
        />
      </div>
    </div>


    <!-- cards containers -->
<div class="grid h-[200px] grid-cols-2">
      <div
        class="md:mr-10 mr-1 flex h-full flex-col justify-around rounded px-4"
        :style="`background-color:${balance.color}`"
        v-for="(balance, index) in balances"
        :key="index"
      >
        <div class="flex space-x-2">
          <span class="material-icons block">{{ balance.symbol }}</span>
          <span class="font-currency capitalize block">{{
            balance.currency
          }}</span>
        </div>

        <p
          class="border-b-2 border-dashed border-gray-700 font-currency text-2xl"
        >
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