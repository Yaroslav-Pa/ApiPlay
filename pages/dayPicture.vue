<script>
import axios from "axios";

export default {
  data() {
    return {
      nasaImage: {
        url: null,
        hdurl: null,
        title: null,
        explanation: null,
        date: null,
        copyright: null,
      },
      nasaKey: "W5K2KzrE3SPRKzfo2RsAYrgakHehl9fBVoQikpD8",
    };
  },
  mounted() {
    localStorage.storedImageSrc != (null || undefined)
      ? ((this.nasaImage.url = localStorage.storedImageSrc),
        (this.nasaImage.hdurl = localStorage.storedImageHdurl),
        (this.nasaImage.title = localStorage.storedImageTitle),
        (this.nasaImage.explanation = localStorage.storedImageExplanation),
        (this.nasaImage.date = localStorage.storedImageDate),
        (this.nasaImage.copyright = localStorage.storedImageCopyright))
      : this.getNasaApi();
    this.getDate();
  },
  methods: {
    getNasaApi() {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=" + this.nasaKey)
        .then((res) => {
          this.nasaImage = res.data;
          console.log("geted from api");
          localStorage.setItem("storedImageSrc", res.data.url);
          localStorage.setItem("storedImageHdurl", res.data.hdurl);
          localStorage.setItem("storedImageTitle", res.data.title);
          localStorage.setItem("storedImageExplanation", res.data.explanation);
          localStorage.setItem("storedImageDate", res.data.date);
          localStorage.setItem("storedImageCopyright", res.data.copyright);
        });
    },
    getDate() {
      if (localStorage.savedDate) {
        let hourseDifference =
          Math.abs(localStorage.savedDate - Date.now()) / 36e5;
        if (hourseDifference >= 1) {
          this.getNasaApi();
          localStorage.savedDate = Date.now();
          console.log("data updated via hour no updating");
        }
      } else {
        let dateToSave = Date.now();
        localStorage.setItem("savedDate", dateToSave);
      }
    },
  },
};
</script>
<template>
  <div
    v-if="nasaImage"
    class="flex flex-col justify-center items-center gap-y-[20px]"
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
        <h1
          v-if="nasaImage.date"
          class="text-center text-[20px] font-bold text-white"
        >
          Date: {{ nasaImage.date }}
        </h1>
        <h1
          v-if="nasaImage.copyright"
          class="text-center text-[20px] font-bold text-white"
        >
          Copyright: {{ nasaImage.copyright }}
        </h1>
      </div>
    </div>
  </div>
</template>
