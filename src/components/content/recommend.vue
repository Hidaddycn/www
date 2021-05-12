<template>
 	<div class="recommend">
 		<a :href="item.link" v-for="item in list">
 			<img :src="item.image" alt="" >
 			<div>{{item.title}}</div>
 		</a>
 	</div>
</template>

<script>
	export default {
		name: "recommend",
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
 	.recommend{
 		display: flex;
 		text-align: center;
 		margin-top:10px;
 		padding-bottom:30px;
 		border-bottom: 10px solid rgba(135,135,135,0.1)

 	}
 	.recommend img{
 		width:70%;
 	}
</style>