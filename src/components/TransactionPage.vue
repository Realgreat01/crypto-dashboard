<template>
  <div
    class="translate-[-50%] absolute top-[5%] md:top-[15%] left-[-50%] right-[-50%] mx-auto h-96 md:w-[50%] w-[90%] rounded-lg bg-indigo-600 py-4 px-6 flex justify-center flex-col"
    style="zindex: 999"
  >
    <!-- TOP CONTAINER FOR TRANSACTIONS OPTIONS  -->
    <h2 class="my-2 block text-center text-white">What do you want to do !</h2>
    <div class="mx-auto flex h-10 w-fit">
      <!-- TRANSACTIONS CONTAINER -->
      <div
        v-for="(transaction, index) in transactionType"
        :key="index"
        class=""
      >
        <label
          :for="transaction"
          class="mx-2 block w-12 cursor-pointer rounded border bg-white py-1 text-center text-xs capitalize text-purple-700 md:w-20 md:py-2 md:font-normal"
        >
          {{ transaction }}
        </label>
        <input
          class="hidden"
          type="radio"
          name="transaction"
          :id="transaction"
          :value="transaction"
          v-model="selectedTransaction"
        />
      </div>
    </div>

    <form v-if="selectedTransaction" @submit.prevent="" class="">
      <h2>You are {{ selectedTransaction }}ing</h2>

      <!-- CURRENCY SELECTED BY USER  -->
      <div class="flex flex-col mt-2">
        <label for="currency" class="text-white font-mono font-bold ">
          <span v-if="selectedTransaction === 'transfer'">From</span>
          Currency</label
          >
          <select
          name="currency"
          id="currency"
          v-model="currency"
          class="block max-w-full rounded md:max-w-[70%] h-8 text-xs text-purple-60"
        >
          <option
            v-for="(crypto, index) in availableCrypto"
            :value="crypto"
            :key="index"
            :selected="index === 2"
          >
            {{ crypto }}
          </option>
        </select>
      </div>

      <!-- AMOUNT USED BY USER IN BUYING OR SELLING OR TRANSFER -->
      <div class="flex flex-col mt-2">
      <label for="amount" class="text-white font-mono font-bold ">Amount in USD</label>
        <input
          type="number"
          v-model.number="amount"
          class="block max-w-full rounded md:max-w-[70%] h-8 text-xs text-purple-60"
        />
      </div>

      <!-- CURRENCY TO RECEIEVE IN EXCHANGE -->
      <div v-if="selectedTransaction === 'transfer'" class="flex flex-col mt-2">
        <label for="receieve" class="text-white font-mono font-bold ">To Currency</label>
        <select
          name="receieve"
          id="receieve"
          v-model="receieve"
          class="block max-w-full rounded md:max-w-[70%] h-8 text-xs text-purple-60"
        >
          <option
            class="disabled:hidden"
            v-for="(crypto, index) in availableCrypto"
            :value="crypto"
            :key="index"
            :selected="index === 0"
            :disabled="crypto === currency"
          >
            {{ crypto }}
          </option>
        </select>
      </div>

      <button class="rounded font-bold capitalize text-white block mt-4">
        <span
          v-if="selectedTransaction === 'buy'"
          @click="buy(currency, amount)"
          class="block w-32 rounded bg-green-600 py-2 text-center hover:bg-blue-700"
        >
          {{ selectedTransaction }}</span
        >
        <span
          v-if="selectedTransaction === 'sell'"
          @click="sell(currency, amount)"
          class="block w-32 rounded bg-red-600 py-2 text-center hover:bg-pink-700"
        >
          {{ selectedTransaction }}</span
        >
        <span
          v-if="selectedTransaction === 'transfer'"
          class="block w-32 rounded bg-purple-600 py-2 text-center hover:bg-lime-700"
          @click="transfer(currency, amount, receieve)"
        >
          {{ selectedTransaction }}</span
        >
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { buy, sell, transfer } from "@/composables/transactions.js";
const selectedTransaction = ref("");
const transactionType = ref(["buy", "sell", "transfer"]);
const availableCrypto = ref(["BTC", "USDT", "ADX", "ETH", "MANA", "BNB"]);
const amount = ref(1);
const currency = ref("");
const receieve = ref("");
</script>

<style></style>
