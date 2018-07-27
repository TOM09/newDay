/*!
 * Masterpiece Vue
 *
 * 精品案例页
 *
 * @author zhaoyimeng
 * @version 1.0.0 20171128
 */

<template>
<div class="masterpiece">
  <div>
    <div class="detail-title-container">
      <div class="detail-left-container">

        <img class="detail-title-image" :src="typeIconMap[caseObject.productType]" />
        <div class="detail-describe">
          <span class="detail-title">{{typeNameMap[caseObject.productType]}}</span>
          <span class="detail-level">{{caseObject.productGradeName}}</span>
        </div> 
      </div>
    </div>
    <div class="shadowSpace2" />
   
      
    <div class="detail-info-container">
      <div class="detail-info-left">
        <span class="info-title">{{caseObject.name}}</span>
        <div>
          <span class="info-time">{{caseObject.label}}</span>
        </div>
      </div>
    </div>
    <div class="shadowSpace2" />
      
      <div class="background-idea-container">
      <div class="background-idea-title">
        <img class="background-image" :src="background" />
        <span class="background-text">{{caseObject.detailKey1}}</span>
      </div>
      
      
      
      
      
      
      
      
      
      <div v-for="item in String(this.caseObject.detailVal1).split('\n')" class="background-describe">
        <span class="describe-text">{{item}}</span>
      </div>
      <div class="background-idea-title">
        <img class="idea-image" :src="idea" />
        <span class="idea-text">{{caseObject.detailKey2}}</span>
      </div>
      <div v-for="item in String(this.caseObject.detailVal2).split('\n')" class="background-describe">
        <span class="describe-text">{{item}}</span>
      </div>
    </div>
      <div class="image-container" v-for="(item, index) in caseObject.imgs.split(',')">
      <!-- <image class="projection" :src="projection" /> -->
      <img class="image-top" :src="item" />
      <!-- <div v-if="index < caseObject.imgs.split(',').length - 1" class="shadowSpace" /> -->
    </div>
      





      
      <div class="custom-service-title">
      <img class="custom-service-image" :src="customService" />
      <span class="custom-service-span">精品展示</span>
    </div>
    <div class="case-title-container" v-if="greatCaseList.length !== 0">
      <span class="case-title">{{groupListMap[caseObject.productGroup]}}作品示例</span>
    </div>
    
    <div v-for="(item, index) in greatCaseList">
      <div class="great-case-describe" @click='handleClickJump(item)'>
        <div v-if="item.style === '样式A'">
          <div class='great-case-img-container' :style="{ 'margin-top': 14 }">
            <img class="great-case-img" :src="item.cover.split(',')[0]" />
            <img class="great-case-img" :src="item.cover.split(',')[1]" />
          </div>
        </div>
        <div v-if="item.style === '样式B'">
          <div class='great-case-img-container' :style="{ 'margin-top': 14 }">
            <img class="great-case-img-full" :src="item.cover" />
          </div>
        </div>
        <span class="great-case-title-text">{{item.name}}</span>
        <span class="great-case-detail-text">{{item.detailKey1}}：{{item.detailVal1.length > 33 ? (item.detailVal1.substring(0, 33) + '...') : item.detailVal1}}</span>
        <div class="like-container">
          <img class="like" :style="{'margin-right':16}" v-if="masterLikeStatusList[item.id]" :src="like" @click="handleClickLike(item, false)" />
          <img class="like" :style="{'margin-right':16}" v-else :src="unLike" @click="handleClickLike(item, true)" />
          <span class="like-number">{{item.likeNum}}</span>
        </div>
        <div v-if="index < greatCaseList.length - 1" class="col-line" />
      </div>
    </div>
      
    </div> 
    
  </div>
  
  
  
</div>
</template>
<script>
import {
  imageUrls,
  baseUrl,
  userInfo
} from '../lib/constants'

import {
 getArray
} from '../lib/utils2'

export default {
    name:'masterpiece',
  data() {
    return {
      caseObject:[],
      isDone: false,
      baseUrl: baseUrl,
    //   groupListCacheName: cacheName.typeGroup.groupList,
    //   typeListCacheName: cacheName.type.typeList,
      typeNameMap: {},
      typeIconMap: {},
      greatCaseList: [],
      scrollerLoad: false,
      groupListMap:[],
      showLoading: 'hide',
      isBuy: false,
      background: imageUrls.navigation.background,
      loading: imageUrls.navigation.loading,
      idea: imageUrls.navigation.idea,
      projection: imageUrls.navigation.projection,
      preview: imageUrls.navigation.preview,
      banner: imageUrls.banner.record,
      praise: imageUrls.navigation.praise,
      like: imageUrls.navigation.like,
      unLike: imageUrls.navigation.unLike,
//    caseObject: this.$route.params.caseObject,
      groupListMap: this.$route.params.groupListMap,
//    masterLikeStatusList: this.$route.params.masterLikeStatusList,
      customService: imageUrls.navigation.customService,
      productTypeData: '',
      style: {}
    }
  },
  created: function() {
  	
  		this.getList()

  	
//			this.axios.all([this.getInfo().productOne, this.getInfo().productTwo,this.getInfo().productThree])
//				.then(this.axios.spread((acct, perms, res) => {
//					var datas = perms.data.data
//                  console.log(datas)
//					this.abc.push(datas)
//					for(var item of acct.data.data) {
//						if(item.groupid == this.urlId && item.delFlag == false && item.status == true) {
//							this.productData.push(item)
//						}
//					}
//					this.nonStandardList = perms.data.data[0].data.nonStandard.split(',')
//					
//					const resData = res.data.data;
//					this.caseList = []
//					resData.forEach((item, index) => {
//						if (!item.delFlag && item.status) {
//				              this.caseList.push(item)
//				            if (index + 1 === resData.length) {
//				              this.caseList.sort((a, b) => {
//				                if (a.sort === b.sort) return b.createDate - a.createDate
//				                return a.sort - b.sort
//				              })
//				            }
//				        }
//					})
//				}));
		},
  methods: {
			getInfo() {
				let obj = {
					productOne: this.axios.get(this.baseUrl + '/product-type'),
					productTwo: this.axios.get(this.baseUrl+'/masterpiece?id=6cb66f4a1d1d49e58876202b68cb6609'),
					productThree: this.axios.get(this.baseUrl + '/masterpiece?productGroupId=' + this.caseObject.productGroup)
				}
				return obj
			},
			
			 getList() {
			 	this.axios.all([this.getInfo().productOne, this.getInfo().productTwo,this.getInfo().productThree])
				.then(this.axios.spread((acct, perms, res) => {

					
					const resObject = res.data.data


					const caseObject = perms.data.data[0]
					this.caseObject = caseObject
					console.log(caseObject)
					
					
					
			        for (var i = 0; i < resObject.length; i++) {

			        	if(!resObject[i].delFlag && resObject[i].status && resObject[i].id){
							this.greatCaseList.push(resObject[i])
							
						}
			        }

					 acct.data.data.forEach(item => {
					 	
			          if (item.id === this.caseObject.productType) {
			          	console.log(item)
			          	this.productTypeData = item
					}
			          	this.typeNameMap[item.id] = item.name
			          	this.typeIconMap[item.id] = item.img
			        })
	
			 }));
					
					
			        
//			        this.isDone = true
//			      })
//			      NetworkUtil.streamRequest({
//			        method: 'GET',
//			        type: 'json',
//			        url: this.baseUrl + '/masterpiece?productGroupId=' + this.caseObject.productGroup
//			      }, response => {
//			        this.greatCaseList = response.filter((val) => {
//			          return !val.delFlag && val.status && val.id !== this.caseObject.id
//			        })
//			        this.greatCaseList = RandomUtil.getArray(this.greatCaseList, 4)
//			      }, {
//			        cacheName: this.caseObject.productGroup + '_masterpiece',
//			        cacheTime: 1800000,
//			        isNow: false
//			      })
//			      

			   }
				
		}
  }
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 750px;
  height: 1112px;
}

.shadowSpace2 {
  background-color: #f6f6f6;
  width: 750px;
  height: 1px;
}

.x-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 750px;
  height: 1350px;
}

.detail-title-container {
  display: flex;
  flex-direction: row;
  width: 750px;
  height: 168px;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-top-color: #eeeeee;
}

.detail-info-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
}

.info-title {
  font-size: 44px;
  color: #333333;
  font-weight: bold;
}

.like-number {
  font-size: 28px;
  color: #666666;
}

.info-time {
  font-size: 26px;
  color: #999999;
  margin-top: 50px;
}

.detail-describe {
  display: flex;
  flex-direction: column;
  margin-left: 34px;
}

.detail-title {
  font-size: 26px;
  color: #333333;
}

.detail-level {
  margin-top: 18px;
  font-size: 26px;
  color: #999999;
}

.detail-title-image {
  width: 68px;
  height: 68px;
}

.detail-left-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
}

.detail-info-right {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 40px;
}

.preview-container {
  display: flex;
  flex-direction: row;
  margin-right: 30px;
}

.praise-container {
  display: flex;
  flex-direction: row;
  margin-right: 20px
}

.preview-image {
  width: 36px;
  height: 26px;
  margin-right: 12px;
}

.preview-text {
  font-size: 26px;
  color: #999999;
}

.praise-text {
  font-size: 26px;
  color: #999999;
}

.praise-image {
  width: 28px;
  height: 28px;
  margin-right: 12px;
}

.background-idea-container {
  display: flex;
  flex-direction: column;
  border-top-width: 1px;
  border-top-color: #eeeeee;
  margin-bottom: 60px;
}

.background-idea-title {
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 60px;
  align-items: flex-end;
}

.background-image {
  width: 36px;
  height: 46px;
}

.background-text {
  margin-left: 32px;
  font-size: 32px;
  color: #333333;
  font-weight: bold;
}

.background-describe {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
}

.describe-text {
  line-height: 46px;
  font-size: 30px;
  color: #666666;
  margin-top: 52px;
}

.idea-image {
  width: 43px;
  height: 46px;
}

.idea-text {
  margin-left: 26px;
  font-size: 32px;
  color: #333333;
  font-weight: bold;
}

.detail-info-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top-width: 1px;
  border-top-color: #eeeeee;
  height: 208px;
}

.footer {
  display: flex;
  flex-direction: row;
  height: 98px;
  width: 750px;
}

.footer-left {
  display: flex;
  flex-direction: row;
  height: 98px;
  width: 480px;
  align-items: center;
  background-color: white;
}

.footer-like {
  width: 46px;
  height: 42px;
  margin-left: 30px;
}

.footer-right {
  display: flex;
  flex-direction: row;
  height: 98px;
  width: 270px;
  background-color: #0f98f8;
  justify-content: center;
  align-items: center;
}

.footer-left-text-like {
  color: #666666;
  font-size: 32px;
  margin-left: 178px;
}

.footer-left-text {
  color: #999999;
  font-size: 32px;
  margin-left: 178px;
}

.footer-right-text {
  font-size: 32px;
  color: #ffffff;
}

.projection {
  width: 750px;
  height: 454px;
}

.image-container {
  display: flex;
  flex-flow: column;
}

.image-top {
  width: 750px;
  height: 474px;
}

.image-bottom {
  width: 750px;
  height: 438px;
}

.shadowSpace {
  background-color: #f6f6f6;
  width: 750px;
  height: 20px;
}

.custom-service-title {
  display: flex;
  height: 98px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  margin-top: 60px;
}

.custom-service-image {
  width: 44px;
  height: 38px;
}

.custom-service-text {
  margin-left: 18px;
  font-size: 32px;
  color: #333333;
  font-weight: bold;
}

.great-case-describe {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

.great-case-img-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.great-case-img {
  width: 364px;
  height: 322px;
}

.great-case-img-full {
  width: 750px;
  height: 322px;
}

.great-case-title-text {
  color: #333333;
  font-size: 28px;
  margin-top: 40px;
  margin-left: 20px;
}

.great-case-detail-text {
  color: #666666;
  font-size: 28px;
  margin-top: 26px;
  margin-left: 20px;
  margin-right: 46px;
}

.case-title-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 98px;
  border-bottom-width: 1px;
  border-bottom-color: #eeeeee;
}

.case-title {
  margin-left: 20px;
  font-size: 32px;
  color: #333333;
  font-weight: bold;
}

.like-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 20px;
  margin-bottom: 36px;
}

.like-wrapper {
  width: 122px;
  height: 118px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.like {
  width: 42px;
  height: 38px;
}

.col-line {
  width: 710px;
  margin-left: 20px;
  border-width: 1px;
  border-color: #eeeeee;
}

.loading {
  margin-left: 300px;
  width: 62px;
  height: 84px;
}

.loading-container {
  height: 100px;
  background-color: #f6f6f6;
  width: 750px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.loading-text {
  font-size: 22px;
  color: #999999;
  margin-bottom: 10px;
}

.mask {
  height: 1100px;
  width: 750px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4)
}
</style>
