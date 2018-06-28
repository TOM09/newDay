<template>
  <div id="app">
    <div>{{msg}}</div>
    <router-link to="/">home</router-link>

    <router-link to="/params/111/wohenhenhao">params</router-link>
    <router-link to="/gohome">gohome</router-link>
    <router-link to="/Hi1">hi1</router-link>
    <router-link to="/goHi221">goHi1</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
     return {
       msg:"这是入口文件"
     }
  },
  methods:{
    // App.todos.push({ text: '新项目' })
    wodefangfa:function(){
      console.log("danjile")
    }
  },
  components:{  }
}
</script>

<style>
.left1{
  float: left;
  width: 50%;
  height: 300px;
  background-color: #ccc;
}
.right1{
  float: right;
  width: 50%;
  height: 300px;
  background-color: rgb(131, 18, 18);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
