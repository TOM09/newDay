<template>
	<div id="design">
		<topLogo :urlname = "urlname"/>
		<div class="container">
			<!-- <div class="shadowSpace" /> -->
			<div class="title-container">
				<img class="title-image" :src="titleImage" />
				<span class="title-text">选择{{urlname}}类型</span>
			</div>
			<div class="type-container">
				<div class="sub-type-container" v-for="(item, index) in productData">
					<div class="service">
						<img class="image" :src="item.img" @click="handleClick(item)" />
						<span class="text">{{item.name}}</span>
					</div>
					<div v-if="(index + 1) % 4 != 0" class="placeholder" />
				</div>
			</div>
		</div>

		<div>
			<div class="shadowSpace" />
			<div class="describe-container">
				<div class="sub-describe-container">
					<div class="nonStand-container" v-for="(item, index) in nonStandardList">
						<span v-if="nonStandardList.length - index > nonStandardList.length % 4" class="describe-text">{{item}}</span>
						<span v-else class="describe-text" :style="{width:classObject + 'px' }">{{item}}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="shadowSpace" />

		<div>
		    <div class="title-container-detail">
		      <img class="title-image" :src="titleImage" />
		      <span class="title-text">优秀{{urlname}}</span>
		    </div>
		    
		    <div v-for="(item, index) in caseList">
		      <div class="great-brand-detail-container">
		        <img :src="item.cover.split(',')[0]" class="great-brand-image" />
		        <div class="sub-great-brand-container">
		          <span class="great-brand-title">{{item.name}}</span>
		          <span class="great-brand-describe">{{item.detailVal1.length > 28 ? (item.detailVal1.substring(0,28) + '...') : item.detailVal1}}</span>
		          <div class="detail-info-right">
		            <!--<div class="preview-container">
		              <img class="preview-image" :src="preview" />
		              <span class="preview-text">{{item.browseNum}}</span>
		            </div>-->
		            <div class="praise-container">
		              <image class="praise-image" :src="praise" />
		              <text class="praise-text">{{item.likeNum}}</text>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div v-if="index !== caseList.length - 1" class="split-line" />
		    </div>
		  </div>
  
	</div>
</template>

<script>
import topLogo from './design/topLogo'
import {
	baseUrl,
	imageUrls
} from '../lib/constants'


	export default {
		data() {
			return {
				titleImage: imageUrls.navigation.title,
				preview: imageUrls.navigation.preview,
				praise: imageUrls.navigation.praise,
				baseUrl: baseUrl,
				productData: [],
				nonStandardList: [],
				caseList:[],
				urlId:this.$utils.getUrlKey('id'),
				urlname:this.$utils.getUrlKey('name')
			}
		},
		
		methods: {
			getInfo() {
				let obj = {
					productOne: this.axios.get(this.baseUrl+'/product-type'),
					productTwo: this.axios.get(this.baseUrl+'/product-type-group?id='+this.urlId),
					productThree: this.axios.get(this.baseUrl+'/case?productGroupId='+this.urlId)
				}
				return obj
			}
		},
		
		created: function() {
			this.axios.all([this.getInfo().productOne, this.getInfo().productTwo,this.getInfo().productThree])
				.then(this.axios.spread((acct, perms, res) => {
					for(var item of acct.data.data) {
						if(item.groupid == this.urlId && item.delFlag == false && item.status == true) {
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
		},
  		components:{
			'topLogo':topLogo,
		},
		computed: {
			classObject: function() {
				return 750 / (this.nonStandardList.length % 4)
			}
			
		}
	}
</script>

<style scoped>
	.wrapper {
		display: flex;
		flex-direction: column;
		width: 750px;
		height: 1200px;
	}
	
	.x-wrapper {
		display: flex;
		flex-direction: column;
		width: 750px;
		height: 1450px;
	}
	
	.wrapper-trademark {
		display: flex;
		flex-direction: column;
		width: 750px;
		height: 1200px;
		background-color: #f6f6f6;
	}
	
	.x-wrapper-trademark {
		display: flex;
		flex-direction: column;
		width: 750px;
		height: 1387px;
		background-color: #f6f6f6;
	}
	
	.container {
		display: flex;
		/* margin-top: 100px; */
		padding-top: 100px; 
		flex-direction: column;
		width: 750px;
		background-color: white;
	}
	
	.title-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		height: 98px;
		align-items: center;
	}
	
	.title-container-detail {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		margin-top: 28px;
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
		width: 726px;
		margin-left: 2px;
		margin-right: 2px;
		margin-bottom: -6px;
	}
	
	.sub-type-container {
		display: flex;
		flex-direction: row;
	}
	
	.placeholder {
		background: white;
		width: 2px;
		height: 28px;
	}
	
	.shadowSpace {
		background-color: #f6f6f6;
		width: 750px;
		height: 20px;
	}

	.shadowSpaceTop {
		display: fixed;
		background-color: #f6f6f6;
		width: 750px;
		height: 100px;
		font-size: 36px;
		text-align: center;
		line-height: 100px;
	}
	
	.service {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 180px;
		height: 132px;
		margin-bottom: 32px;
	}
	
	.image {
		width: 88px;
		height: 88px;
	}
	
	.text {
		font-size: 22px;
		color: #666666;
		margin-top: 20px;
	}
	
	.describe-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin-top: 40px;
	}
	
	.sub-describe-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-content: space-around;
	}
	
	.nonStand-container {
		display: flex;
		flex-direction: row;
	}
	
	.describe-text {
		padding-top: 33px;
		text-align: center;
		font-size: 24px;
		color: #333333;
		width: 187.5px;
		height: 90px;
		border-right: 1px solid #e8e8e8;
		border-top: 1px solid #e8e8e8;
	}
	
	.great-brand-detail-container {
		display: flex;
		flex-direction: row;
		width: 710px;
		height: 194px;
		margin-top: 32px;
		margin-bottom: 44px;
		margin-left: 20px;
	}
	
	.great-brand-image {
		width: 218px;
		height: 194px;
	}
	
	.great-brand-title {
		font-size: 30px;
		color: #333333;
	}
	
	.sub-great-brand-container {
		width: 500px;
		height: 200px;
		display: flex;
		flex-direction: column;
		margin-left: 20px;
	}
	
	.split-line {
		width: 750px;
		border: 1px solid #dcdcdc ;
	}
	
	.great-brand-describe {
		font-size: 28px;
		color: #666666;
		margin-top: 16px;
		margin-right: 46px;
		line-height: 40px;
	}
	
	.detail-info-right {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: flex-end;
		margin-top: 28px;
		margin-right: 20px;
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
	
	.consult-suspend {
		width: 124px;
		height: 124px;
	}
</style>