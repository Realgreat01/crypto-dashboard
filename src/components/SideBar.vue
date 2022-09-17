<template>
  <div class="sidebar">
    <svg
      class="block justify-self-start md:mb-32 md:h-3 md:w-6"
      viewBox="0 0 42 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5359 2C19.0755 -0.666668 22.9245 -0.666667 24.4641 2L40.9186 30.5C42.4582 33.1667 40.5337 36.5 37.4545 36.5H4.54551C1.46631 36.5 -0.458189 33.1667 1.08141 30.5L17.5359 2Z"
        fill="#783EFD"
      />
      <circle cx="21" cy="23" r="6" fill="#F78EA7" />
    </svg>

    <div class="w-full space-x-6 md:flex md:space-y-6 md:space-x-0">
      <img
        class="block h-3 w-6"
        :class="imageClass"
        :src="getImgUrl(icon)"
        :alt="icon"
        v-for="(icon, index) in icons"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const icons = ref([
  "dashboard",
  "category",
  "briefcase",
  "group",
  "fire",
  "rocket",
  "settings",
]);
function getImgUrl(icon) {
  return new URL(`../assets/${icon}.png`, import.meta.url).href;
}
</script>
