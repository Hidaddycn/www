<template>
	<div class="about">
		<h1>News Page</h1>
		<router-link :to="{path:'/news/news1', query:{name:'勤学'}}">新闻1</router-link>
		<router-link to="/news/news2">新闻2</router-link>
		<keep-alive exclude="News-2">
			<router-view></router-view>	
		</keep-alive>
		
	</div>
</template>
<script>
	export default {
		name: 'News',
		components: {

		}
	}
</script>
<style>

</style>