<template>
  	 <div v-if="isLoadingDone" v-for="(item, index) in resultList">
    <div v-if="index % 2 === 0" class="title-container">
      <image class="title-image" :src="blueNav" />
      <text class="title-text">{{groupListMap[item.productGroup]}}</text>
      <text class="title-text-detail">精品案例</text>
    </div>
    <div class="great-case-describe" @click="handleClickCase(item)">
      <div v-if="item.style === '样式A'">
        <div v-if="index % 2 === 0" class="great-case-img-container">
          <image class="great-case-img" :src="item.cover.split(',')[0]" />
          <image class="great-case-img" :src="item.cover.split(',')[1]" />
        </div>
        <div v-else class='great-case-img-container' :style="{ 'margin-top': 14 }">
          <image class="great-case-img" :src="item.cover.split(',')[0]" />
          <image class="great-case-img" :src="item.cover.split(',')[1]" />
        </div>
      </div>
      <div v-if="item.style === '样式B'">
        <div v-if="index % 2 === 0" class="great-case-img-container">
          <image class="great-case-img-full" :src="item.cover" />
        </div>
        <div v-else class='great-case-img-container' :style="{ 'margin-top': 14 }">
          <image class="great-case-img-full" :src="item.cover" />
        </div>
      </div>
      <text class="great-case-title-text">{{item.name}}</text>
      <text class="great-case-detail-text">{{item.detailKey1}}：{{item.detailVal1.length > 33 ? (item.detailVal1.substring(0, 33) + '...') : item.detailVal1}}</text>
      <div class="like-container">
        <image v-if="masterLikeStatusList[item.id]" class="like" :src="like" @click="handleClickLike(item, false)" />
        <image v-else class="like" :src="unLike" @click="handleClickLike(item, true)" />
        <text class="like-number">{{item.likeNum}}</text>
      </div>
    </div>
    <div v-if="index % 2 === 0" class="col-line" />
    <div v-else class="shadowSpace" />
  </div>
  
  	
</template>

<script>
	export default {
    name: 'IndexDown',
    data: function() {
      return {
        resultList: [],
        baseUrl: baseUrl   
      }
    },
    
    methods: {
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

    created: function() {
			this.axios.all([this.getInfo().productMasterpiece,this.getInfo().productOne, this.getInfo().productTwo,this.getInfo().productThree])
				.then(this.axios.spread((acct, perms, res) => {
					for(var item of acct.data.data) {
						if(item.groupid == "857c6760189b4ced977a103b651b6bf7" && item.delFlag == false && item.status == true) {
							this.productData.push(item)
						}
					}
					this.nonStandardList = perms.data.data[0].data.nonStandard.split(',')
					
					const resData = res.data.data;
					this.caseList = []
					resData.forEach((item, index) => {
						if (!item.delFlag && item.status) {
				              this.caseList.push(item)
				            if (index + 1 === resData.length) {
				              this.caseList.sort((a, b) => {
				                if (a.sort === b.sort) return b.createDate - a.createDate
				                return a.sort - b.sort
				              })
				            }
				        }
					})
				}));
		}
	}
</script>

<style scoped="">
</style>