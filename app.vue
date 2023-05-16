<script setup>
const menuItems = [
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
    class="flex flex-row h-[100px] gap-x-[20px] bg-menuColor mb-[75px] justify-center items-center"
  >
    <router-link
      :to="to"
      v-for="{ title, to } in menuItems"
      class="max-h-[50px] font-bold py-[10px] px-[20px] rounded-[50px] bg-firstColor hover:bg-transparent hover:border-firstColor border-2 hover:text-white transition-all duration-150"
      >{{ title }}</router-link
    >
  </div>
  <div class="flex flex-col justify-center items-center">
    <div class="flex flex-col mx-[40px] justify-center items-center">
      <NuxtPage />
    </div>
  </div>
</template>
