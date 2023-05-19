<script>
import axios from "axios";
import { GChart } from "vue-google-charts";

export default {
  components: {
    GChart,
  },
  data() {
    return {
      chartData: [["City", "Population"]],
      chartOptions: {
        width: 950,
        height: 600,
        region: "UA",
        resolution: "provinces",
        displayMode: "regions",
        colorAxis: { colors: ["#F6F6F6", "#729983"] },
      },
    };
  },
};

// export default {
//   data() {
//     return {};
//   },
//   mounted() {
//     google.charts.load("current", {
//       packages: ["geochart"],
//       // mapsApiKey: "AIzaSyD3MfRYHAynUsxWCZ8NDsA3cwvWlTkhT1s",
//     });
//     google.charts.setOnLoadCallback(this.drawRegionsMap());
//   },
//   methods: {
//     drawRegionsMap() {
//       var data = google.visualization.arrayToDataTable([
//         ["Country"],
//         ["Ukraine"],
//       ]);

//       var options = {
//         region: "150",
//         displayMode: "regions",
//         colorAxis: { colors: ["#F6F6F6", "#729983"] },
//         // datalessRegionColor: "#f5f5f5",
//         // defaultColor: "#ff8040",
//       };

//       var chart = new google.visualization.GeoChart(
//         document.getElementById("geochart")
//       );
//       chart.draw(data, options);
//     },
//   },
// };
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
      ,
    />
  </div>
</template>
<style></style>
