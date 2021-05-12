<template>
     <Swiper>
        <SwiperItem v-for="item in list">
         <a href=""><img :src="item.image" alt="" ></a> 
        </SwiperItem>
     </Swiper>

</template>

<script>
  import { Swiper, SwiperItem} from 'components/common/swiper/index.js'
	export default {
		name: "banner",
    components:{
      Swiper, 
      SwiperItem
    },
    props:{
      list:{
        typr:Array,
        default(){
          return [
          {image:'https://d.ifengimg.com/w480_h270_q90/x0.ifengimg.com/ucms/2021_17/920E3BCB923DAC5EB2ECF1643EBC048B553B4FA1_size73_w650_h366.jpg'},
          {image:'https://d.ifengimg.com/w480_h270_q90/x0.ifengimg.com/ucms/2021_17/E586610E18D620E383B246ACA1CC3F920341F5F9_size168_w1200_h826.jpg'},
          {image:'https://d.ifengimg.com/w480_h270_q90/x0.ifengimg.com/ucms/2021_17/A4A9E7BD054BAB56C64B9E7A2F54EE7EF2839BC4_size55_w480_h270.jpg'}
          ]
        }
      }
    }
	}
</script>

<style scoped>

</style>