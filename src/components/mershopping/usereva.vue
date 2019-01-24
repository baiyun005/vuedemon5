<template>
    <div>
        <!-- tags -->
        <div class="wrap">
            <cube-scroll
            :options="options"
            ref="scroll"
            @pulling-up="pullupHandler">
            <!-- scores -->
            <div class="rating_header" >
                <div class="rating_header_left">
                    <p class="zz">4.7</p>
                    <p>综合评价</p>
                    <p>高于周边商家{{(score.compare_rating*100).toFixed(2)}}%</p>
                </div>
                <div class="rating_header_right">
                    <p>
                        <span>服务态度</span>
                        <span>{{(score.overall_score).toFixed(1)}}</span>
                    </p>
                    <p>
                        <span>菜品评价</span>
                        <span>{{(score.service_score).toFixed(1)}}</span>
                    </p>
                    <p>
                        <span>服务态度</span>
                        <span>{{score.deliver_time}}分钟</span>
                    </p>
                </div>
            </div>
            <!-- tags -->
            <div>
                <ul class="tag_list_ul">
                    <li v-for="(item,index) in tags" :key="index" :class="num==index?'tagActivity':''" @click="active(index)">
                        {{item.name}}({{item.count}})
                    </li>
                </ul>
            </div>
            <ul class="rating_list_ul" >
                <li v-for="(rating,index) in ratings" :key="index">
                    <div class="ul_cont">
                        <div class="rating_img">
                            <img src="//elm.cangdu.org/img/164ad0b6a3917599.jpg" alt="">
                        </div>

                        <div class="rating_cont">
                            <div class="rating_list_details">
                                <span>{{rating.username}}</span>
                                <span>{{rating.rated_at}}</span>
                            </div>
                            <div>
                                <span>{{rating.time_spent_desc}}</span>
                            </div>
                            <div class="food_img">
                                <div v-for="(item,index) in rating.item_ratings" :key="index">
                                    <img src="//elm.cangdu.org/img/164ad0b6a3917599.jpg" alt="">
                                    <p>{{item.food_name}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            </cube-scroll>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            page:0,
            num:0,
            index:0,
            options: {
                observeDOM: true,
                click: true,
                probeType: 1,
                scrollbar: false,
                pullDownRefresh: false,
                pullUpLoad: {
                threshold: 50,
                // txt: { more: '正在加载', noMore: '' }
                }
            }
        }
    },
    computed:{
        tags(){
            return this.$store.state.shopping.eva
        },
        ratings(){
            return this.$store.state.shopping.ratings
        },
        score(){
             return this.$store.state.shopping.score
        }
    },
    methods:{
        active(index){
            this.num=index
        },
        refresh () {
            this.$refs.scroll.refresh()
        }, 
        pullupHandler () {
            this.page=this.page+10
            this.$store.commit("shopping/setpage",this.page)
            setTimeout(()=>{
                this.$store.dispatch('shopping/getratings').then(()=>{
                    this.$refs.scroll.forceUpdate()
                    console.log("加载完毕2")
                })
                console.log("加载")
            },1000)
        }
    },
    // created(){
    //     this.$store.dispatch('shopping/geteva')
    //     this.$store.dispatch('shopping/getratings')
    // }
}
</script>

<style>

.wrap {
    position: absolute;
    top: 2.9rem;
    bottom: 0;
    width: 100%;
}

div{
  line-height: none;
}
.tag_list_ul{
    font-size: 0.31rem;
    display: flex;
    flex-wrap: wrap;
    padding: 0.2rem;
}
.tag_list_ul li{
    color: #6d7885;
    padding: 0.2rem 0.1rem;
    background-color: #ebf5ff;
    border-radius: 0.1rem;
    border: 1px;
    margin: 0 0.1rem 0.1rem 0;
}
.tag_list_ul .tagActivity{
    background-color: #3190e8;
    color: #fff;
}
.rating_list_ul{
    padding: 0.2rem;
    font-size: 0.28rem; 
    color: #999;
}
.rating_list_ul li{
    border-top: 1px solid #f1f1f1;
    padding: 0.3rem 0;
    color: #666;
}
.rating_img{
    margin-right: 0.3rem;
}
.rating_img img{
    width: 0.75rem;
    height: 0.75rem;
}
.rating_list_details{
    display: flex;
    justify-content: space-between;
}
.ul_cont{
    display: flex;
}
.rating_cont{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.rating_cont>div{
    padding: 0.1rem;
}
.food_img{
    display: flex;
}
.food_img img{
    width: 1.5rem;
    height: 1.5rem;
}
.food_img div:nth-child(1){
    margin-right: 0.12rem;
}
.food_img p{
    width: 1.5rem;
    height: 0.28rem;
    overflow: hidden;
    text-overflow:ellipsis;
    word-wrap: nowrap; 
}

.rating_header{
    font-size: 0.31rem;
    color: #666;
    display: flex;
    padding: 0.2rem;
}
.rating_header_left{
    margin:0 0.4rem 0 0.4rem; 
}
.rating_header_left p:nth-child(3){
    font-size: 0.2rem;
    color: #999;
}
.rating_header_left p,.rating_header_right p{
    padding: 0.1rem 0;
    text-align: center;
}
.zz{
    font-size: 0.5rem;
    font-weight: 400;
    color: #f60;
}
</style>
