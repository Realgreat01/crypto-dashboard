<template>
  <nav
    class="items-between ml-0 md:ml-[10%] mt-0 grid h-24 w-[90%] grid-cols-2 justify-end bg-opacity-50"
  >
    <h1 class="font-bold text-black">Dashboard</h1>
    <div class="flex items-center space-x-4 justify-self-end">
      <img
        class="mr-4 h-4 w-6"
        :src="`https://countryflagsapi.com/svg/${user.country}`"
        alt="country"
      />
      <i class="material-icons mr-4 text-gray-300">notifications</i>
      <img class="h-8 rounded-lg" :src="user.picture" alt="picture" />
      <p class="text-gray-400">{{ user.name }}</p>
      <p class="material-icons mr-4 text-gray-300">logout</p>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

// import axios from "axios"
const user = reactive({
  name: "samson Realgreat",
  country: "Nigeria",
  picture: "",
});

async function fetchRandomUser() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const results = data.results[0];
  const { name, location, picture, email, login } = results;
  user.name = `${name.first} ${name.last}`;
  user.country = location.country;
  user.picture = picture.thumbnail;

  createUserWithEmailAndPassword(auth, email, login.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  console.log(results);
  return results;
}
onMounted(() => {
  fetchRandomUser();
});
</script>
