<template>
  <div
    class="flex w-full grid-cols-2 justify-between px-4 pt-[70px] pb-[70px] md:pb-0"
  >
    <!-- rotating container -->
    <section class="flex h-[200px] flex-col justify-between">
      <div
        v-for="(coin, index) in walletBalance"
        :key="index"
        class="flex space-x-4"
      >
        <p
          class="circle "
          :data-progress="coin.icon"
          :style="`--progress: ${percentage(coin.balance) * 3}deg; --color: ${
            coin.color
          }`"
        ></p>
        <div class="">
          <h1 class="text-[10px] font-bold font-currency capitalize text-gray-300">
            {{ coin.name }}
          </h1>
          <h1 class="text-sm font-bold font-currency  text-gray-900">
            {{ coin.balance }}
          </h1>
        </div>
      </div>

      <h1>Goals <span class="block font-bold h-4/6">Week 2</span></h1>
    </section>

    <!--  -->
    <section class="flex space-x-4">
      <div
        v-for="(coin, index) in walletBalance"
        :key="index"
        id="progressbar"
        class="h-[50%] w-[7px] rotate-180 overflow-hidden rounded-xl bg-slate-100"
      >
        <div
          class="w-[100%] rounded-2xl"
          :style="`height: ${percentage(coin.balance)}%; background: ${
            coin.color
          }`"
        ></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
const walletBalance = reactive([
  {
    name: "BTC",
    balance: 3245.89,
    color: "#00005A",
    icon: "north_east",
  },
  {
    name: "ETH",
    balance: 3448.89,
    color: "#E94165",
    icon: "south_west",
  },
]);
const totalBalance = ref(
  walletBalance
    .map((item) => item.balance)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0)
);

const percentage = (coinBalance) => {
  return ((coinBalance / totalBalance.value) * 100).toFixed(2);
};
onMounted(() => {});
</script>

<style></style>