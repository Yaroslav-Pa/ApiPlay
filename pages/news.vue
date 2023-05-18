<script>
import axios from "axios";

export default {
  data() {
    return {
      allNewsArr: null,
      countryName: "Ukraine",
      countryId: "ua",
      key: "ac11416ebce14041a202833f45e02ba4",
      NewsSources: [
        { name: "Netherlands", code: "nl" },
        { name: "Australia", code: "au" },
        { name: "Germany", code: "de" },
        { name: "France", code: "fr" },
        { name: "Italy", code: "it" },
        { name: "Japan", code: "jp" },
        { name: "Switzerland", code: "ch" },
        { name: "Ukraine", code: "ua" },
        { name: "United Kingdom", code: "gb" },
        { name: "China", code: "cn" },
        { name: "United States", code: "us" },
        { name: "Czech Republic", code: "cz" },
      ],
    };
  },
  mounted() {
    this.getNewsAPI();
  },
  methods: {
    scroollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    getNewsAPI() {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=" +
            this.countryId +
            "&apiKey=" +
            this.key
        )
        .then((response) => {
          this.allNewsArr = response.data.articles;
        });
    },
  },
};
</script>
<template>
  <div
    v-if="allNewsArr"
    class="flex flex-col px-[20px] py-[20px] rounded-[20px] s justify-center items-center gap-y-[20px]"
  >
    <h1 class="text-center text-[20px] font-bold text-white">
      News in {{ countryName }}
    </h1>
    <div
      v-for="{
        urlToImage,
        title,
        description,
        url,
        source,
        author,
      } in allNewsArr"
      @click="console.log(allNewsArr)"
      class="flex flex-col rounded-[20px] px-[20px] bg-firstColor py-[10px]"
    >
      <div class="flex flex-row items-center gap-x-[30px]">
        <img
          :src="urlToImage"
          v-if="urlToImage"
          alt="img"
          class="h-[150px] rounded-[20px]"
        />
        <div class="flex flex-col gap-y-[10px] max-w-[550px]">
          <h1 class="font-bold text-[20px]">{{ title }}</h1>
          <p class="font-light text-[16px]">{{ description }}</p>
          <div class="flex flex-row justify-between">
            <a :href="url"
              ><p v-if="source?.name" class="underline underline-offset-4">
                Посилання: {{ source?.name }}
              </p></a
            >
            <p v-if="author">Автор: {{ author }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col my-[30px] gap-y-[30px]">
    <h1 class="text-center text-[20px] font-bold text-white">
      View news in other countries:
    </h1>
    <div class="grid grid-cols-4 grid-rows-1 max-w-[600px] gap-[20px]">
      <button
        v-for="{ name, code } in NewsSources"
        @click="
          (countryId = code), getNewsAPI(), (countryName = name), scroollToTop()
        "
        class="py-[10px] px-[20px] font-bold bg-firstColor hover:bg-transparent hover:border-firstColor border-2 hover:text-white transition-all duration-150 rounded-[50px]"
      >
        <p class="text-center">{{ name }}</p>
      </button>
    </div>
  </div>
</template>
<style></style>
