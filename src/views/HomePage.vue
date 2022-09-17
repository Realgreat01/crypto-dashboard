<template>
  <NavBar />
  <div
  class="main-section ml-[10%] grid md:ml-0"
  >
  <!-- style="grid-template-columns: 1fr 4fr" -->
    <div>
      <TodayStats />
    </div>
    <div class="flex flex-col">
      <div class="mining-section mb-4 grid">
        <MiningStats />
        <MyBalances />
      </div>
      <div class="activity-section grid h-[40vh]">
        <!-- style="grid-template-columns: 1fr 2fr 1fr" -->
        <TransactionActivity />
        <AccountStatistics />
        <UserGoals />
      </div>
    </div>
  </div>
  <SideBar />
</template>

<script setup>
import { onMounted } from "vue";
import TodayStats from "@/components/TodayStats.vue";
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import MiningStats from "@/components/MiningStats.vue";
import MyBalances from "@/components/MyBalances.vue";
import AccountStatistics from "@/components/AccountStatistics.vue";
import TransactionActivity from "@/components/TransactionActivity.vue";
import UserGoals from "@/components/UserGoals.vue";

onMounted(() => {
  const title = document.querySelector("title");
  title.innerHTML = "Crypto Dashboard";
});
</script>