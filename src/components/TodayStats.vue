<template>
  <h2 class="font-sans text-lg">Todays Stats</h2>

  <div
    class="my-3 mr-1 grid h-20 rounded-lg border p-4 shadow ring-0 ring-slate-100"
    style="grid-template-columns: 4fr 1fr"
    v-for="(stat, index) in stats"
    :key="index"
  >
    <div class="">
      <h1 class="font-sm uppercase">{{ stat.name }}</h1>
      <p class="font-bold">$ {{ stat.amount }}</p>
    </div>

    <!-- STATS COLUMN -->
    <div class="flex- flex-col">
      <!-- GRAPH -->
      <div class="h-4 w-full">
        <IncreaseGraph v-if="stat.difference > 0" />
        <DecreaseGraph v-else />
      </div>

      <div
        class="grid w-full grid-cols-2 items-center justify-between space-x-4 text-sm font-semibold"
      >
        <!-- DIFFERENCE IN AMOUNT -->
        <p :class="stat.difference > 0 ? 'text-green-400' : 'text-red-400'">
          <span v-show="stat.difference > 0">+</span>
          <span
            >{{
              stat.difference.toLocaleString(undefined, {
                minimumIntegerDigits: 2,
              })
            }}%</span
          >
        </p>
        <!-- ARROWS -->
        <div>
          <p
            class="material-icons font-bold text-green-400"
            style="font-size: 20px"
            v-if="stat.difference > 0"
          >
            arrow_upward
          </p>
          <p
            class="material-icons font-bold text-red-400"
            style="font-size: 20px"
            v-else
          >
            arrow_downward
          </p>
        </div>
      </div>
    </div>
  </div>

  <div>
    <h2>Currencies Status</h2>
    <div class="grid h-48 grid-cols-2 gap-1">
      <div
        class="grid h-4/5 rounded p-2"
        style="grid-template-rows: 1fr 1fr 4fr 1fr"
        :class="index % 2 === 0 ? 'bg-blue-700' : 'bg-red-400'"
        v-for="({ name, amount, price }, index) in currencies"
        :key="index"
      >
        <p class="text-white">{{ name.toUpperCase() }}</p>
        <p
          class="h-4 self-start font-semibold"
          :class="index % 2 === 0 ? 'text-red-300' : 'text-blue-700'"
        >
          ${{ getEquilvalentInUSD(amount, price) }} USD
        </p>
        <img src="" alt="" />
        <p class="font-bold text-white">
          {{ amount }} {{ name.toUpperCase() }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DecreaseGraph from "@/assets/svgs/DecreaseGraph.vue";
import IncreaseGraph from "@/assets/svgs/IncreaseGraph.vue";
const stats = ref([
  {
    name: "Today Revenue",
    amount: 12418.42,
    difference: 10,
  },
  {
    name: "Today Ipst",
    amount: 17619.34,
    difference: 19,
  },
  {
    name: "Today Blts",
    amount: 8927.42,
    difference: -10,
  },
  {
    name: "Crumbling Rev",
    amount: 219.42,
    difference: 8,
  },
]);
const currencies = ref([
  {
    name: "Adx",
    amount: 300.321,
    price: 300,
  },
  {
    name: "BTC",
    amount: 1.4462,
    price: 10000,
  },
]);

function getEquilvalentInUSD(price, amount) {
  return price * amount;
}
</script>
<style></style>
