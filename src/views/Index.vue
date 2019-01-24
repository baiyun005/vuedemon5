<template>
    <div>
        <header>
            <index-header></index-header>
        </header>
        <index-nav></index-nav>
        <index-contain></index-contain>
        <!-- <cube-page :cons="cons"></cube-page> -->
    </div>
</template>

<script>
import indexHeader from "../components/eleIndex/indexHeader"
import indexNav from "../components/eleIndex/indexNav"
import indexContain from "../components/eleIndex/indexContain"
// import cubePage from "../components/eleIndex/cubePage"
export default {
    // computed:{
    //      cons(){
    //         return this.$store.state.eleIndex.con
    //     },
    // },
    components:{
        indexHeader,
        indexNav,
        indexContain,
        // cubePage
    }
}
</script>

<style>

</style>
