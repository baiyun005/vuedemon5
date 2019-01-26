<template>
  <ul class="item1_lists_wraper">
    <router-link tag="li" to="/">水果</router-link>
    <li>生鲜</li>
    <li>{{this.$route.query.id}}</li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      itemIndex:0
    }
  },
  computed:{  },
  watch:{
    "$route"(){
      this.itemIndex=this.$route.query.id;
      console.log(this.itemIndex);
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
