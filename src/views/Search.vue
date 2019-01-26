<template>
  <div class="bg-color">
    <common class="top">
      <div class="top-one">
        <router-link class="router" :to="'./Position'">
          <van-icon name="arrow-left" class="arrow-left"/>
        </router-link>
        <span class="city">上海</span>
        <router-link tag="span" class="change-city" :to="'./Position'">切换城市</router-link>
      </div>
    </common>
    <form action=""  class="city-form">
      <div>
        <cube-input placeholder="输入学校、商务楼、地址" v-model="value" class="city-input">提交</cube-input>
      </div>
      <div>
        <cube-button @click="changeValue"  class="city-submit">提交</cube-button>
      </div>
    </form>
    <ul class="inputValList">
      <router-link tag="li" :to="{path:'/Index',query:{geohash:item.geohash}}" @click="changeTab(index)"  class="pois-name lis" v-for="(item, index) in list" :key="index">
        <p class="pois-name-a">{{item.name}}</p>
        <p class="pois-name-b">{{addr}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>

import common from '../components/common/common'
import router from '../Router/router'
import axios from '../axios'

export default {
  data(){
    return{
      value:'',
      list: [],
      addr:'',
      keyword:'',
      city_id: 1,
    }
  },
  methods:{
    changeValue () {
      // this.list.push(this.value)
      // console.log(this.value)
      axios.get('/v1/pois?city_id=1$&keyword='+this.value).then(resault => {
        // console.log(resault)
        // console.log(resault.data)
        // console.log(resault.data[0])
        // console.log(resault.data[0].address)
        // console.log(resault.data[0].geohash)
        // this.location = resault.data[0].geohash
        this.list = resault.data 
        if(this.value == ''){
          console.log('')
        } else {
          this.addr = resault.data[0].address  //地址的详细信息
        }
        // console.log(this.list)
        // console.log(this.addr)
        // console.log(this.location)
      })
    },
    changeTab (index) {
      // console.log(this.list[index])
      axios.get('/v2/pois/' + this.list[index].geohash).then(res => {
        // console.log(res)
        localStorage.setItem('city',JSON.stringify(res.data))
        // this.$router.push('/')
      })
    }
  },
  // created(){
  //     axios.get('/v1/pois?city_id=1&keyword='+this.value).then(resault => {
  //       // console.log(resault)
  //       // console.log(resault.data)
  //     console.log(resault.data)
  //       this.list=resault.data
  //     console.log(this.list)
  //   })
  // },
  components: {
    common
  }
}
</script>

<style scoped>
  .bg-color{
    background: #f5f5f5;
  }
  .top-one{
    display:flex;
    justify-content:space-between;
    height:0.9rem;
    font-size: 0.3rem
  }
  .top-one .router .arrow-left{
    color: #fff;
    line-height: 0.9rem;
    font-size: 0.4rem;
    text-indent: 0.07rem;
  }
  .top-one .city{
    font-weight:700;
    font-size: 0.5rem;
  }
  .top-one .change-city{
    margin-right: 0.2rem;
  }
  .city-form{
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-top: 0.2rem;
    margin-top: 0.4rem;
  }
  
  .city-form div .city-input,.city-submit{
    width:90%;
    margin: 0 auto;
  }
  .city-form div .city-input{
    border: 1px solid #e4e4e4;
    color:#333;
    font-size:0.25rem;
    margin-bottom:0.25rem; 
  }
  .city-form div .city-submit{
    margin-bottom:0.3rem; 
    background: #3190e8;
    height: 0.3rem;
    font-size:0.3rem;
    line-height: 0rem;
  }
  .inputValList {
    border-top: 1px solid #e4e4e4;
    margin: 0 auto;
    background:#fff;
    font-size: 0.25rem;
  }
  .inputValList  .lis{
    padding-top: 0.4rem ;
    background:#fff;
    height: 0.9rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }
  .pois-name .pois-name-a{
    font-size: 0.35rem;
    font-weight:400;
    width:90%;
    margin: 0 auto 0.2rem ;
  }
  .pois-name .pois-name-b{
    /* font-size: 0.35rem; */

    font-weight:400;
    width:90%;
    margin: 0 auto 0.3rem ;
    color: #999;
  }
</style>
