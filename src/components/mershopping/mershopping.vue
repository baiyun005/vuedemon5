<template>
    <div >
      <div id="mercont">
        <cube-scroll-nav
        :side="true"
        :data="tabs"
        :current="current"
        @change="changeHandler"
        @sticky-change="stickyChangeHandler">
       
        <cube-scroll-nav-panel
            v-for="(item,index) in tabs"
            :key="index"
            :label="item.id"
            :title="item.name">
            <div>
                <ul>
                    <li v-for="(food,index) in item.foods" :key="index" class="list">
                        <div class='foods-img'>
                            <img :src="'https://elm.cangdu.org/img/'+food.image_path">
                        </div>
                        <div class='menu_food'>
                            <div class='description_foodname'>{{food.name}}</div>
                            <div class='food_description'>{{food.description}}</div>
                            <div class="food_comment">{{food.tips}}</div>
                            <div class='menu-price'>
                                <p class='price'>￥{{food.specfoods[0].price}} 起</p>
                                <div v-if="!food.specifications.length>0">
                                    <p class="menu-radio">
                                        <!-- <cube-button class="btn" @click="add" >-</cube-button> -->
                                        <span v-if="food.num>0" @click="remove(food.specfoods[0].sku_id,food.restaurant_id,food.category_id,food.item_id,food.specfoods[0].name,food.specfoods[0].price,food.num)"><i class="cubeic-remove"></i></span> 
                                        <span v-if="food.num>0" class="cart_num">{{food.num}}</span>
                                        <span @click="add(food.specfoods[0].sku_id,food.restaurant_id,food.category_id,food.item_id,food.specfoods[0].name,food.specfoods[0].price,food.num)"><i class="cubeic-add"></i></span>
                                    </p>
                                </div>
                                <div v-else class="menu-choose">选规格</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </cube-scroll-nav-panel>
        </cube-scroll-nav>
      </div> 
      <template>
        <shopcart ></shopcart>
      </template>
    </div>    
</template>

<script>
import shopcart from './shopcart'
export default {
    data(){
        return{
            current:"热销榜"
        }
    },
    computed:{
        tabs(){
            return this.$store.state.shopping.shop
        }
    },
    components:{
      shopcart
    },
    methods: {
        changeHandler(label) {
            // console.log('changed to:', label)
            // this.current=label
        },
        stickyChangeHandler(current) {
            // console.log('sticky-change', current)
        },
        remove(a,b,c,d,e,f,g){
            const dataset={
                category_id:c,
                item_id:d,
                name:e,
                price:f,
                restaurant_id:b,
                sku_id:a,
                num:g
            }
            this.$store.commit('shopping/removecart',dataset)
        },
        add(a,b,c,d,e,f,g){
            const dataset={
                category_id:c,
                item_id:d,
                name:e,
                price:f,
                restaurant_id:b,
                sku_id:a,
                num:g
            }
            this.$store.commit('shopping/addcart',dataset)
        }
    },
    created(){
        // this.$store.dispatch('shopping/getdata') 
    }
}
</script>

<style>
    *{
      font-size: 0.38rem;
      box-sizing: border-box;  
    }
    #mercont{
      position: absolute;
      top: 2.9rem;
      left: 0;
      right: 0;
      bottom: 1rem;
    }
    
    .cube-scroll-nav-panel-title{
      font-size: 0.35rem;
      color: #666;
      font-weight: 700;
      padding: 0.4rem 0.2rem;
    }
    .cube-scroll-nav-bar-item{
      border-left:0.1rem solid transparent;
      padding: 20px 10px;
      font-size: 0.3rem;
      width: 2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: nowrap;
    }
     .cube-scroll-nav-bar-item_active{
       border-left:0.1rem solid #3190e8;
    }
    .heard{
        height:1rem;
        padding: 0.02rem;
        background-color: #535356;
    }
    .list{
      padding: 0 0.2rem 0.3rem 0.2rem;
      display: flex;
      justify-content: space-between;
    }
    .foods-img img{
        width: 1rem;
        height: 1rem;
        padding-right: 0.2rem;
    }
    
    .list .menu_food{
        width: 100%;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        justify-content: space-between;
        font-weight: 400;
    }
    .list .menu-price{
        display: flex;
        justify-content: space-between;
    }
    .description_foodname{
        color: #333;
        font-size: 0.35rem;
        font-weight: bold;
        padding-bottom: 0.2rem;
    }
    .food_description{
        font-size: 0.25rem;
        color: #999;
        padding-bottom: 0.2rem;
    }
    .food_comment{
        font-size:  0.25rem;
        padding-bottom: 0.2rem;
    }
    .price{
        color: #f60;
        font-size:  0.3rem;
    }
    .shop-bottom{
        position: fixed;
        bottom: 0;
        background-color: #333;
        color: white;
        font-size: 0.14rem;
        width: 100%;
        height:0.44rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    } 
    .menu-choose{
        
        display: block;
        font-size:  0.25rem;
        color: #fff;
        padding: 0.1rem 0.08rem;
        background-color: #3190e8;
        border-radius: 0.1rem;
        border: 1px solid #3190e8;
    }
    .cubeic-remove,.cubeic-add{
      font-size: 0.4rem;
      color: #3190e8;
    }
   
    .cart_num{
        font-size: 0.28rem;
        color: #666;
        text-align: center;
        padding:0 0.15rem;
    }
    .btn{
        width: 0.35rem;
        height: 0.35rem;
        border-radius: 50%;
        background-color: #fff;
        color: #3190e8;
    }
    /* 购物车部分 */
    .shopcart{
      /* position: fixed;
      bottom: 0;
      left:0;
      height: 1rem;
      width: 100%;
      background-color: #535356;
      text-decoration: none;
      z-index: 100;
      color: #fff;
      display: flex; */
    }
/* .cart{
  position: absolute;
  bottom: 88rpx;
  left:0;
  background-color: #333;
  color: white;
  width: 100%;
  transform: translateY(400rpx)
}
.setl{
  display: flex;
}
.cls{
  display: flex;
  justify-content: space-between;
} */
</style>