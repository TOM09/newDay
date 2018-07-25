<template>
	<div> 
	  <div class="title-container">
	    <img class="title-image" :src="blueNav" />
	    <span class="title-text">企业服务</span>
	  </div>
	  <div class="type-container">
	    <div class="sub-type-container" v-for="(item, index) in typeGroupList">
	      <div v-if="index < 10" class="service">
	        <img class="image" :src="item.data.icon""  @click="handleClickBrandDesigner(item)"/>   
	        <!--@click="handleClickBrandDesigner(item)-->
	        <span class="text">{{item.data.name}}</span>
	      </div>
	      <div v-if="(index + 1) % 5 != 0 && index < 10" class="placeholder" />
	    </div>
	  </div>
	</div>
</template>

<script>
import {
  imageUrls,
  cacheName,
  baseUrl
} from '../../lib/constants'

export default {
  data() {
    return {
      baseUrl: baseUrl,
      groupListCacheName: cacheName.typeGroup.groupList,
      typeListCacheName: cacheName.type.typeList,
      blueNav: imageUrls.navigation.blueNav,
      typeGroupList: [],
      typeList: [],
      groupListMap: {},
      isLoadingDone: false
    }
  },

  created: function() {
    fetch(this.baseUrl + '/product-type-group',{
    	method: 'get'
  		}).then((response)=>{
		        return response.json()
		  }).then((response)=>{  	
            for (var item of response.data) {
              this.groupListMap[item.data.id] = item.data.name
            }
            this.typeGroupList = response.data.filter((val) => {
              return !val.data.delFlag && val.data.status
            })
            // if(!response.data.delFlag && response.data.status){
              
            // }
            this.typeGroupList.sort((indexA, indexB) => {
              if (indexA.data.sort === indexB.data.sort) return indexA.data.createDate > indexB.data.createDate ? 1 : -1
              if (indexA.data.sort > indexB.data.sort) return 1
              return -1
            })
            // this.isLoadingDone = true
            // this.$emit('onChange', true)
      })
  },
  methods: {
  	handleClickBrandDesigner: function(item) {
//		if(item.data.sort == 1){
//			window.location.href = '/design'
//		}
  		fetch(this.baseUrl + '/product-type-group',{
    	method: 'get'
  		}).then((response)=>{
  			console.log(response)
		        return response.json()
		  }).then((response)=>{  
			        this.typeList = response.filter((val) => {
			          return !val.delFlag && val.status && item.data.id === val.groupid
			        })
			        this.typeList.sort((indexA, indexB) => {
			          if (indexA.sort === indexB.sort) return indexA.createDate > indexB.createDate ? 1 : -1
			          if (indexA.sort > indexB.sort) return 1
			          return -1
			        })
			        
			        this.$router.push({
					   name:"produce-brand-design",
					   params:{
					     productGroupData: item,
			            productData: this.typeList,
			            groupListMap: this.groupListMap
					 }
					})
		  	})
		  
		  
		  
		  
		  
  		
  	}
  }
  

//methods: {
//  handleClickBrandDesigner: function(item) {
//    NetworkUtil.streamRequest({
//      method: 'GET',
//      type: 'json',
//      url: this.baseUrl + '/product-type'
//    }, response => {
//      this.typeList = response.filter((val) => {
//        return !val.delFlag && val.status && item.data.id === val.groupid
//      })
//      this.typeList.sort((indexA, indexB) => {
//        if (indexA.sort === indexB.sort) return indexA.createDate > indexB.createDate ? 1 : -1
//        if (indexA.sort > indexB.sort) return 1
//        return -1
//      })
//      RouterUtil.push({
//        name: 'produce-brand-design',
//        params: {
//          productGroupData: item,
//          productData: this.typeList,
//          groupListMap: this.groupListMap
//        }
//      })
//    }, {
//      cacheName: this.typeListCacheName,
//      cacheTime: 1800000,
//      isNow: false
//    })
//  }
//}
}
</script>

<style scoped>
.title-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 98px;
  align-items: center;
}

.title-image {
  width: 28px;
  height: 38px;
}

.title-text {
  color: #333333;
  font-size: 32px;
  margin-left: 20px;
}

.type-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 654px;
  margin-left: 47px;
  margin-right: 47px;
}

.sub-type-container {
  display: flex;
  flex-direction: row;
}

.placeholder {
  background: white;
  width: 51px;
  height: 51px;
}

.service {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  height: 130px;
  margin-bottom: 30px;
}

.image {
  width: 86px;
  height: 86px;
}

.text {
  font-size: 22px;
  color: #666666;
  margin-top: 20px;
}
</style>
