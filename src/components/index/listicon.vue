<template>
	<div> 
		  <div class="title-container">
		    <img class="title-image" :src="blueNav" />
		    <span class="title-text">企业服务</span>
		  </div>
		  <div class="type-container">
		    <div class="sub-type-container" v-for="(item, index) in typeGroupList">
		      <div v-if="index < 10" class="service">
		        <img class="image" :src="item.data.icon""  @click="handleClickBrandDesigner(item.data)"/>   
		        <!--@click="handleClickBrandDesigner(item)-->
		        <span class="text">{{item.data.name}}</span>
		      </div>
		      <div v-if="(index + 1) % 5 != 0 && index < 10" class="placeholder" />
		    </div>
		  </div>
	
	    <div class="shadowSpace" />
	    
	    <vueswiper/>
		  
		  <div class="shadowSpace" />
	
	
	    <div v-for="(item, index) in resultList">
	    <div v-if="index % 2 === 0" class="title-container">
	      <img class="title-image" :src="blueNav" />
	      <span class="title-text">{{groupListMap[item.productGroup]}}</span>
	      <span class="title-text-detail">精品案例</span>
	    </div>
	    <div class="great-case-describe" @click="handleClickCase(item)">
	      <div v-if="item.style === '样式A'">
	        <div v-if="index % 2 === 0" class="great-case-img-container">
	          <img class="great-case-img" :src="item.cover.split(',')[0]" />
	          <img class="great-case-img" :src="item.cover.split(',')[1]" />
	        </div>
	        <div v-else class='great-case-img-container' :style="{ 'margin-top': 14 }">
	          <img class="great-case-img" :src="item.cover.split(',')[0]" />
	          <img class="great-case-img" :src="item.cover.split(',')[1]" />
	        </div>
	      </div>
	      <div v-if="item.style === '样式B'">
	        <div v-if="index % 2 === 0" class="great-case-img-container">
	          <img class="great-case-img-full" :src="item.cover" />
	        </div>
	        <div v-else class='great-case-img-container' :style="{ 'margin-top': 14 }">
	          <img class="great-case-img-full" :src="item.cover" />
	        </div>
	      </div>
	      <span class="great-case-title-text">{{item.name}}</span>
	      <span class="great-case-detail-text">{{item.detailKey1}}：{{item.detailVal1.length > 33 ? (item.detailVal1.substring(0, 33) + '...') : item.detailVal1}}</span>
	      
	    </div>
	    <div v-if="index % 2 === 0" class="col-line" />
	    <div v-else class="shadowSpace" />
	  </div>
	
	
	
	
	 <div class="custom-service-container">
	    <div class="custom-service-title">
	      <img class="custom-service-image" :src="customService" />
	      <span class="custom-service-text">咨询客服</span>
	    </div>
	
	    <div class="shadowSpace2" />
	
	    <div class="custom-service-describe">
	      <div class="sub-custom-service-describe">
	        <div class="custom-service-detail">
	          <img class="custom-service-detail-image" :src="customServiceInfo" />
	          <span class="detail-title-text">专业顾问 : </span>
	          <span class="detail-name-text"> 谢胜男</span>
	        </div>
	        <img class="track" :src="track" />
	        <div class="custom-service-detail">
	          <img class="custom-service-detail-image" :src="customServiceInfo" />
	          <span class="detail-title-text">联系电话 : </span>
	          <span class="detail-name-text">022-85194827</span>
	        </div>
	      </div>
	      <div class="qr-code-container">
	        <img class="background" :src="background" />
	        <!--<img class="new-qr-code" />-->
	        <span class="qr-code-text">点击二维码长按识别</span>
	        <span class="qr-code-text">专属顾问为您服务</span>
	      </div>
	    </div>
	  </div>
	  <div class="shadowSpace" />

</div>
</template>

<script>
import {
  imageUrls,
  cacheName,
  baseUrl
} from '../../lib/constants'
import vueswiper from './vueswiper'


export default {
  data() {
    return {
      baseUrl: baseUrl,
      groupListCacheName: cacheName.typeGroup.groupList,
      background: imageUrls.qrCode.background,
      typeListCacheName: cacheName.type.typeList,
      blueNav: imageUrls.navigation.blueNav,
       customService: imageUrls.navigation.customService,
      customServiceInfo: imageUrls.navigation.customServiceInfo,
      track: imageUrls.navigation.track,
      typeGroupList: [],
      typeList: [],
      groupListMap: {},
      isLoadingDone: false,
      groupShowIndex: [],
      productGroupSort: [],
      productGroup: [],
      masterList: [],
      productGroupShow: [],
      resultList: []
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

            this.typeGroupList.sort((indexA, indexB) => {
              if (indexA.data.sort === indexB.data.sort) return indexA.data.createDate > indexB.data.createDate ? 1 : -1
              if (indexA.data.sort > indexB.data.sort) return 1
              return -1
            })           
            
          response.data.forEach((value, index) => {
            this.productGroup[value.data.id] = value.data.name
            this.productGroupSort[value.data.id] = value.data.sort
            this.groupShowIndex[value.data.id] = value.data.caseIndex
            this.productGroupShow[value.data.id] = 0
          })
          // this.groupRenderFlag = true
          this.initData()
      }),

      this.axios.all([this.getInfo().productMasterpiece,this.getInfo().productOne, this.getInfo().productTwo,this.getInfo().productThree])
				.then(this.axios.spread((acct, perms, res) => {
            this.masterList = []
            acct.data.data.forEach((item, index) => {  
              this.masterList.push(item)
          if (this.masterList.length === acct.data.data.length) {
                this.initData()
              }
            })
          
					// for(var item of acct.data.data) {
					// 	if(item.groupid == "857c6760189b4ced977a103b651b6bf7" && item.delFlag == false && item.status == true) {
					// 		this.productData.push(item)
					// 	}
					// }
					// this.nonStandardList = perms.data.data[0].data.nonStandard.split(',')
					
					// const resData = res.data.data;
					// this.caseList = []
					// resData.forEach((item, index) => {
					// 	if (!item.delFlag && item.status) {
				  //             this.caseList.push(item)
				  //           if (index + 1 === resData.length) {
				  //             this.caseList.sort((a, b) => {
				  //               if (a.sort === b.sort) return b.createDate - a.createDate
				  //               return a.sort - b.sort
				  //             })
				  //           }
				  //       }
					// })
				}));
  },
  methods: {
  	handleClickBrandDesigner: function(item) {
  		if(item){
        // this.route.push({path:'/design',query:{id:item}});
  			 window.location.href = '/design?id='+item.id+'&&name='+item.name
  		}
    },
    initData: function() {
    	//如果三个true
      // if (this.masterRenderFlag && this.groupRenderFlag && this.likeRenderFlag) {
        const list = []
        //循环masterList数据，
        this.masterList.forEach((item, index) => {
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
      // }
    },
    getInfo() {
				let obj = {
          productMasterpiece: this.axios.get(this.baseUrl+'/masterpiece'),
				productOne: this.axios.get(this.baseUrl+'/product-type'),
					productTwo: this.axios.get(this.baseUrl+'/product-type-group?id='+this.urlId),
					productThree: this.axios.get(this.baseUrl+'/case?productGroupId='+this.urlId)
				}
				return obj
			}
  },
   components:{
    'vueswiper':vueswiper
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
.shadowSpace2 {
  background-color: #f6f6f6;
  width: 750px;
  height: 1px;
}
.shadowSpace {
  background-color: #f6f6f6;
  width: 750px;
  height: 20px;
}
.title-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 30px;
  align-items: flex-end;
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

.title-text-detail {
  color: #666666;
  font-size: 28px;
  margin-left: 20px;
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
  margin-top: 14px;
  margin-left: 20px;
  margin-right: 46px;
  line-height: 40px;
}
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

.col-line {
  width: 710px;
  margin-left: 20px;
  border-width: 1px;
  border-color: #eeeeee;
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


.custom-service-container {
  display: flex;
  flex-direction: column;
  width: 750px;
  height: 414px;
}

.custom-service-title {
  width: 750px;
  display: flex;
  height: 98px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #eeeeee;
}

.custom-service-image {
  margin-right: 20px;
  width: 44px;
  height: 38px;
}

.custom-service-text {
  margin-right: 60px;
  font-size: 32px;
  color: #333333;
}

.custom-service-describe {
  display: flex;
  flex-direction: row;
}

.sub-custom-service-describe {
  display: flex;
  flex-direction: column;
  margin-top: 84px;
  margin-left: 60px;
}

.custom-service-detail-image {
  width: 20px;
  height: 20px;
}

.custom-service-detail {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.detail-title-text {
  font-size: 30px;
  color: #666666;
  margin-left: 20px;
}

.detail-name-text {
  font-size: 30px;
  color: #1098f7;
}

.track {
  margin-left: 8px;
  margin-top: -6px;
  margin-bottom: -6px;
  width: 2px;
  height: 42px;
}

.qr-code-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 60px;
  margin-bottom: 30px;
}

.background {
  width: 248px;
  height: 247px;
}

.new-qr-code {
  width: 178px;
  height: 180px;
  position: absolute;
  top: 34px;
  left: 35px;
}

.qr-code-text {
  font-size: 20px;
  color: #999999;
}
</style>
