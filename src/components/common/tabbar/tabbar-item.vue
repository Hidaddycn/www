<template>
	<div class="tabbar-item">
		
		<router-link :to="router" class="itema">
			<slot name="icon"><i class="icofont-home"></i></slot>
			<slot name="name"><span>主页</span></slot>
		</router-link>
		
		
	</div>
</template>
<script>
	export default {
		name: 'Tabbar-item',
		components: {

		},
		props:{
			router:{
				type:String,
				default:'/home'
			}
		}

	}
</script>
<style>
.itema{
	display:flex;
	flex-direction:column;
	/*border:1px solid red;
	justify-content:center*/
	align-items:center;


}
.itema>i{
	margin-top:5px;
	margin-bottom: -10px;
}
</style>