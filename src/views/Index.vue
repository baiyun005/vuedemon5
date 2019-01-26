<template>
    <div>
        <header>
            <index-header></index-header>
        </header>
        <index-nav></index-nav>
        <index-contain></index-contain>
    </div>
</template>

<script>
import indexHeader from "../components/eleIndex/indexHeader"
import indexNav from "../components/eleIndex/indexNav"
import indexContain from "../components/eleIndex/indexContain"
export default {
    components:{
        indexHeader,
        indexNav,
        indexContain,
    }
}
</script>

<style>

</style>
