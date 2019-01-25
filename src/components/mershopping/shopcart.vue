<template>
        <div id="buy_cart">
            <div class="shopcart">
              <div class="cart_icon_container" @click="showdata">
                  <i class="cubeic-mall"></i>
              </div>
              <div class="cart_num">
                  <div>
                      <span>￥</span>
                      <span>{{price}}</span>
                  </div>
                  <div>配送费</div>
              </div>
              <div class="gotopay">去结算</div>
            </div>  
            <div class="cart_food_list">
              
              <transition name="fade">
                <div v-if="!isshow">
                  <div class="cart_heard">
                      <div>购物车</div>
                      <div class="cart_clear">
                        <span><i class="cubeic-delete"></i></span>
                        <span>清空</span>
                      </div>
                  </div>
                  <div>
                    <div v-for="(item,index) in cart" :key="index" class="cart_food_details">
                      <div>{{item.name}}</div>
                      <div class="cart_list_price">
                          <div>￥{{item.price}}</div>
                          <div>
                              <span ><i class="cubeic-remove"></i></span> 
                              <span class="cart_num">{{item.num}}</span>
                              <span ><i class="cubeic-add"></i></span>
                          </div>
                      </div>
                    </div>
                  </div>
                  
                </div>  
              </transition>
              <!-- </div>   -->
            </div>
        </div>
</template>

<script>
export default {
  data(){
    return{
      isshow:true
    }
  },
    computed:{
        cart(){
            return this.$store.state.shopping.cart
        },
        price(){
            return this.$store.state.shopping.total
        }
    },
    methods:{
        showdata(){
          this.isshow=!this.isshow
          console.log(1)
        }
    }
}
</script>

<style>
#buy_cart{
  overflow: hidden;
}
.shopcart{
    position: fixed;
    bottom: 0;
    left:0;
    height: 1rem;
    width: 100%;
    background-color: #535356;
    text-decoration: none;
    z-index: 100;
    color: #fff;
    display: flex;
}
.shopcart .cart_icon_container{
    width: 1.2rem;
    height: 1.2rem;
    border: 0.1rem solid #535356;
    background-color: #3190e8;
    border-radius:50%;
    font-size: 0.7rem;
    text-align: center;
    transform: translateY(-0.3rem);
    line-height: 1rem; 
    /* position: relative;
     z-index: 1000; */
     margin-left:0.2rem;
}
.shopcart .cart_num{
    font-size: 0.35rem;
    color: #fff;
    text-align:start;
}
.shopcart .cart_num div:nth-child(1){
    padding: 0.1rem 0;
    font-weight: 600;
}
.shopcart .cart_num div:nth-child(2){
    font-size: 0.25rem;
}
.shopcart .gotopay{
    width: 2.6rem;
    background-color: #4cd964;
    font-size: 0.35rem;
    font-weight: bold;
    text-align: center;
    line-height: 1rem;
    position: absolute;
    top:0;
    right: 0;
}
.cart_food_list{
  width: 100%;
  /* height: 100%; */
  font-size: 0.35rem;
  position: absolute; 
  bottom: 1rem;
  left: 0;  
  z-index: 99;
  background-color: #fff;
  /* transform: translateY(0.8rem) */
}

.cart_heard{
  display: flex;
  justify-content: space-between;
  color: #666;
}
.cart_clear,.cubeic-delete{
  color: #333;
}
.cart_food_details{
  display: flex;
  justify-content: space-between;
  padding:0.2rem 0; 
}
.cart_list_price{
  display: flex;
}
/* 动画 */
.fade-enter-active,.fade-leave-active{
  transition: all .5s
}
.fade-enter{
  transform: translateY(1rem)
}
.fade-leave{
  transform: translateY(2rem)
}
</style>
