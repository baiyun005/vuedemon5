<template>
    <div>
        <div class="contain">
            <div class="title">
                <van-icon name="shop-o" class="icon"/>
                <span>附近店家</span>
            </div>
            <div class="con">
                <cube-scroll
                    ref="scroll"
                    :options="options"
                     @pulling-up="pullupHandler"
                    >
                    <router-link :to="{path:'/shop',query:{id:con.id}}" class="list" v-for="(con,index) in cons" :key="index" @touchstart="refresh">
                        <img :src="'http://elm.cangdu.org/img/'+con.image_path" alt="">
                        <div class="right">
                            <div class="right-top right-flex">
                                <div class="top-title">
                                    <span class="brand">品牌</span>
                                    <span class="name">{{con.name}}</span>
                                </div>
                                <div class="top-bao">
                                    <span v-for="(item,index) in con.supports" :key="index">{{item.icon_name}}</span>
                                </div>
                            </div>
                            <div class="right-center right-flex">
                                <div>
                                    <div class="center-star">
                                        <img src="../../../public/img/star2.png" alt="">
                                        <div class="star" :style="'width:'+(con.rating/ 5 * 100)%+''"></div>
                                    </div>
                                    <span class="rate">{{con.rating}}</span>
                                    <span class="all">月售{{con.recent_order_num}}单</span>
                                </div>
                                <div>
                                    <span class="kuaidi">{{con.delivery_mode.text}}</span>
                                    <span class="zhun" v-for="(item,index) in con.supports" :key="index">{{item.icon_name}}</span>
                                </div>
                            </div>
                            <div class="right-bottom right-flex">
                                <div class="money">
                                    <span>￥{{con.float_minimum_order_amount}}元起/</span>
                                    <span>配送费约￥{{con.float_delivery_fee}}</span>
                                </div>
                                <div>
                                    <span class="kilo">{{con.distance}}</span>
                                    <span class="time">{{con.order_lead_time}}</span>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </cube-scroll>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            page:1,
            flag:true,
            options: {
                    observeDOM: true,
                    click: true,
                    probeType: 1,
                    scrollbar: false,
                    pullUpLoad: {
                    threshold: 50,
                    txt: { more: '正在加载', noMore: '' }
                }
            },
             toast: this.$createToast({
                time: 10000,
                txt: '加载中'
            })
        }
    },
    computed:{
        cons(){
            return this.$store.state.eleIndex.con
        },
    },
    methods:{
        getAll(){
            this.toast.show()
            this.$store.dispatch("eleIndex/getCon").then(()=>{
                this.toast.hide()
            })
        },
        pullupHandler(){
            var _this=this;
            this.page=this.page+1;
            if(this.flag){
                this.flag=false;
                this.$store.dispatch("eleIndex/getCons",this.page).then(()=>{
                    this.$refs.scroll.forceUpdate()
                    _this.flag=true
               })
            }
        },
        refresh(){
            this.$refs.scroll.refresh()
            console.log(this.$refs.scroll)
        }
    },
    created(){
        this.getAll()
    },
    // mounted(){
    //     console.log(this.$refs.scroll)
    // }
    // mounted(){
    //         let sw = true
    //         window.addEventListener('scroll',function(){
    //             let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    //             console.log(document.documentElement.clientHeight+'-----------'+window.innerHeight); // 可视区域高度
    //             console.log(scrollTop); // 滚动高度
    //             let bodyHeight = document.body.scrollHeight ||  document.documentElement.scrollHeight; // 文档高度
    //             // 判断是否滚动到底部
    //              if (scrollTop + window.innerHeight >=bodyHeight) {
    //                 //判断请求发送标志位，避免重复请求(这个需要自己在data里声明，直接贴代码会报错。默认为false，发送请求前改为true， 请求完成回调函数里改回false)
    //                 console.log("fertgreshgtrd")
    //                 if (this.loading) return;
    //                 //发送请求
    //                 this.getAll();
    //             };
    //         })
    // }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: none;
        font-size: 0.24px;
    }
    .con{
        position: absolute;
        top:5.3rem;
        bottom:0;
        width: 100%;
    }
    .contain .title{
        margin:0.2rem 0.3rem;
        background: #fff;
    }
    .contain .title .icon{
        color:#999;
        font-size: 0.28rem;
    }
    .contain .title span{
        color:#999;
        font-size: 0.28rem;
    }
    .list{
        padding: 0.2rem 0.2rem;
        margin-top: 0.2rem;
        display: flex;
        border-bottom: 1px solid #ccc;
    }
    .list .right-top{
        margin-bottom: 0.26rem;
    }
    .list>img{
        width: 1.26rem;
        height: 1.26rem;
        margin-right: 10px;
        flex-shrink: 0;
    }
    .list .right{
        width:100%;
    }
    .list .right-flex{
        display: flex;
        justify-content: space-between;
    }
    .list .right .brand{
        background-color: #ffd930;
        font-size: 0.24rem;
        padding:1px 3px;
        border-radius: 5px;
        margin-right: 5px;
    }
    .list .right .name{
        font-size: 0.28rem;
        font-weight: bold;
    }
    .list .right .top-bao{
        font-size: 0.24rem;
        color:#999;
    }
    .list .right .top-bao>span{
        margin:0 2px;
    }
    .center-star{
        display: inline-block;
        margin-right: 5px;
        position: relative;
        height:0.18rem;
        width: 1rem;
    }
    .center-star>img{
        position:absolute;
        top:0;
        left:0;
        width: 1rem;;
        height:0.18rem;
    }
    .star{
        position: absolute;
        top:0;
        left:0;
        width: 1rem;
        height: 0.18rem;
        background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARUAAAArCAYAAABW6RyLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3Qzk5REI5NTFBRDIxMUU5OTg5RUI3RkE1MTlFRjMxOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3Qzk5REI5NjFBRDIxMUU5OTg5RUI3RkE1MTlFRjMxOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdDOTlEQjkzMUFEMjExRTk5ODlFQjdGQTUxOUVGMzE4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdDOTlEQjk0MUFEMjExRTk5ODlFQjdGQTUxOUVGMzE4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ID0VvAAAB9FJREFUeNrsXc1rJEUU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")
        no-repeat left center / 1rem 0.16rem;
    }
    .right-center {
        margin-bottom: 0.26rem;
    }
    .right-center .rate{
        font-size: 0.24rem;
        color:orange;
        margin-right: 5px;
    }
    .right-center .all{
        font-size: 0.24rem;
        color:#999;
    }
    .right-center .kuaidi{
        font-size: 0.20rem;
        color:#fff;
        border-radius: 3px;
        margin-right: 3px;
        background-color: #57a9ff;
    }
    .right-center .zhun{
        font-size: 0.20rem;
        color:#666;
    }
    .right-bottom .money{
        font-size: 0.2rem;
        color:#999;
    }
    .right-bottom .kilo{
        font-size: 0.2rem;
        color:#999;
        margin-top: 10px;
    }
    .right-bottom .time{
        font-size: 0.2rem;
        color:#3190e8;
    }
    .base{
        width: 100px;
        height: 700px;
        position: absolute;
        top:20px;
        left:50%;
        margin-left: -50px;
        background:url("data:image/png;base64,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");
    }
</style>
