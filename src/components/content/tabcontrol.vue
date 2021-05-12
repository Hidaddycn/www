<template>
	<div class="tabcontrol" >
		<div v-for="(item,index) in lists" :class="{active:isActive ===index}" @click="tabclick(index)">
			<span >{{item}}</span>
		</div>
		
		
		
	</div>
</template>
<script>
	export default {
		name: 'tabcontrol',
		components: {

		},
		props:{
			lists:{
				type:Array,
				default(){
					return ['文字1','文字2','文字3']
				}
			}
		},
		data(){
			return{
				isActive:0
			}
		},
		methods:{
			tabclick(index){
				this.isActive = index;
			}
		}

	}
</script>
<style>
.tabcontrol{
	display:flex;
	text-align:center;
	height: 40px;
	line-height: 40px;
	background-color: rgba(250,250,250,1)
}
.tabcontrol div{
	
	flex-grow:1;
}
.tabcontrol  span{
	padding-bottom: 6px;
}

.tabcontrol .active span{
	color:var( --base-text-color);
	border-bottom:3px solid var( --base-text-color);
}

</style>