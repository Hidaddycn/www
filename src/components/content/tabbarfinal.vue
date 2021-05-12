<template>
	<div class="tabbarfinal">
		<Tabbar>
			<Tabbaritem router="/home">
				<template v-slot:icon><i class="icofont-home"></i></template>
				<template v-slot:name><span>首页</span></template>
			</Tabbaritem>
			<Tabbaritem router="/catalog">
				<template v-slot:icon><i class="icofont-grocery"></i></template>
				<template v-slot:name><span>分类</span></template>
			</Tabbaritem>
			<Tabbaritem router="/shop">
				<template v-slot:icon><i class="icofont-cart-alt"></i></template>
				<template v-slot:name><span>购物篮</span></template>
			</Tabbaritem>
			<Tabbaritem router="/profile">
				<template v-slot:icon><i class="icofont-ui-user"></i></template>
				<template v-slot:name><span>我的</span></template>
			</Tabbaritem>


		</Tabbar>
	</div>
</template>
<script>
	import Tabbar from 'components/common/tabbar/tabbar.vue';
	import Tabbaritem from 'components/common/tabbar/tabbar-item.vue';
	export default {
		name: 'TabbarFinal',
		components: {
			Tabbar,
			Tabbaritem

		}

	}
</script>
<style>
/*点击之后的颜色,在配置路由后显示颜色，依赖路由跳转，产生classs类*/
.active{    
color: var( --base-text-color);   
}
/*图标的大小*/
.tabbarfinal i{
	font-size:18px;
}
.tabbarfinal span{
	font-size:10px;
}


</style>