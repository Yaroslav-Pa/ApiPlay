<script>
import axios from "axios";

export default {
  data() {
    return {
      activity: null,
    };
  },
  mounted() {
    this.getBoredAPI();
  },
  methods: {
    reloadPage() {
      location.reload();
    },
    getBoredAPI() {
      axios.get("https://www.boredapi.com/api/activity/").then((response) => {
        this.activity = response.data;
      });
    },
  },
};
</script>

<template>
  <div
    v-if="activity"
    class="flex flex-col px-[50px] py-[50px] rounded-[50px] bg-secondColor justify-center items-center gap-y-[20px]"
  >
    <div class="flex flex-col justify-center items-center gap-y-[20px]">
      <p class="text-[18px] font-light">
        I can suggest you do something like this:
      </p>
      <p class="text-[24px] font-bold">{{ activity.activity }}</p>
    </div>

    <div class="flex flex-col justify-center items-center gap-y-[10px]">
      <p class="text-[20px]">Activity type: {{ activity.type }}</p>
      <div class="flex flex-col justify-center items-center">
        <label v-if="activity.price >= 0.1" for="price" class="text-[14px]"
          >Price scale:</label
        >
        <progress
          v-if="activity.price >= 0.1"
          id="price"
          :value="activity.price"
          max="1"
          class="border-2 rounded-[50px] h-[20px]"
        ></progress>
        <label
          v-if="activity.accessibility >= 0.1"
          for="accessibility"
          class="text-[14px]"
          >Accessibility scale:</label
        >
        <progress
          v-if="activity.accessibility >= 0.1"
          id="accessibility"
          :value="activity.accessibility"
          max="1"
          class="border-2 rounded-[50px] h-[20px]"
        ></progress>
      </div>
    </div>
    <a v-if="activity.link" :href="activity.link"
      ><p class="text-[22px]">Link for more info</p></a
    >
  </div>
  <button
    @click="getBoredAPI()"
    class="flex flex-col py-[10px] px-[20px] font-bold bg-firstColor hover:bg-transparent hover:border-firstColor border-2 hover:text-white transition-all duration-150 mt-[30px] rounded-[50px]"
  >
    Another one?
  </button>
</template>

<style>
#accessibility::-webkit-progress-bar,
#price::-webkit-progress-bar {
  background-color: #eeeeee00; /* колір заднього фону */
  border-radius: 50px;
}

#accessibility::-webkit-progress-value,
#price::-webkit-progress-value {
  background-color: #2f5d62; /* колір лінії прогресу */
  border-radius: 50px;
}
</style>
