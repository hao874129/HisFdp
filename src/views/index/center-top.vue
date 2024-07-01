<template>
  <div class="main">
    <div class="kpi_box">
      <div class="kpi_bar" onclick="console.log('click bar text')">
        <img src="../../assets/img/key-indicators/icon1.png" />
        <h3><span>門診就診人數</span>2164人</h3>
      </div>
      <div class="kpi_bar">
        <img src="../../assets/img/key-indicators/icon2.png" />
        <h3><span>門診初診率</span>38%</h3>
      </div>
      <div class="kpi_bar">
        <img src="../../assets/img/key-indicators/icon3.png" />
        <h3><span>門診病人住院率</span>12%</h3>
      </div>
      <div class="kpi_bar">
        <img src="../../assets/img/key-indicators/icon4.png" />
        <h3><span>門診健保申報平均每件診療點數</span>859點</h3>
      </div>
      <div class="kpi_bar">
        <img src="../../assets/img/key-indicators/icon1.png" />
        <h3><span>一般急性病房平均住院天數</span>18日</h3>
      </div>
      <div class="kpi_bar">
        <img src="../../assets/img/key-indicators/icon1.png" />
        <h3><span>平均住院日</span>8日</h3>
      </div>
      <!-- <div class="kpi_bar">
        <img src="../../assets/img/key-indicators/icon4.png" />
        <h3><span>住院佔床率</span>73%</h3>
      </div> -->
      <div class="kpi_bar">
        <img src="../../assets/img/key-indicators/icon2.png" />
        <h3><span>總出院人次</span>32人</h3>
      </div>
      <div class="kpi_bar">
        <img src="../../assets/img/key-indicators/icon2.png" />
        <h3><span>十四日非計畫再住院人次</span>8人</h3>
      </div>
      <div class="kpi_bar">
        <img src="../../assets/img/key-indicators/icon3.png" />
        <h3><span>門診藥費點數佔總醫療費用點數之比率</span>72%</h3>
      </div>
      <div class="kpi_bar">
        <img src="../../assets/img/key-indicators/icon3.png" />
        <h3><span>門診健保申報醫療費用點數成長率</span>32%</h3>
      </div>
      <div class="kpi_bar">
        <img src="../../assets/img/key-indicators/icon3.png" />
        <h3><span>住院健保申報醫療費用點數成長率</span>16%</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  position: relative;
}

.kpi_box {
  // margin-top: 24px;
  // height: 590px;
  // overflow-y: auto;
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 26px;
}

.kpi_bar {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../../assets/img/normal_title.png) no-repeat;
  background-size: 100% 100%;
  width: fit-content;
  padding: 10px 16px;
  &:hover {
    background: url(../../assets/img/sensitive_title.png) no-repeat;
    background-size: 100% 100%;
  }
  position: relative;

  img {
    width: 30px;
    margin-right: 10px;
  }

  span {
    color: #bff1f2;
    font-size: 16px;
    display: block;
    font-weight: normal;
  }

  &:hover {
    span {
      color: #ffdbdb;
    }
  }

  h3 {
    color: #9EE6B8;
    font-size: 18px;
  }
}
</style>
