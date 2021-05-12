<template>
	<div class="shop">
		<!-- <Navbar>
			<template v-slot:left>
				<i class="icofont-cart-alt">
			</template>
			<template v-slot:center>
				购物车
			</template>
		</Navbar> -->
		<Navbar class="shop-nav">
			<template v-slot:left><i class="icofont-cart-alt"></i></template>
			<template v-slot:center>
				购物车({{count}})
			</template>
		</Navbar>
	</div>
</template>
<script>
	import Navbar from 'components/common/navbar/navbar.vue';
	export default {
		name: 'shop',
		components: {
			Navbar
		},
		data(){
			return{
				count:0
			}
		}
	}
</script>
<style>
.shop-nav{
	color:rgba(255,255,255,1);
}
.shop-nav i{
	font-size:20px;
}
</style>