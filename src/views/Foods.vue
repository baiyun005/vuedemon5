<template>
  <div class="foods_box">
    <common>甜品餐饮</common>
    <header class="screen_box">
      <ul class="screen_list">
        <li>甜品饮品
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
        <li>排序
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
        <li>筛选
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
        <li>
          <screen-box-item1></screen-box-item1>
        </li>
        <li>
           <screen-box-item2></screen-box-item2>
        </li>
      </ul>
    </header>
    <!-- <section>
      <ul class="shop_list">
        <li>
          <img src="" alt="">
          <div>
            <div>
            <p><span>品牌</span> <span>效果演示</span></p>
            <p><span>保</span><span>准</span><span>票</span></p>
            </div>
            <div>
              <p><span>星星</span> <span>4.7</span><span>月销<span>106笔</span></span></p>
              <p> <span> 蜂鸟转送</span><span>准时达</span></p>
            </div>
            <div>
              <p>￥<span>20</span>起送/配送费余额<span>5</span></p>
              <p><span>1383</span>公里/ <span>14时45分钟</span></p>
            </div>
          </div>
        </li>

      </ul>

    </section>-->
  </div>
</template>

<script>
import axios from "../axios";
import common from "../components/common/common";
import screenBoxItem1 from "../components/foods/screenBoxItem1";
import screenBoxItem2 from "../components/foods/screenBoxItem2";
export default {
  data() {
    return {};
  },
  components: {
    common,screenBoxItem1,screenBoxItem2
  },
  computed: {}
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
.screen_list li {
  width: 100%;
  text-align: center;
  border-right: 1px solid #eee;
}


</style>
