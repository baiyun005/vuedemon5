<template>
    <div class="shopname" >
      <!-- <template  v-for="item in heard" :key="item.id"> -->
       <div class="description_left" >
         <img :src="'//elm.cangdu.org/img/'+heards.image_path">
         <!-- <div>{{item.name}}</div> -->
       </div>
       <div class="description_right">
         <div>{{heards.name}}</div>
         <div>
           商家配送／分钟送达／{{heards.piecewise_agent_fee.tips}}
         </div>
         <div>
           公告:{{heards.promotion_info}}
         </div>
       </div>
      <!-- </template>  -->
    </div>
</template>

<script>
export default {
  computed:{
    heards(){
       return this.$store.state.shopping.heard
    }
  },
  created(){
    // this.$store.dispatch('shopping/getheard') 
  }
}
</script>

<style>
div{
  line-height: none;
}
.shopname{
  display: flex;
  padding: 0.2rem;
  background-color: rgba(119,103,137,.43);
}
.description_left img{
  width: 1.5rem;
  height: 1.5rem;
}
.description_right{
  font-size: 0.35rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  margin-left:0.2rem;
}
.description_right div:nth-child(1){
  font-weight: 700;
}
.description_right div:nth-child(2){
  font-size: 0.28rem;
}
.description_right div:nth-child(3){
  font-size: 0.28rem;
}
</style>
