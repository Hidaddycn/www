<template>
	<div class="about">
		<h1>News-1 children pages</h1>
	<h2>我们获取的名字是:{{$route.query.name}}</h2>
	<button @click="bc">打印$router对象</button>
	</div>
</template>
<script>
	export default {
		name: 'News-1',
		components: {

		},
		methods:{
			bc(){
				console.log(this.$router);
			}
		},
		created(){
			console.log('news1被创建了');
		},
		destroyed(){
			console.log('news1组件被销毁了')
		}
	}
</script>
<style>

</style>