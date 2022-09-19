<template>
  <div class="pt-4">
    <!-- HEADING FOR MINING STATUS -->
    <h1 class=" px-4 h-[50px] mb-2  font-headline font-normal text-gray-800">Mining Status</h1>

    <!-- FIRST CONTAINER  -->
    <div class="flex justify-around gap-1 md:gap-2 md:pr-10">
      <!-- MAIN MINING BOX -->
      <div class="flex h-[200px] flex-col justify-around space-y-4">
        <div
          class="flex items-center justify-between space-x-3"
          v-for="(mining, index) in miningStatus"
          :key="index"
        >
          <p
            class="material-icons-outlined w-min rounded p-2 text-white"
            :style="`background-color: ${mining.color}`"
          >
            {{ mining.symbol }}
          </p>

          <div class="font-semibold">
            <p class="text-sm">{{ mining.name }}</p>
            <p class="text-xs text-green-500" v-if="mining.running">
              Running...
            </p>
            <p class=" text-xs text-red-500" v-else>Stopped!</p>
          </div>
          <div>
            <label class="my-toggle" :for="mining.class">
              <input
                class="toggle-input"
                type="checkbox"
                :id="mining.class"
                v-model="mining.running"
              />
              <div class="toggle-fill"></div>
            </label>
          </div>
        </div>
      </div>

      <!-- USER STATUS -->
      <div class="flex h-[200px] flex-col justify-around space-y-4">
        <div
          class="flex justify-start space-x-3"
          v-for="(user, index) in userStatus"
          :key="index"
        >
          <i
            class="material-icons-outlined w-min rounded p-2 text-white"
            :style="`background-color: ${user.color}`"
            >{{ user.symbol }}</i
          >

          <div>
            <p class="font-semibold text-sm">{{ user.name }}</p>
            <p class="text-xs font-currency">
              <span v-if="user.isCurrency">${{ user.value }}</span>
              <span v-else>{{ user.value }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(true);
const miningStatus = ref([
  {
    name: "GPUs Mining",
    class: "GPU",
    symbol: "memory",
    color: "orange",
    running: true,
  },
  {
    name: "CPUs Mining",
    class: "CPU",
    symbol: "memory",
    color: "#f5725b",
    running: true,
  },
]);
const userStatus = ref([
  {
    name: "Est. daily USD",
    value: 23.59,
    symbol: "today",
    color: "blue",
    isCurrency: true,
  },
  {
    name: "Team Members",
    value: 12,
    symbol: "people",
    color: "#29c76b",
    isCurrency: false,
  },
]);

function toggleMining(status) {
  status.running = !status.running;
}
</script>
