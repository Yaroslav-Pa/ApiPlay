<script>
import axios from "axios";

export default {
  data() {
    return {
      nasaImage: null,
      nasaKey: "W5K2KzrE3SPRKzfo2RsAYrgakHehl9fBVoQikpD8",
    };
  },
  mounted() {
    this.getNasaApi();
  },
  methods: {
    getNasaApi() {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=" + this.nasaKey)
        .then((res) => {
          this.nasaImage = res.data;
        });
    },
  },
};
</script>
<template>
  <div
    v-if="nasaImage"
    class="flex flex-col justify-center items-center gap-y-[20px] mb-[50px]"
  >
    <h1 class="text-center text-[20px] font-bold text-white">
      Astronomy Picture of the Day
    </h1>
    <div class="flex flex-col justify-center items-center gap-y-[20px]">
      <a :href="nasaImage.hdurl"
        ><img :src="nasaImage.url" alt="img" class="rounded-[80px]"
      /></a>
      <h1 class="text-center text-[20px] font-bold text-white">
        {{ nasaImage.title }}
      </h1>
      <p class="text-center max-w-[800px] text-[16px] font-normal text-white">
        Explanation: {{ nasaImage.explanation }}
      </p>
      <div class="flex flex-row gap-x-[50px]">
        <h1 class="text-center text-[20px] font-bold text-white">
          Date: {{ nasaImage.date }}
        </h1>
        <h1 class="text-center text-[20px] font-bold text-white">
          Copyright: {{ nasaImage.copyright }}
        </h1>
      </div>
    </div>
  </div>
</template>
