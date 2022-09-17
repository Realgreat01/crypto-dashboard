<template>
  <div class="my-52 mx-auto w-1/2">
    <div v-for="(response, index) in formResponse" :key="index">
      {{ response }}
    </div>
    <form action="" method="post" class="max-w-min rounded p-4 text-gray-800">
      <div
        v-for="(input, index) in formInputs"
        :key="index"
        class="my-2 grid w-[400px] space-x-4"
        style="grid-template-columns: 1fr 3fr"
      >
        <label
          :for="input.id"
          required
          class="cursor-pointer font-bold capitalize"
        >
          {{ input.id }}
        </label>
        <input
          :type="input.type"
          :name="input.id"
          :id="input.id"
          :placeholder="input.placeholder"
          v-model.lazy="formResponse[input.id]"
          class="appearance-none rounded border-blue-600 py-1 px-1 placeholder:text-gray-200 "
        />
      </div>
      <input
        type="submit"
        class="w-full self-center rounded bg-blue-500 py-2 px-4 text-white"
      />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const formInputs = ref([
  {
    type: "email",
    id: "email",
    placeholder: "Enter your email",
  },
  {
    type: "text",
    id: "firstname",
    placeholder: "Enter your firstname",
  },
  {
    type: "text",
    id: "lastname",
    placeholder: "Enter your lastname",
  },
  {
    type: "password",
    id: "password",
    placeholder: "Enter preferred password",
  },
  {
    type: "number",
    id: "phone",
    placeholder: "Enter your phone number",
  },
]);
const formResponse = ref({
  email: "",
  firstname: "",
  lastname: "",
  phone: "",
  password: "",
});
</script>
