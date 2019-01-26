<template>
  <div class="bg-box">
    <div class="bg-box-a"> 
      <common class="city_tip">
        <span @click="reload">ele.me</span>
        <router-link to='/login'>登陆|注册</router-link>
      </common>
      <div class="city_nav">
        <div class="poscity">
          <span>当前定位城市:</span>
          <span>定位不准时，请在城市列表中选择</span>
        </div>
          <router-link :to="'/Search/'+guessCity.id" class="right-arrow">
            <span class="ra-city">{{guessCity.name}}</span>
            <van-icon name="arrow" class="arrow"/>
          </router-link>
      </div>
    </div>
      <section class="hot-city-container">
          <p class="hot-city">热门城市</p>
          <ul class="citylistul">
            <router-link tag="li" :to="'/Search/'+item.id" class="text" v-for="(item,index) in hotCity" :key="index">{{item.name}}</router-link>
          </ul>
      </section>
      <div tag="div" class="group-city-container" v-for="item in groupCity" :key="item[0]">
        <div class="city-item-cities">
          <p class="cities">
            {{item[0]}}
          </p>
          <router-link class="text text-other" v-for="city in item[1]" :to="'/Search/'+city.id" :key="city.id">{{city.name}}</router-link>
        </div>
      </div>
  </div>
</template>

<script>
import common from '../components/common/common'
import router from '../Router/router'
import axios from '../axios' 

export default {
  data () {
    return  {
      guessCity : '',
      hotCity: [],
      groupCity: [],
      cities: null
    }
  },
  components: {
    common
  },
  methods:{
      //点击图标刷新页面
      reload () {
        window.location.reload()
      },
      getCity(type){
        axios.get('/v1/cities?type='+type).then(result => {
          // console.log(result)  //得到的是所有城市列表的信息
          if(type == "guess"){
            this.guessCity = result.data
            // console.log(this.guessCity)
          }else if(type == "hot"){
            this.hotCity = result.data
            // console.log(this.hotCity)
          }else if (type == 'group'){
            this.groupCity = this.formatCities(result.data);
            // console.log(this.groupCity)
          }
        })
      },
      // a-z字母的排序
        formatCities(cities) {
          const arr = []
          for (let key in cities) {
            arr.push([key, cities[key]])
          }
          return arr.sort((a, b) => {
            if (a[0] > b[0]) {
              return 1
            }

            if (a[0] < b[0]) {
              return -1
            }
          })
        },
    },
    created (){
      this.getCity("guess")
      this.getCity('hot')
      this.getCity('group')
    }
}
</script>

<style scoped>
    .bg-box{
      background-color:#f5f5f5;
    }
    .bg-box-a{
    background:#fff;
    }
    .city_nav{
      padding-top: 0.12rem;
    }
    .city_tip span{
      color:#fff;
      float: left;
      margin-left:0.3rem;
    }
    .city_tip a{
      color:#fff;
      font-size: 0.3rem;
      float: right;
      margin-right:0.3rem;
    }
    .city_tip span{
      font-weight: 400;
      font-size: 0.35rem;
      color: #fff;
    }

    .poscity{
      font-size:0.3rem;
      display: flex;
      justify-content: space-between;
      line-height: 0.8rem;
      padding: 0 0.2rem;
    }
    .poscity span:first-child{
      color: #666;
      font-size:0.25rem;
    }
    .poscity span:last-child{ 
      font-weight: 900;
      color: #9f9f9f;
      font-size:0.2rem;
    }
    .right-arrow{
      border-top: 1px solid #e4e4e4;
      border-bottom: 2px solid #e4e4e4;
      height:0.9rem;
      display:flex;
      justify-content: space-between;
      padding: 0 0.2rem;
      margin-bottom:0.2rem;
    }
    .right-arrow .ra-city{
      color:#3190e8;
      font-size: 0.4rem;
      line-height: 0.9rem;
    }
    .right-arrow .arrow{
      font-size: 0.4rem;
      line-height: 0.9rem;
    }
    .hot-city-container{
      background: #fff;
    }
    .hot-city-container .hot-city{
      height: 0.6rem;
      line-height: 0.6rem;
      font-size:0.28rem;
      color:#666;
      text-indent: 0.2rem;
      font-weight: 400;
      border-top: 2px solid #e4e4e4;
      border-bottom: 1px solid #e4e4e4;
    }
    .hot-city-container .citylistul,.city-item-cities{
      display: flex;
      flex-wrap:wrap;
    }
    .citylistul .text, .city-item-cities .text{
      width:25%;
      height: 0.8rem;
      line-height: 0.8rem;
      color:#3190e8;
      border-left:none; 
      box-sizing:border-box;
      font-size: 0.29rem;
      text-align: center;
      border: 1px solid #e4e4e4;
      border-top:none;
      border-left:none;
      border-bottom: 1px solid #e4e4e4;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .city-item-cities .text-other{
      color: #666;
    }
    .citylistul .text:nth-child(4n){
      border-right: none;
    }
    .group-city-container{
      background-color:#fff;
      margin-top:0.2rem;
    }
    .cities{
      height: 0.6rem;
      width:100%;
      line-height: 0.6rem;
      font-size: 0.28rem;
      color: #666;
      text-indent: 0.2rem;
      font-weight: 400;
      border-bottom: 1px solid #e4e4e4;
      border-top: 2px solid #e4e4e4;
    }
    .cities span {
      font-size: 0.2rem;
    }
</style>
