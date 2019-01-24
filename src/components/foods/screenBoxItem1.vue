<template>
<!-- 餐馆分类 -->
  <div class="box_item1_wrapper">
    <ul class="er_items_box">
      <li>异国料理</li>
      <!-- class="selected_item" -->
      <router-link class="selected_item" tag="li" to="/item1lists?id=1">
        <span>异国料理</span>
        <span>
          <span>1183</span>
          <svg
            data-v-6cc1fce6
            width="8"
            height="8"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            class="category_arrow"
          >
            <path data-v-6cc1fce6 d="M0 0 L6 4 L0 8" stroke="#bbb" stroke-width="1" fill="none"></path>
          </svg>
        </span>
      </router-link>
      <router-link tag="li" to="/item1lists?id=2">
        <span>异国料理</span>
        <span>
          <span>1183</span>
          <svg
            data-v-6cc1fce6
            width="8"
            height="8"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            class="category_arrow"
          >
            <path data-v-6cc1fce6 d="M0 0 L6 4 L0 8" stroke="#bbb" stroke-width="1" fill="none"></path>
          </svg>
        </span>
      </router-link>
      <router-link tag="li" to="/item1lists?id=3">
        <span>异国料理</span>
        <span>
          <span>1183</span>
          <svg
            data-v-6cc1fce6
            width="8"
            height="8"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            class="category_arrow"
          >
            <path data-v-6cc1fce6 d="M0 0 L6 4 L0 8" stroke="#bbb" stroke-width="1" fill="none"></path>
          </svg>
        </span>
      </router-link>
      <router-link tag="li" to="/item1lists?id=4">
        <span>异国料理</span>
        <span>
          <span>1183</span>
          <svg
            data-v-6cc1fce6
            width="8"
            height="8"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            class="category_arrow"
          >
            <path data-v-6cc1fce6 d="M0 0 L6 4 L0 8" stroke="#bbb" stroke-width="1" fill="none"></path>
          </svg>
        </span>
      </router-link>
    </ul>
    <div class="item_lists">
      <transition-group tag="ul" name="list">
      <router-view></router-view>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
};
</script>

<style>
.box_item1_wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
}
/* 选择种类的样式 */
.screen_items_box {
  width: 100%;
  position: absolute;
  top: 37px;
  left: 0;
}
/* 二列表样式 */
.er_items_box {
  background-color: #f1f1f1;
  width: 50%;
}
.er_items_box li {
  width: 100%;
  display: flex;
  padding: 15px 10px;
  justify-content: space-between;
}
/* 点击选中的样式 */
.er_items_box .router-link-exact-active {
  background-color: white;
}
.er_items_box li span:nth-child(2) span {
  padding:0 5px;
  line-height: 17px;
  text-align: center;
  height: 17px;
  font-size: 12px;
  display: inline-block;
  background-color: #ccc;
  border-radius: 8.5px;
  color: white;
  margin-right: 5px;
}
.item_lists{
  width: 50%;
}
</style>
