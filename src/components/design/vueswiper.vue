<template>
  <slider :pages="pages" :sliderinit="sliderinit" class="sliderinit">
    <!-- slot  -->
  </slider>
</template>
 
<script>
import slider from 'vue-concise-slider'// 引入slider组件
import {imageUrls} from '../../lib/constants'

export default {
		 name: 'vueswiper',
   data () {
      return {  
      	  newActiveBanner: imageUrls.banner.newActiveBanner,
					activeBanner: imageUrls.banner.activeBanner,
      		sliderinit: {
		          currentPage: 0,//当前页码
		          thresholdDistance: 500,//滑动判定距离
		          thresholdTime: 1000,//滑动判定时间
		          autoplay:4000,//自动滚动[ms]
		          loop:true,//循环滚动
		          direction:'horizontal',//方向设置，垂直滚动
		          infinite:1,//无限滚动前后遍历数
		          slidesToScroll:1,//每次滑动项数
		        }
      }
    },
    computed:{
  	pages:function(){
  		return [
          {
            title: '',
            style:{
             	background:'url('+this.newActiveBanner+')'
            }
          },
          {
           title: '',
           style:{
            background:'url('+this.activeBanner+')'
            }
          }
        ]
  	}
  },
    components: {
        slider
    }
}
</script>

<style type="text/css" scoped>
	.sliderinit{
  width: 100%;
  height: 254px;
} 
</style>