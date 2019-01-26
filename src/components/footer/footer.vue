<template>
    <div class="footer">
        <router-link to="/">
            <van-icon name="shop-o" />
            <p>外卖</p>
        </router-link>
        <router-link to="/search">
            <van-icon name="eye-o" />
            <p>搜索</p>
        </router-link>
        <router-link to="/order">
            <van-icon name="orders-o" />
            <p>订单</p>
        </router-link>
        <router-link to="/personal">
            <van-icon name="contact" />
            <p>我的</p>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footer{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        bottom: 0;
        left: 0;
        font-size: 0.25rem;
        text-align: center;
        border-top: 1px solid #eee;
    }
    .footer i{
        font-size: 0.4rem;
    }
    .footer p{
        margin-top: 0.05rem;
    }
    .footer .router-link-active{
        color: #3190e8;
    }
</style>
