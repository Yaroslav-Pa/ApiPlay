<script>
import axios from "axios";
import { GChart } from "vue-google-charts";

export default {
  components: {
    GChart,
  },
  data() {
    return {
      geoChartData: [
        ["Country", "No. of Movies"],
        ["United States", 23544],
        ["United Kingdom", 4263],
        ["China", 2523],
        ["France", 3968],
        ["Japan", 1722],
        ["Germany", 1895],
        ["South Korea", 1762],
        ["Canada", 1818],
        ["Australia", 979],
        ["India", 2345],
        ["New Zealand", 261],
        ["Hong Kong", 444],
        ["Italy", 1798],
        ["Spain", 1706],
        ["Russia", 1191],
        ["Belgium", 635],
        ["Mexico", 578],
        ["Sweden", 308],
        ["Netherlands", 540],
        ["Ireland", 358],
        ["Brazil", 524],
        ["Turkey", 1138],
        ["Taiwan", 160],
        ["Denmark", 308],
        ["Finland", 162],
        ["Czech Republic", 381],
        ["Switzerland", 267],
        ["Argentina", 895],
        ["South Africa", 164],
        ["Poland", 333],
        ["Hungary", 132],
        ["UAE", 45],
        ["Malta", 14],
        ["Austria", 198],
        ["Panama", 10],
        ["Luxembourg", 117],
        ["Norway", 218],
        ["Tunisia", 26],
        ["Thailand", 124],
        ["Morocco", 34],
        ["Romania", 185],
        ["Chile", 115],
        ["Slovakia", 152],
        ["Uruguay", 54],
        ["Paraguay", 17],
        ["Iceland", 76],
        ["Israel", 226],
        ["Philippines", 157],
        ["Ukraine", 75],
        ["Peru", 41],
        ["Kuwait", 7],
        ["Lebanon", 46],
        ["Iran", 101],
        ["Greece", 91],
        ["Cuba", 42],
        ["Portugal", 339],
        ["Venezuela", 26],
        ["Bahamas", 8],
        ["Latvia", 49],
        ["Malaysia", 36],
        ["Algeria", 16],
        ["Greenland", 4],
        ["Botswana", 4],
        ["Bulgaria", 119],
        ["Singapore", 37],
        ["Croatia", 60],
        ["Namibia", 4],
        ["Estonia", 42],
        ["Colombia", 84],
        ["Kazakhstan", 29],
        ["Lithuania", 120],
        ["Belarus", 14],
        ["Georgia", 31],
        ["Indonesia", 60],
        ["Mongolia", 13],
      ],
      chartOptions: {
        width: 950,
        height: 600,
        region: "world",
        resolution: "countries",
        displayMode: "regions",
        backgroundColor: "transparent",
        legend: {
          textStyle: { color: "#000000", fontSize: 18, "stroke-width": 0 },
        },
        datalessRegionColor: "#696969",
        colorAxis: { colors: ["#95CD41", "#A3F3EB", "#FFC60B"] },
      },
      pieChartData: [
        ["Oblast", "Number of internally displaced persons"],
        ["Dnipropetrovsk", 442323],
        ["Donetsk", 521362],
        ["Kharkiv ", 444322],
        ["Kyiv", 705638],
        ["Luhansk ", 277700],
      ],
      pieChartOptions: {
        width: 950,
        height: 500,

        backgroundColor: "transparent",
        legend: {
          textStyle: { color: "#ffffff", fontSize: 18 },
        },
        datalessRegionColor: "#696969",
        colorAxis: { colors: ["#95CD41", "#A3F3EB", "#FFC60B"] },
      },
      bubbleChartData: [
        ["ID", "Life Expectancy", "Fertility Rate", "Region", "Population"],
        ["CAN", 80.66, 1.67, "North America", 33739900],
        ["DEU", 79.84, 1.36, "Europe", 81902307],
        ["DNK", 78.6, 1.84, "Europe", 5523095],
        ["EGY", 72.73, 2.78, "Middle East", 79716203],
        ["GBR", 80.05, 2, "Europe", 61801570],
        ["IRN", 72.49, 1.7, "Middle East", 73137148],
        ["IRQ", 68.09, 4.77, "Middle East", 31090763],
        ["ISR", 81.55, 2.96, "Middle East", 7485600],
        ["RUS", 68.6, 1.54, "Europe", 141850000],
        ["USA", 78.09, 2.05, "North America", 307007000],
      ],
      bubbleChartOptions: {
        backgroundColor: "transparent",
        hAxis: {
          title: "Life Expectancy",
          textStyle: { color: "#ffffff" },
          titleTextStyle: {
            color: "#ffffff",
          },
        },
        vAxis: {
          title: "Fertility Rate",
          textStyle: { color: "#ffffff" },
          titleTextStyle: {
            color: "#ffffff",
          },
        },
        bubble: { textStyle: { fontSize: 11 } },
        legend: {
          textStyle: { color: "#ffffff", fontSize: 16 },
        },
        width: 800,
        height: 600,
      },
    };
  },
};
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-y-[30px]">
    <div
      class="flex flex-col px-[50px] py-[30px] rounded-[50px] bg-bgColor justify-center items-center gap-y-[20px] border-2 border-secondColor"
    >
      <h1 class="text-center text-[20px] font-bold text-white">
        GeoChart: Number of created films per country
      </h1>
      <GChart
        type="GeoChart"
        :data="geoChartData"
        :options="chartOptions"
        :settings="{
          packages: ['geochart'],
        }"
      />
    </div>
    <div
      class="flex flex-col px-[50px] py-[30px] rounded-[50px] bg-bgColor justify-center items-center gap-y-[20px] border-2 border-secondColor"
    >
      <h1 class="text-center text-[20px] font-bold text-white">
        PieChart: Number of internally displaced persons
      </h1>
      <GChart
        type="PieChart"
        :data="pieChartData"
        :options="pieChartOptions"
        :settings="{
          packages: ['corechart'],
        }"
      />
    </div>
    <div
      class="flex flex-col px-[50px] py-[30px] rounded-[50px] bg-bgColor justify-center items-center gap-y-[20px] border-2 border-secondColor"
    >
      <h1 class="text-center text-[20px] font-bold text-white">
        BubbleChart: Correlation between life expectancy, fertility rate and
        population of some world countries
      </h1>
      <GChart
        type="BubbleChart"
        :data="bubbleChartData"
        :options="bubbleChartOptions"
        :settings="{
          packages: ['corechart'],
        }"
      />
    </div>
  </div>
</template>
<style></style>
