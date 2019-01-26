<template>
    <div>
       <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(items,index) in navs" :key="index" class="navs">
                <div v-for="(item,index) in items" :key="index" class="nav">
                    <img :src="'http://fuss10.elemecdn.com'+item.image_url" alt="">
                    <p>{{item.title}}</p>
                </div>
            </van-swipe-item>
        </van-swipe>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
   props:{
       geohash:String
   },
    computed:{
         navs(){
                return this.$store.state.eleIndex.nav
            }
    },
    created(){
        this.$store.dispatch("eleIndex/getNav",this.geohash)
    }
}
</script>

<style scoped>
    *{
        box-sizing: border-box;
    }
    .navs{
        display: flex;
        flex-wrap: wrap;
    }
    .nav{
        width:25%;
        height: 1.8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .nav img{
       width: 0.84rem;
       height: 0.84rem; 
    }
    .nav p{
        font-size: 0.28rem;
        color:#666;
    }
    .line{
       height:13px;
       border:1px solid #ccc;
       border-left:none;
       border-right:none;
       background-color: #eee; 
    }
</style>
