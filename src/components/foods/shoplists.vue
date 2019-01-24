<template>
  <div class="contain">
    <div class="list">
      <img src="//elm.cangdu.org/img/164ad0b6a3917599.jpg" alt>
      <div class="right">
        <div class="right-top right-flex">
          <div class="top-title">
            <span class="brand">品牌</span>
            <span class="name">效果演示</span>
          </div>
          <div class="top-bao">保准票</div>
        </div>
        <div class="right-center right-flex">
          <div>
            <div class="center-star">
              <!-- <img src="../../../public/img/star2.png" alt> -->
              <div class="star" style="0.4"></div>
            </div>
            <span class="rate">5</span>
            <span class="all">月售5单</span>
          </div>
          <div>
            <span class="kuaidi">蜂鸟专送</span>
            <span class="zhun">准时达</span>
          </div>
        </div>
        <div class="right-bottom right-flex">
          <div class="money">
            <span>￥20元起/</span>
            <span>配送费约￥5</span>
          </div>
          <div>
            <span class="kilo">1398公里</span>
            <span class="time">14时54分</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: none;
  font-size: 0.24px;
}
.list {
  padding: 0 0.2rem;
  margin-top: 0.2rem;
  display: flex;
}
.list .right-top {
  margin-bottom: 0.26rem;
}
.list > img {
  width: 1.26rem;
  height: 1.26rem;
  margin-right: 10px;
  flex-shrink: 0;
}
.list .right {
  width: 100%;
}
.list .right-flex {
  display: flex;
  justify-content: space-between;
}
.list .right .brand {
  background-color: #ffd930;
  font-size: 0.24rem;
  padding: 1px 3px;
  border-radius: 5px;
  margin-right: 5px;
}
.list .right .name {
  font-size: 0.28rem;
  font-weight: bold;
}
.list .right .top-bao {
  font-size: 0.24rem;
  color: #999;
}
.center-star {
  display: inline-block;
  margin-right: 5px;
  position: relative;
  height: 0.18rem;
  width: 1rem;
}
.center-star > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 1rem;
  height: 0.18rem;
}
.right-center {
  margin-bottom: 0.26rem;
}
.right-center .rate {
  font-size: 0.24rem;
  color: orange;
  margin-right: 5px;
}
.right-center .all {
  font-size: 0.24rem;
  color: #999;
}
.right-center .kuaidi {
  font-size: 0.2rem;
  color: #fff;
  background-color: #3190e8;
  margin-right: 3px;
}
.right-center .zhun {
  font-size: 0.2rem;
  color: #666;
}
.right-bottom .money {
  font-size: 0.2rem;
  color: #999;
}
.right-bottom .kilo {
  font-size: 0.2rem;
  color: #999;
  margin-top: 10px;
}
.right-bottom .time {
  font-size: 0.2rem;
  color: #3190e8;
}
</style>
