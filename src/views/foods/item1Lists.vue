<template>
  <ul class="item1_lists_wraper">
    <li>水果</li>
    <li>生鲜</li>
    <li>{{itemIndex}}</li>
  </ul>
</template>

<script>
export default {
  dat(){
    return {
      itemIndex:Number
    }
  },
  computed:{  },
  watch:{
    "$router"(){
      this.itemIndex=this.$route.query.id
    }
  }
};
</script>

<style>
.item1_lists_wraper {
  padding: 0 10px;
}
.item1_lists_wraper li{
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.item1_lists_wraper li:last-child{
  border:none;
}
</style>
