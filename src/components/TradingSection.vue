<template>
  <div>
    <h1 class="text-lg font-semibold">Transaction Activity</h1>
    <input
      type="number"
      name=""
      id=""
      v-model.number="amount"
      placeholder="Enter Amount"
      class="border-green-1 border-2"
    />

    <select v-model.lazy.trim="description">
      <option disabled value="">Please select one</option>
      <option>BTC</option>
      <option>ETH</option>
      <option>ADX</option>
    </select>

    <button
      @click="buy(description, amount)"
      class="rounded border-2 bg-green-500 py-1 px-3 font-semibold text-white"
    >
      Buy
    </button>
    <button
      @click="sell(description, amount)"
      class="rounded border-2 bg-red-500 py-1 px-3 font-semibold text-white"
    >
      Sell
    </button>
  </div>
</template>

<script setup>
  
</script>

