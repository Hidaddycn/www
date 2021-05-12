<template>
  <div id="app">
    
       <router-view></router-view>
    
   
    <TabbarFinal></TabbarFinal>

  </div>
</template>
<script>
  import TabbarFinal from 'components/content/tabbarfinal.vue'

  export default {
    name:'app',
    components:{
      TabbarFinal
    },
    
  }

</script>

<style lang="scss">
//@import './assets/css/base.css';
@import 'assets/css/base.css';
@import 'assets/css/icofont.css';
@import 'assets/css/grid.css';

</style>
