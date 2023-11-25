<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  data() {
    return {};
  },
  components: {
    RouterLink,
  },
};
</script>

<template>
  <div class="headerShow">
    <RouterLink to="/" class="a">首頁</RouterLink>
    <!-- //顯示天氣，隨機抓取該區域的活動資料、地點資料 -->
    <RouterLink to="/weather" class="a">天氣</RouterLink>
    <!-- //使用天氣預報模式建立天氣地圖 -->
    <RouterLink to="/event" class="a">活動</RouterLink>
    <!-- 點區域顯示區域內活動，或許使用投影片模式跳轉或其他方式顯示 -->
    <RouterLink to="/location" class="a">地點</RouterLink>
    <!-- 點區域顯示區域內地點，或許使用投影片模式跳轉或其他方式顯示 -->
    <RouterLink to="/WenHua" class="a">文化</RouterLink>
  </div>
</template>

<style scoped lang="scss">
.headerShow {
  widows: 100%;
  height: 100%;
  background-color: azure;
}
.a {
  margin-left: 10px;
  font-size: 2em;
  text-decoration: none;
}
</style>
