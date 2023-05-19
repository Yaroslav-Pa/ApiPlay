<script>
import axios from "axios";
import { GChart } from "vue-google-charts";

export default {
  components: {
    GChart,
  },
  data() {
    return {
      chartData: [
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
        datalessRegionColor: "#696969",
        colorAxis: { colors: ["#95CD41", "#A3F3EB", "#FFC60B"] },
      },
    };
  },
};
</script>

<template>
  <div>
    <GChart
      type="GeoChart"
      :data="chartData"
      :options="chartOptions"
      :settings="{
        packages: ['geochart'],
      }"
    />
  </div>
</template>
<style></style>
