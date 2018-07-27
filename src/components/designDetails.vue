<template>
<div class="'wrapper">
		
		
		
    <div class="shadowSpace" />
    
    <div class="banner" interval="4000" auto-play="true">
      <img v-for="item in productTypeData.banners.split(',')" :src="item" />
      <!--<indicator class="indicator" />-->
    </div>
    
    <div class="shadowSpace" />
    
    <div>
      <div v-if="productTypeData.name != ''" class="title">
        <div class="title-left-container">
          <img class="nav" :src="brandNav" />
          <span class="product-text">  {{productTypeData.name}}</span>
        </div>
        <div v-if="productTypeData.subTitle" class="title-right-container" @click="handleClickVIDetail">
          <span class="title-right">整套VI设计列表参考</span>
          <img class="right-image" :src="rightArrow" />
        </div>
      </div>
      <div v-for="item in designerList">
        <designer :designerObject="item" :productTypeData="productTypeData" :discountList="discountList" />
      </div>
    </div>
    
    
    <div class = "shadowSpace" />
    


    
    
    
</div>
</template>
<script>
import {
  imageUrls,
  cacheName,
  baseUrl,
  isIphoneX
} from '../lib/constants'
export default {
	name: 'product',
	data: function() {
	    return {
		  productTypeData:[],
	      consultSuspend: imageUrls.navigation.consultSuspend,
	      designerListCacheName: cacheName.designer.designerList,
	      baseUrl: baseUrl,
	      designerList: [],
//	      productTypeData: this.$route.params.productTypeData,
	      discountList: [],
	      brandNav: imageUrls.navigation.brand,
	      rightArrow: imageUrls.navigation.rightArrow,
	      isBuy: false
	    }
  },
  created: function() {
  	
  	 
  this.axios.all([this.getInfo().productMasterpiece,this.getInfo().productOne, this.getInfo().productTwo,this.getInfo().productThree])
				.then(this.axios.spread((acct, perms, res) => {
					var response = acct.data.data

			       var typeList = response.filter((val) => {
			          return !val.delFlag && val.status && val.groupid == 'e28770326f7042bdabd08382fe8c4ea8'
			        })
    
			        typeList.sort((indexA, indexB) => {
			          if (indexA.sort === indexB.sort) return indexA.createDate > indexB.createDate ? 1 : -1
			          if (indexA.sort > indexB.sort) return 1
			          return -1
			        })
			       this.productTypeData = typeList[4]
			       
			       
			       

			     
			     var response2 = perms.data.data
			     console.log(response2)
			     
			     var designerListData = response2.filter((val) => {
			        return !val.delFlag && val.detailid === this.productTypeData.detailId
			      })
			      designerListData.sort((indexA, indexB) => {
			        if (indexA.grade > indexB.grade) return 1
			        return -1
			      })
			    
			       this.designerList = designerListData[1]
			       
			       
			       
			       
    }))
},
  methods:{
	  getInfo(){
		let obj = {
	          productMasterpiece: this.axios.get(this.baseUrl+'/product-type'),
			productOne: this.axios.get(this.baseUrl+'/product-designer')
//			productTwo: this.axios.get(this.baseUrl+'/product-type-group?id='+this.urlId),
//			productThree: this.axios.get(this.baseUrl+'/case?productGroupId='+this.urlId)
				}
			return obj
		}
  }
  
  
  
 
	
	}
	
</script>
<style scoped>
	.wrapper {
  display: flex;
  flex-direction: column;
  width: 750px;
  justify-content: space-between;
  height: 1112px;
}

.x-wrapper {
  display: flex;
  flex-direction: column;
  width: 750px;
  justify-content: space-between;
  height: 1350px;
}

.print-image-container {
  width: 750px;
  height: 330px;
}

.print-image {
  width: 750px;
  height: 350px;
}

.nav {
  margin-left: 20px;
  width: 10px;
  height: 32px;
}

.title {
  display: flex;
  flex-direction: row;
  height: 98px;
  justify-content: space-between;
}

.title-left-container {
  display: flex;
  flex-direction: row;
  height: 98px;
  align-items: center;
}

.banner {
  width: 750px;
  height: 340px;
}

.product-text {
  font-size: 32px;
  color: #333333;
}

.bottom-text {
  width: 750px;
  height: 98px;
  background-color: #1098f7;
  text-align: center;
  color: #ffffff;
  font-size: 32px;
  padding-top: 33px;
}

.segmentation {
  width: 750px;
  height: 40px;
}

.shadowSpace {
  background-color: #f6f6f6;
  width: 750px;
  height: 20px;
}

.title-right-container {
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  margin-top: 40px;
}

.title-right {
  font-size: 26px;
  color: #666666;
}

.right-image {
  width: 12px;
  height: 22px;
  margin-top: 5px;
  margin-left: 14px;
}

.mask {
  height: 1100px;
  width: 750px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4)
}

.consult-suspend {
  width: 124px;
  height: 124px;
}
</style>