<template>
  <div class="mr-4 bg-[pink]">
    <h1 class="text-green-600">Transaction Activity</h1>
    <h1>{{ currentBalance.amount }}</h1>
    <div class="transaction-box h-[300px] overflow-y-scroll">
      <div
        class="my-4 flex items-center justify-between border-l-4"
        :style="`border-color: ${transaction.style}`"
        v-for="(transaction, index) in state.transactionActivity"
        :key="index"
      >
        <div class="w-4/5">
          <h2>{{ transaction.type }} {{ transaction.name }}</h2>
          <div class="flex items-center justify-between">
            <span>{{ transaction.amount }} {{ transaction.name }}</span>
            <span>$ {{ transaction.finalBalance }}</span>
          </div>
        </div>
        <p class="material-icons text-2xl">arrow_forward_ios</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { state, currentBalance } from "@/composables/transactions.js"
onMounted(() => {});
</script>
