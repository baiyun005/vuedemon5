<template>
  <div >
      <shopheard></shopheard>
    <!-- <div class="shopbar"> -->
      <div class="shopbar" >
        <div class="tabshop" @click="tabs"  >
          <span :class="tab?'bosolid':''">商家</span>
        </div>
        <div class="tabshop"  @click="tabs2" >
          <span :class="tab?'':'bosolid'">评论</span>
        </div>
        <!-- <mershopping></mershopping> -->
      </div>
      <div v-if="tab">
        <mershopping ></mershopping>
      </div>
      <div v-else>
        <usereva ></usereva>
      </div>
    <!-- </div> -->
      
  </div>  
</template>

<script>
import mershopping from "./mershopping"
import usereva from "./usereva"
import shopheard from "./shopheard"
import bus from "../../bus"
export default {
 data(){
   return{
     tab:true
   }
 },
  components:{
    mershopping,
    usereva,
    shopheard 
  },
  methods:{
    tabs(){
      if(!this.tab){
        this.tab=true
      }
      console.log(1)
    },
    tabs2(){
      if(this.tab){
        this.tab=false
      }
    }
  },
  created(){

    this.$store.dispatch('shopping/geteva')
    this.$store.dispatch('shopping/getratings')
    this.$store.dispatch('shopping/score')
    this.$store.dispatch('shopping/getdata') 
     this.$store.dispatch('shopping/getheard') 
    // 获取router中的Id
    const id=this.$route.query.id
    this.$store.dispatch('shopping/getid',id) 
  }
}
</script>

<style>
*{
  line-height: none;
}
.shopbar{
  display: flex;
  padding: 0.2rem;
}
.tabshop{
  width: 50%;
  text-align: center;
  font-size: 0.35rem;
  color: #666;
}
.tabshop span{
  padding-bottom: 0.1rem;
}
.bosolid{
  border-bottom: 0.06rem solid #3190e8;
  color: #3190e8;
}

</style>
