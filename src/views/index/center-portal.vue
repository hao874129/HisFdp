<template>
  <div class="main">
    <div
      class="guideLine"
      style="position: relative; width: auto; height: 500px"
    >
      <img
        src="@/assets/img/center.gif"
        style="position: absolute; top: 50px; width: 100%; height: 128%"
      />
      <img
        src="@/assets/img/normal_bg.png"
        :style="{ opacity: 100 }"
        style="
          position: absolute;
          top: 480px;
          left: 222px;
          width: 250px;
          height: 170px;
        "
      />
      <!-- <img
        v-else
        id="textBox_1"
        src="@/assets/img/sensitive_bg.png"
        style="
          position: absolute;
          top: 110px;
          left: 220px;
          width: 300px;
          height: 170px;
        "
      /> -->

      <div v-for="(item, index) in swiperData" :key="item.title">
        <!-- <img
          :src="item.isHover ? images.sensitiveTitle : images.normalTitle"
          :style="{
            position: 'absolute',
            top: item.image.y + 'px',
            left: item.image.x + 'px',
            width: '130px',
            height: '50px',
          }"
          class="bg_img"
        /> -->
        <div
          @mouseenter="onmouseenter"
          @mouseleave="onmouseleave"
          :id="`${index + 1}`"
          :style="{
            backgroundImage: item.isHover
              ? `url(${images.sensitiveTitle})`
              : `url(${images.normalTitle})`,
            position: 'absolute',
            top: item.pos.y + 'px',
            left: item.pos.x + 'px',
            width: '160px',
            height: 'auto',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            aspectRatio: '1 / 1',
          }"
          class="title_1"
        >
          <div class="title-text-box">
            <p :style="{ color: item.isHover ? '#FFDBDB' : '' }">
              <span class="titleText">{{ item.title }}</span>
            </p>
          </div>
        </div>
        <div
          v-show="item.isHover"
          :style="{
            position: 'absolute',
            top: '480px',
            left: '222px',
            width: '250px',
            height: '170px',
          }"
          ref="textBox"
          class="text"
        >
          <div class="text-box">
            <div class="promptBox">
              <div class="promptTitle">{{ item.title }}</div>
              <div class="psychologyContent">{{ item.describe }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

import normalTitle from "@/assets/img/normal_title.png";
import sensitiveTitle from "@/assets/img/sensitive_title.png";
import center from "@/assets/img/center.gif";
import normalBg from "@/assets/img/normal_bg.png";
import sensitiveBg from "@/assets/img/sensitive_bg.png";

const images = reactive({
  normalTitle,
  sensitiveTitle,
  center,
  normalBg,
  sensitiveBg,
});

const hoverObject = ref(0);
const swiperData = reactive([
  {
    isHover: false,
    title: "1.門診就診人數",
    pos: {
      x: 43,
      y: 554,
    },
    describe: "this is 門診就診人數 description...",
  },
  {
    isHover: false,
    title: "2.門診初診率",
    pos: {
      x: 18,
      y: 460,
    },
    describe: "this is 門診初診率 description...",
  },
  {
    isHover: false,
    title: "3.門診病人住院率",
    pos: {
      x: 18,
      y: 364,
    },
    describe: "this is 門診病人住院率 description...",
  },
  {
    isHover: false,
    title: "4.門診藥費點數佔總醫療費用點數之比率",
    pos: {
      x: 18,
      y: 268,
    },
    describe: "this is 門診藥費點數佔總醫療費用點數之比率 description...",
  },
  {
    isHover: false,
    title: "5.門診健保申報醫療費用點數成長率",
    pos: {
      x: 38,
      y: 170,
    },
    describe: "this is 門診健保申報醫療費用點數成長率 description...",
  },
  {
    isHover: false,
    title: "6.門診健保申報平均每件診療點數",
    pos: {
      x: 58,
      y: 70,
    },
    describe: "this is 門診健保申報平均每件診療點數 description...",
  },
  {
    isHover: false,
    title: "7.一般急性病房平均住院天數",
    pos: {
      x: 268,
      y: 20,
    },
    describe: "this is 一般急性病房平均住院天數 description...",
  },
  {
    isHover: false,
    title: "8.平均住院日",
    pos: {
      x: 478,
      y: 70,
    },
    describe: "this is 平均住院日 description...",
  },
  {
    isHover: false,
    title: "9.住院佔床率",
    pos: {
      x: 498,
      y: 170,
    },
    describe: "this is 住院佔床率 description...",
  },
  {
    isHover: false,
    title: "10.總出院人次",
    pos: {
      x: 518,
      y: 268,
    },
    describe: "this is 總出院人次 description...",
  },
  {
    isHover: false,
    title: "11.十四日非計畫再住院人次",
    pos: {
      x: 518,
      y: 364,
    },
    describe: "this is 十四日非計畫再住院人次 description...",
  },
  {
    isHover: false,
    title: "12.住院健保申報醫療費用點數成長率",
    pos: {
      x: 518,
      y: 460,
    },
    describe: "this is 住院健保申報醫療費用點數成長率 description...",
  },
  {
    isHover: false,
    title: "13.部醫戰情數據上傳",
    pos: {
      x: 493,
      y: 554,
    },
    describe: "this is 部醫戰情數據上傳 description...",
  },
]);

const textBox = ref([]);

const onmouseenter = (e: any) => {
  // const targetObjId = Number(
  //   e.currentTarget.id.substr(e.currentTarget.id.length - 1, 1)
  // );
  const targetObjId = Number(e.currentTarget.id);
  hoverAnimation(targetObjId);
  hoverObject.value = targetObjId;
};

const onmouseleave = () => {
  hoverAnimation(0);
  hoverObject.value = 0;
};

const hoverAnimation = (i: number) => {
  swiperData.forEach((item) => (item.isHover = false));
  if (i === 0) return;
  swiperData[i - 1].isHover = true;
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;

  .guideLine {
    width: 100%;
    height: 100%;

    // #textBox_1 {
    //   opacity: 0;
    // }

    .title_1 {
      font-size: 15px;
      cursor: pointer;

      .title-text-box {
        padding: 8px 16px;
        background: rgba(0, 0, 0, 0);
        justify-content: center;
        align-items: center;
        display: flex;
        height: 100%;
        word-wrap: break-word; /* 允許在單詞內換行 */
        word-break: break-all; /* 強制在單詞內换行 */

        p {
          width: 100%;
          background: rgba(0, 0, 0, 0);
          color: #a0e8ff;
          font-size: 15px;
          text-align: center;

          .titleText {
            margin-left: -5px;
            font-size: 15px;
            display: block;
          }
        }
      }
    }

    .text {
      opacity: 100;
      color: #fff;
      font-size: 15px;
      text-align: center;

      .text-box {
        background: rgba(0, 0, 0, 0);
        justify-content: center;
        align-items: center;
        display: flex;

        .promptBox {
          width: 100%;
          height: 100%;
          padding: 10px 20px;

          .promptTitle {
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 5px;
          }

          p {
            background: rgba(0, 0, 0, 0);
            color: #a0e8ff;
            font-size: 16px;
            text-align: left;
          }
        }

        .psychologyContent {
          color: #afe5fb;
          font-size: 16px;
          text-align: left;

          div {
            line-height: 2em;

            span {
              &:first-child {
                color: #fed723;
                cursor: pointer;
              }
            }
          }
        }
      }
    }

    .circle-point {
      &:hover {
        fill: #000;
      }
    }
  }
}
</style>
