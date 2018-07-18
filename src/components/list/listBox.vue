<template>
  <div class="listBox">
    <h1 class="h1Font">
      <img src="./imgs/circle.png" alt="">
      企业服务
    </h1>
    <ul class="listFather">
      <listChild></listChild>
      <listChild></listChild>
      <listChild></listChild>
      <listChild></listChild>
      <listChild></listChild>
      <listChild></listChild>

    </ul>
    
  </div>
</template>

<script>
import listChild from './listChild'
export default {
  name: 'listBox',
  components: {
    listChild
  }
}
</script>


<style scoped>
.listFather{
  height: 314px;
  margin: 0;
  padding: 0 48px;
  display: flex;
  flex-wrap:wrap;
  justify-content:space-between;
}
.listBox{
    height: 412px;
    width: 100%;
}

.h1Font{
  font-size: 32px;
  margin-left: -15px;
  margin: 0;
  line-height: 98px;
  color: #333;
}
</style>