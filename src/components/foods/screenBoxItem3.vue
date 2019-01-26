<template>
  <div class="box_item3_wrapper">
    <div>
      <p>配送方式</p>
      <ul class="lists_box">
        <li>蜂鸟转送</li>
        <li>蜂鸟转送</li>
        <li>蜂鸟转送</li>
        <li>蜂鸟转送</li>
      </ul>
      <p>商家属性(可以多选)</p>
      <ul class="lists_box">
        <li>品牌商家</li>
        <li>品牌商家</li>
        <li>品牌商家</li>
        <li>品牌商家</li>
        <li>品牌商家</li>
      </ul>
      <div class="handle_box">
        <van-button type="default">清空</van-button>
        <van-button type="primary">确定</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {}
    };
  }
};
</script>

<style>
.box_item3_wrapper {
  background-color: white;
  padding: 10px;
}
.lists_box {
  display: flex;
  margin: 20px 0 20px 0;
  font-size: 14px;
  flex-wrap: wrap;
  /* justify-content: space-around; */
}
.lists_box li {
  margin-right: 10px;
  width: 30%;
  border: 1px solid #eee;
  border-radius: 10px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 10px;
}
.lists_box li:nth-child(3n) {
  margin-right: 0;
}
.handle_box{
  display: flex;
  justify-content: space-between;
}
.handle_box .van-button{
  width: 45%
}

</style>
