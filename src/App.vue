<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template class="body">
  <div class="header">
    <Header />
  </div>
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">

.header{
  margin: 0;
  widows: 100vw;
  height: 15vh;
}

.content{
  width: 100vw;
  height: 85vh;
  text-align: center;
}
</style>
