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
      <listChild></listChild>
      <listChild></listChild>
      <listChild></listChild>
      <listChild></listChild>
        <li v-for="(item,key) of items">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import listChild from './listChild'
export default {
  name: 'listBox',
  data(){
    return{
      items:[
          {text:"第一组"},
          {text:"第二组"},
          {text:"第三组"},
          ]
        }
},
  components: {
    listChild
  }
}
</script>


<style scoped>
.listFather{
  height: 314px;
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
  line-height: 98px;
  color: #333;
}
</style>