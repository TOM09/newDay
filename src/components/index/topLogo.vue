<template>
  <div class="toplogo">
	<li class="imglogo">
			<img src="../../lib/favicon.png" class="imgfont">
	</li>
  </div>
</template>

<script>
export default {
  methods: {
  	handleClickBrandDesigner: function(item) {
  			window.location.href = '/'
  	}
  }
}
</script>

<style scoped>
.toplogo{
  	position: fixed;
	width: 750px;
	height: 100px;
	background-color: #f6f6f6;
	font-size: 36px;
	line-height: 100px;
	display:flex;
	display:-webkit-flex;
	justify-content:center;
}
.imglogo{
	padding-right: 20px;
	list-style-type: none;
}
.imgfont{
	width: 180px;
	height: 32px;
}

</style>