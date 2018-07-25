<template>
  <div id="app">

    <div class="banner">
      <img :src="bannerOne"/>
    </div>
    
  	<listIcon/>
  	
    <div class="shadowSpace" />

		<vueswiper/>
	  
	  <div class="shadowSpace" />
		<!--<div v-if="isLoadingDone" class="adImage">
	    <img :src="newActiveBanner" />
	    <img :src="activeBanner" />
  	</div>-->

  </div>
</template>

<script>
//import slider from 'vue-concise-slider'
import listIcon from './index/listicon'
import vueswiper from './index/vueswiper'
import {CacheUtil} from '../lib/util2'
import {
  imageUrls,
  cacheName,
  baseUrl,
  userInfo,
  isIphoneX
} from '../lib/constants'

console.log(imageUrls.banner.bannerOne)
export default {
  name: 'Index',
  data: function() {
    return {
    	 resultList: [],
    	 productGroup: [],
    	 productGroupSort: [],
    	 productGroupShow: [],
    	 groupShowIndex: [],
    	 masterList: [],
	  	groupListMap: {},
	  	groupRenderFlag :false,
    	isLoadingDone: true,
      bannerOne: imageUrls.banner.bannerOne,
			 blueNav: imageUrls.navigation.blueNav
			 //滑动配置[obj]    
    }
  },

	created:function(){
//		fetch('http://qcbang.hz.taeapp.com' + '/masterpiece',{
		fetch('http://120.27.135.162/qcbang-rest' + '/masterpiece',{
      method: 'GET',
      type: 'json'
    }).then((response) => {
    	  return response.json()
    }).then((response)=>{
    	console.log(response)
      this.masterList = []
      response.data.forEach((item, index) => {
//          this.masterList.push(JSON.parse(item))
         })
//        if (this.masterList.length === response.data.length) {
//          this.masterRenderFlag = true
//          this.initData()
//        }
//    })
    })
//		
//		
//
//		
//		
//		fetch('http://qcbang.hz.taeapp.com' + '/product-type-group',{
////			this.baseUrl
//  	method: 'get'
//	}).then((response)=>{	
//	        return response.json()
//		  }).then((response)=>{
//      for (const item of response.data) {
//        this.groupListMap[item.data.id] = item.data.name
//        
//      }
//       response.data.forEach((value, index) => {
//	        this.productGroup[value.data.id] = value.data.name
//	        
//	        this.productGroupSort[value.data.id] = value.data.sort
//	        
//	        this.groupShowIndex[value.data.id] = value.data.caseIndex
//
//	        this.productGroupShow[value.data.id] = 0
//	        
//    })
//       this.groupRenderFlag = true
//    this.initData()
//        })
	},
  
  
  
  methods:{
  	initData: function() {
  		fetch('http://qcbang.hz.taeapp.com' + '/masterpiece',{
      method: 'GET',
      type: 'json'
    }).then((response) => {
    	  return response.json()
    }).then((response)=>{
    	console.log(response)
        const list = []
        //循环masterList
         response.data.forEach((item, index) => {
			      this.masterList.push(item)
         })
        this.masterList.forEach((item, index) => {
        	//如果
        	console.log(item)
          if (this.groupShowIndex[item.productGroup] && item.status && !item.delFlag) {
            item.groupSort = this.productGroupSort[item.productGroup]
            if (item.groupSort) {
              this.productGroupShow[item.productGroup] = 0
              list.push(item)
            }
          }
        })
        
        list.sort((a, b) => {
          if (a.groupSort === b.groupSort) {
            if (a.indexShow === b.indexShow) {
              if (a.sort === b.sort) return b.createDate - a.createDate
              return a.sort - b.sort
            }
            return b.indexShow - a.indexShow
          }
          return a.groupSort - b.groupSort
        })
        
        this.resultList = []
        list.forEach(caseValue => {
          if (this.productGroupShow[caseValue.productGroup] < 2) {
            this.resultList.push(caseValue)
              ++this.productGroupShow[caseValue.productGroup]
          }
        })
     })
    }
  },
  components:{
    'listIcon':listIcon,
    'vueswiper':vueswiper
  }
}
</script>

<style scoped>
.slider-item{
	margin: 0;
	background-repeat:no-repeat;
        background-position:0% 0%;
  	background-size:cover;
	background-color: #22C3AA
}
 
.banner{
  width: 100%;
  height: 340px;
  overflow: hidden;
}
.shadowSpace {
  background-color: #f6f6f6;
  width: 750px;
  height: 20px;
}

#app {
 
}

.solidOne{
  height: 20px;
  background-color: #f6f6f6;
}
</style>
