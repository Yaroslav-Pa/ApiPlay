<script setup>
const menuItems = [
  {
    title: "Main",
    to: "/",
  },
  {
    title: "Bored?",
    to: "/bored",
  },
];
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      activity: null,
    };
  },
  mounted() {
    // axios.get("https://www.boredapi.com/api/activity/").then((response) => {
    //   this.activity = response;
    // });
  },
};
</script>

<template>
  <div
    class="flex flex-row h-[100px] gap-x-[20px] bg-cyan-600 mb-[75px] justify-center items-center"
  >
    <router-link
      :to="to"
      v-for="{ title, to } in menuItems"
      class="max-h-[50px] font-bold px-[20px] py-[5px] rounded-[50px] bg-indigo-600 text-white hover:bg-indigo-800"
      >{{ title }}</router-link
    >
  </div>
  <div class="flex flex-col justify-center items-center">
    <div class="flex flex-col mx-[40px] justify-center items-center text-white">
      <NuxtPage />
    </div>
  </div>
</template>
