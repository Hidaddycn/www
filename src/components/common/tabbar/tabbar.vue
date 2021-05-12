<template>
	
		<div class="tabbar  ">
		<!-- 	<slot><a href="" >首页</a></slot>
			<slot><a href="" >首页</a></slot>
			<slot><a href="" >首页</a></slot>
			<slot><a href="" >首页</a></slot> -->
			<slot>
				<router-link to="/page">我是</router-link>
				<router-link to="/page">我是</router-link>
				<router-link to="/page">我是</router-link>
				<router-link to="/page">我是</router-link>
			</slot>

		</div>
	
	
</template>
<script>
	export default {
		name: 'Tabbar',
		components: {

		}

	}
</script>
<style>
.tabbar{
	height: 49px;
	width:100%;
	/*background-color:rgba(255,255,255,0.1);*/
	 background-color:rgba(255,255,255,1);

	position:fixed;
	left:0;
	bottom:0;
	display:flex;
	box-shadow: 0px 0px 10px 0px rgba(154,141,141,0.6)
	
}
.tabbar>*{
	flex-basis:0;
	flex-grow:1;
	
	line-height:49px;
}


</style>