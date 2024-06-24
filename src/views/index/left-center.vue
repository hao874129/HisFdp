<template>
  <v-chart class="chart" :option="option" />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { graphic } from "echarts/core";
import { opData } from "@/api";
import {ElMessage} from "element-plus"

let colors = ["#0BFC7F", "#A0A0A0", "#F48C02", "#F4023C"];
const option = ref({});
const state = reactive({
  notStarted: 0,
  completed: 0,
  inProgress: 0,
  totalNum: 0,
});
const echartsGraphic = (colors: string[]) => {
  return new graphic.LinearGradient(1, 0, 0, 0, [
    { offset: 0, color: colors[0] },
    { offset: 1, color: colors[1] },
  ]);
};
const getData = () => {
  opData().then((res) => {
    console.log("左中--手術服務",res);
    if (res.success) {
      state.notStarted = res.data.notStarted;
      state.completed = res.data.completed;
      state.totalNum = res.data.totalNum;
      state.inProgress = res.data.inProgress;
      setOption();
    }else{
      ElMessage.error(res.msg)
    }
  }).catch(err=>{
    ElMessage.error(err)
  });
};
getData();
const setOption = () => {
  option.value = {
    title: {
      top: "center",
      left: "center",
      text: [`{value|${state.totalNum}}`, "{name|今日預計檯數}"].join("\n"),
      textStyle: {
        rich: {
          value: {
            color: "#ffffff",
            fontSize: 24,
            fontWeight: "bold",
            lineHeight: 20,
            padding:[4,0,4,0]
          },
          name: {
            color: "#ffffff",
            lineHeight: 20,
          },
        },
      },
    },
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(0,0,0,.6)",
      borderColor: "rgba(147, 235, 248, .8)",
      textStyle: {
        color: "#FFF",
      },
    },
    series: [
      {
        name: "手術服務",
        type: "pie",
        radius: ["40%", "70%"],
        // avoidLabelOverlap: false,
        color: colors,
        label: {
          show: true,
          formatter: "   {b|{b}}   \n   {c|{c}檯}   {per|{d}%}  ",
          //   position: "outside",
          rich: {
            b: {
              color: "#fff",
              fontSize: 12,
              lineHeight: 26,
            },
            c: {
              color: "#31ABE3",
              fontSize: 14,
            },
            per: {
              color: "#31ABE3",
              fontSize: 14,
            },
          },
        },
        emphasis: {
          show: false,
        },
        legend: {
          show: false,
        },
        tooltip: { show: true },

        labelLine: {
          show: true,
          length: 20, // 第一段線 長度
          length2: 36, // 第二段線 長度
          smooth: 0.2,
          lineStyle: {},
        },
        data: [
          {
            value: state.completed,
            name: "已完成",
            itemStyle: {
              color: echartsGraphic(["#0BFC7F", "#A3FDE0"]),
            },
          },
          {
            value: state.notStarted,
            name: "待進行",
            itemStyle: {
              color: echartsGraphic(["#F48C02", "#FDDB7D"]),
            },
          },
          {
            value: state.inProgress,
            name: "進行中",
            itemStyle: {
              color: echartsGraphic(["#F4023C", "#FB6CB7"]),
            },
          },
        ],
      },
    ],
  };
};
</script>

<style scoped lang="scss"></style>
