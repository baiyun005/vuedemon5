<template>
  <div class="foods_box">
    <common>
      甜品饮品
    </common>
    <header class="screen_box">
      <ul class="screen_list">
        <li class="selected_color" :class="(this.screenIndex==0&&this.screenFlag)?'selected_item':''"  @click="getIndex(0)">
          甜品饮品
          <svg
            data-v-6cc1fce6
            width="10"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            class="sort_icon"
          >
            <polygon data-v-6cc1fce6 points="0,3 10,3 5,8"></polygon>
          </svg>
        </li>
        <li @click="getIndex(1)" :class="(this.screenIndex==1&&this.screenFlag)?'selected_item':''">
          排序
          <svg
            data-v-6cc1fce6
            width="10"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            class="sort_icon"
          >
            <polygon data-v-6cc1fce6 points="0,3 10,3 5,8"></polygon>
          </svg>
        </li>
        <li @click="getIndex(2)" :class="(this.screenIndex==2&&this.screenFlag)?'selected_item':''">
          筛选
          <svg
            data-v-6cc1fce6
            width="10"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            class="sort_icon"
          >
            <polygon data-v-6cc1fce6 points="0,3 10,3 5,8"></polygon>
          </svg>
        </li>
      </ul>
      <keep-alive >
        <transition name="component-fade"  appear >
        <component class="screen_items_box" :is="modName"></component>
        </transition>
      </keep-alive>
    </header>
    <div class="shop_box">
      <shoplists></shoplists>
    </div>
  </div>
</template>

<script>
import axios from "../axios";
import common from "../components/common/common";
import screenBoxItem1 from "../components/foods/screenBoxItem1";
import screenBoxItem2 from "../components/foods/screenBoxItem2";
import screenBoxItem3 from "../components/foods/screenBoxItem3";
import shoplists from "../components/foods/shoplists";
import bus from "../bus"
export default {
  data() {
    return {
      screenFlag:false,
      screenIndex:0,
      modName:"",
      modNameLists:["screenBoxItem1","screenBoxItem2","screenBoxItem3"]
    };
  },
  created(){
    this.getShop();
  //  设置Foods中的参数
    bus.$on("changedata",(data)=>{this.setData(data)})
  },
  components: {
    common,
    screenBoxItem1,
    screenBoxItem2,
    screenBoxItem3,
    shoplists
  },
  computed: {

  },
  methods:{
    // 获取对应的下下标对应的模块出现
    getIndex(index){
      if(this.screenIndex==index&&this.screenFlag){
        this.screenFlag=false,
        this.modName=""
      }else{
        this.screenIndex=index
        this.screenFlag=true
        this.modName=this.modNameLists[index];
      }
    },
    // 获取商铺数据
    getShop(){
      this.$store.dispatch("menu/getShop")
    },
    // 设置data中的参数   同时隐藏
    setData(data){
      console.log()
      console.log(data);
      this.screenFlag=false;
      // this.$store.commit("menu/changedata",data)
    }
  }
};
</script>

<style scoped>
.foods_box {
  font-size: 16px;
}
.screen_box {
  position: relative;
}
.screen_list {
  padding: 10px;
  display: flex;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
}
.selected_item{
  color: #abcdef;
}
.screen_list li {
  width: 100%;
  text-align: center;
  border-right: 1px solid #eee;
}
.screen_items_box{
  width: 100%;
  position: absolute;
  top: 44px;
  left: 0;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.5s ease;
}

.component-fade-enter,.component-fade-leave-to {
  opacity: 0;
}
</style>
