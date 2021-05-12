<template>
	<div class="navbar" >
		
		<div class="left">
			<slot name="left"></slot>
		</div>
		<div class="center">
			<slot name="center">中间的内容</slot>
		</div>
		<div class="right">
			<slot name="right"></slot>
		</div>
		
		
	</div>
</template>
<script>
	export default {
		name: 'navbar',
		components: {

		}

	}
</script>
<style>
.navbar{
	height: 49px;
	line-height: 49px;
	background-color: var( --base-text-color);
	box-shadow: 0px 1px 8px 0px rgba(154,141,141,0.6);
	position:fixed;
	top:0;
	left:0;
	width:100%;
	display:flex;
	text-align:center;
	z-index: 2;
}
.left , .right{
	width:60px;
	
}
.center{
	flex-grow:1;
}

</style>