<template>
  <div class="w-full px-4">
    <h1 class="mb-2 h-[50px] font-headline font-normal text-gray-800">
      Statistics
    </h1>

    <!-- BUTTONS  -->
    <button
      v-for="(time, index) in timeStamp"
      :key="index"
      class="mr-4 rounded-2xl border py-1 px-4 text-[10px] capitalize hover:bg-indigo-500 hover:text-white active:text-green-600"
    >
      {{ time.toUpperCase() }}
    </button>

    <!-- CHART AREA -->
    <h2 class="mt-2 font-currency text-xs text-gray-800">Working Balance</h2>
    <h2
      class="mb-2 font-currency font-black tracking-wider text-gray-800"
    >
      ${{currentBalance.amount.toFixed(2)}}
    </h2>
    <div class="h-40 relative my-4 w-full">
      <canvas id="user-chart"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, onBeforeMount } from "vue";
import Chart from "chart.js/auto";
import { config, currentBalance } from "@/composables/chart.js";
const timeStamp = ref(["Day", "Week", "Month"]);

onMounted(() => {
  const ctx = document.getElementById("user-chart");
  const myChart = new Chart(ctx, config);
});
</script>