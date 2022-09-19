<template>
  <div class="px-4">
    <h1 class="mb-2 h-[50px] font-headline font-normal text-gray-800">
      Transaction Activity
    </h1>
    <h1 class="font-currency font-bold">
      <span class="font-normal">Current Balance </span> : $
      {{ currentBalance.amount }}
    </h1>
    <div class="transaction-box h-[300px] overflow-y-scroll">
      <div
        class="my-4 flex items-center justify-between rounded-l border-l-8"
        :style="`border-color: ${transaction.style}`"
        v-for="(transaction, index) in state.transactionActivity"
        :key="index"
      >
        <div class="w-[90%] pl-3">
          <h2 class="font-headline text-sm font-semibold">
            {{ transaction.type }} {{ transaction.name }}
          </h2>
          <div class="flex items-center justify-between font-currency text-xs">
            <span class="block"
              >{{ transaction.amount }} {{ transaction.name }}</span
            >
            <span class="block"
              >$ {{ transaction.finalBalance}}</span
            >
          </div>
        </div>
        <p class="material-icons text-gray-400" style="font-size: 30px">
          arrow_forward_ios
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, watch } from "vue";
import { state, currentBalance } from "@/composables/transactions.js";

</script>