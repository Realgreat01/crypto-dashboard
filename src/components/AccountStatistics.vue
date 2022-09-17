<template>
  <div class=" w-full">
    <h1>Statistics</h1>
    <button
      v-for="(time, index) in timeStamp"
      :key="index"
      class="mr-4 rounded-2xl border py-1 px-4 text-xs capitalize hover:bg-indigo-500 hover:text-white active:text-green-600"
    >
      {{ time.toUpperCase() }}
    </button>

    <h2>Working Balance</h2>
    <h2>${{ currentBalance.amount }}</h2>
    <div class="w-4/5 relative mix-h-40 my-4">
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