<template>
    <!-- <mershopping></mershopping> -->
    <shopindex></shopindex>
</template>

<script>
import mershopping from '../components/mershopping/mershopping'
import shopindex from '../components/mershopping/shopindex'
export default {
    components:{
        mershopping,
        shopindex
    },
     watch:{
      '$route':{
        handler(to){
          console.log(11111)
          // this.$store.dispatch('shopping/getdata',to.$route.query)
           
        },
        immdiate:true
      }
     
  },
}
</script>

<style>

</style>
