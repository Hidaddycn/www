<template>
	<div class="home">
		<Navbar class="home-nav">
			<template v-slot:center>蘑菇购物街</template>
		</Navbar>
		
		<Banner class="banner" v-bind:list="banner">
			
		</Banner>
		<Recommend v-bind:list="recommend">
			
		</Recommend>
		<Feature/>
		<Tabcontrol :lists="['流行', '精选', '新款']" class="tab-fix"></Tabcontrol>
		<div style="height: 1500px"></div>
	</div>
</template>

<script>
// @ is an alias to /src
import Navbar from 'components/common/navbar/navbar.vue';
import Banner from 'components/content/swiper.vue';
import Recommend from 'components/content/recommend.vue';
import Tabcontrol from 'components/content/tabcontrol.vue'
import Feature from 'views/home/feature.vue'
import {getSilider as HomeSilider} from 'network/home.js';

export default {
	name: 'Home',
	components: {
		Navbar,
		Banner,
		Recommend,
		Feature,
		Tabcontrol
		
	},
	created(){
		HomeSilider().then(value => {
			//console.log(value);
			this.banner = value.data.banner.list;
			this.recommend = value.data.recommend.list;
			//console.log(this.banner)
		})
	},
	data(){
		return{
			banner:[],
			recommend:[]
		}
	}
}
</script>
<style>
.home-nav{
	background-color: rgba(228,49,49,1);
	color:rgba(255,255,255,1);
}
.home img{
	width:100%;
}

.banner{
	margin-top:49px;
}

.tab-fix{
	position:sticky;
	top:49px;
}
</style>
