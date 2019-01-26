<template>
    <div>
        <header>
            <common>上海</common>
        </header>
        {{this.$route.query.geohash}}
    </div>
</template>

<script>
import common from "../components/common/common"
export default {
    components:{
        common,
    }
}
</script>

<style>

</style>
