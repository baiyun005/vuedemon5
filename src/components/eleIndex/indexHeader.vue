<template>
   <div>
        <header>
            <common>{{title}}</common>
        </header>
   </div>
</template>

<script>
import common from "../common/common"
export default {
      components:{
        common
    },
    props:{
        geohash:String
    },
    computed:{
            title(){
                return this.$store.state.eleIndex.title
            }
    },
     created(){
        this.$store.dispatch("eleIndex/getTitle",this.geohash)
    }
}
</script>

<style>

</style>
