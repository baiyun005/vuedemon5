<template>
    <div class="order">
        <common>订单</common>
        <van-card
            price="2.00"
            desc="单人餐微辣口味"  
            title="赵师傅大盘鸡"
            thumb="//elm.cangdu.org/img/164ad0b6a3917599.jpg"
            >
            <div slot="footer">
                <van-button size="small">再来一单</van-button>
            </div>
        </van-card>
        <van-card
            price="2.00"
            desc="单人餐微辣口味"  
            title="赵师傅大盘鸡"
            thumb="//elm.cangdu.org/img/16772d91c1823153.jpg"
            >
            <div slot="footer">
                <van-button size="small">再来一单</van-button>
            </div>
        </van-card>
        <van-card
            price="2.00"
            desc="单人餐微辣口味"  
            title="赵师傅大盘鸡"
            thumb="//elm.cangdu.org/img/1685f6a035125860.jpg"
            >
            <div slot="footer">
                <van-button size="small">再来一单</van-button>
            </div>
        </van-card>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../components/footer/footer'
import common from '../components/common/common'
export default {
    components:{
        Footer,
        common
    }
}
</script>

<style>
    .order{
        background: #f5f5f5;
        height: 100vh;
    }
    .van-button--mini{
        padding: 0.2rem;
    }
    .van-card__content{
        font-size: 14px;
    }
    .van-card{
        background: white;
    }
    .van-card__thumb{
        height: 70px;
    }
</style>
