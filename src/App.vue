<template>
  <div id="app">
    <div class="banner">
      <img src="./assets/banner.jpg">
    </div>
    <listBox>

      
    </listBox>
    <div class="solidOne"></div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import listBox from './components/list/listBox'

export default {
  name: 'App',
  components: {
    listBox
  }
}
</script>

<style scoped>
#app {
 
}
.banner{
  width: 100%;
  height: 340px;
  overflow: hidden;
}
.solidOne{
  height: 20px;
  background-color: #f6f6f6;
}
</style>
