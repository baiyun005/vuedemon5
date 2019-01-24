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
      <ul class="screen_items_box">
        <li v-if="screenFlag&&screenIndex==0">
          <screen-box-item1></screen-box-item1>
        </li>
        <li v-if="screenFlag&&screenIndex==1">
          <screen-box-item2></screen-box-item2>
        </li>
        <li v-if="screenFlag&&screenIndex==2">
          <screen-box-item3></screen-box-item3>
        </li>
      </ul>
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
      screenIndex:0
    };
  },
  created(){
    this.getShop();
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
    getIndex(index){
      if(this.screenIndex==index&&this.screenFlag){
        this.screenFlag=false
      }else{
        this.screenIndex=index
        this.screenFlag=true
      }
    },
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

</style>
