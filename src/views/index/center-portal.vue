<template>
  <div class="main">
    <div
      class="guideLine"
      style="position: relative; width: auto; height: 500px"
    >
      <img
        src="@/assets/img/center.gif"
        style="
          position: absolute;
          top: 20px;
          left: 5%;
          width: 90%;
          height: 100%;
        "
      />
      <img
        src="@/assets/img/normal_bg.png"
        :style="{ opacity: 100 }"
        style="
          position: absolute;
          top: 320px;
          left: 220px;
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
          :id="'title_' + (index + 1)"
          :style="{
            backgroundImage: item.isHover
              ? `url(${images.sensitiveTitle})`
              : `url(${images.normalTitle})`,
            position: 'absolute',
            top: item.pos.y + 'px',
            left: item.pos.x + 'px',
            width: '100px',
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
            top: '320px',
            left: '250px',
            width: '250px',
            height: '170px',
          }"
          ref="textBox"
          class="text"
        >
          <div class="text-box">
            <div class="promptBox">
              <div class="promptTitle">{{ item.title }}</div>
              <div class="psychologyContent">{{ item.describe }}
              </div>
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
    title: "標題一",
    pos: {
      x: 85,
      y: 354,
    },
    describe: "描述一",
  },
  {
    isHover: false,
    title: "標題二",
    pos: {
      x: 58,
      y: 224,
    },
    describe: "描述二",
  },
  {
    isHover: false,
    title: "標題三",
    pos: {
      x: 87,
      y: 110,
    },
    describe: "描述三",
  },
  {
    isHover: false,
    title: "標題四",
    pos: {
      x: 284,
      y: 16,
    },
    describe: "描述四",
  },
  {
    isHover: false,
    title: "標題五",
    pos: {
      x: 502,
      y: 110,
    },
    describe: "描述五",
  },
  {
    isHover: false,
    title: "標題六",
    pos: {
      x: 540,
      y: 224,
    },
    describe: "描述六",
  },
  {
    isHover: false,
    title: "標題七",
    pos: {
      x: 518,
      y: 354,
    },
    describe: "描述七",
  },
]);

const textBox = ref([]);

const onmouseenter = (e: any) => {
  const targetObjId = Number(
    e.currentTarget.id.substr(e.currentTarget.id.length - 1, 1)
  );
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
        background: rgba(0, 0, 0, 0);
        justify-content: center;
        align-items: center;
        display: -webkit-flex;
        height: 100%;

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
