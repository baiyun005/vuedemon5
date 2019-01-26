<template>
    <div>
        <header>
            <index-header :geohash="geohash"></index-header>
        </header>
        <index-nav :geohash="geohash"></index-nav>
        <index-contain :geohash="geohash"></index-contain>
    </div>
</template>

<script>
import indexHeader from "../components/eleIndex/indexHeader"
import indexNav from "../components/eleIndex/indexNav"
import indexContain from "../components/eleIndex/indexContain"
export default {
    data(){
      return {
            geohash:this.$route.query.geohash
       }  
    },
    components:{
        indexHeader,
        indexNav,
        indexContain,
    }
}
</script>

<style>

</style>
