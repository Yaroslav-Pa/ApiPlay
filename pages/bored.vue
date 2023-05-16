<script>
import axios from "axios";

export default {
  data() {
    return {
      activity: null,
    };
  },
  mounted() {
    axios.get("https://www.boredapi.com/api/activity/").then((response) => {
      this.activity = response.data;
    });
  },
};
</script>

<template>
  <div
    v-if="activity"
    class="flex flex-col px-[50px] py-[30px] rounded-[50px] bg-gray-500 justify-center items-center gap-y-[10px]"
  >
    <p class="text-[16px]">I can suggest you do something like this:</p>
    <div class="flex flex-col justify-center items-center gap-y-[5px]">
      <p class="text-[22px] font-bold">{{ activity.activity }}</p>
      <p class="text-[22px]">Type: {{ activity.type }}</p>
      <label for="price" class="text-[14px]">Price scale:</label>
      <progress id="price" :value="activity.price" max="1"></progress>
      <label
        v-if="activity.accessibility"
        for="accessibility"
        class="text-[14px]"
        >Accessibility scale:</label
      >
      <progress
        v-if="activity.accessibility"
        id="accessibility"
        :value="activity.accessibility"
        max="1"
      ></progress>
      <a v-if="activity.link" :href="activity.link"
        ><p class="text-[22px]">Link for more info</p></a
      >
    </div>
  </div>
  <p>{{ activity }}</p>
</template>
