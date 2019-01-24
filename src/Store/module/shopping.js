import Vue from "vue"
import axios from 'axios'
import router from "../../Router/router"
const vue = new Vue()
export default {
    namespaced:true,
    state:{
        shop:[],
        heard:null,
        eva:[],
        ratings:[],
        type:1,
        cart:[],
        total:0.00,
        page:0,
        score:null
    },
    mutations:{
        setdata(state,data){
            state.shop=data
        },
        addcart(state,dataset){
            //对应数据num加1
            state.shop.forEach(i => {
                i.foods.forEach(s=>{
                    if(s.specfoods[0].item_id===dataset.item_id){
                        s.num++
                    }
                })
            });
            console.log(state.shop)
            //购物车存数据
            const item_id=dataset.item_id
            const item=state.cart.find(i=>(i.item_id===item_id))
            if(!item){
                state.cart=[...state.cart,dataset]
                console.log("不存在")
            }else{
                item.num=item.num+1
                state.cart=[...state.cart]
                console.log("存在   +1")
            }  
            console.log(state.cart)

            // 计算总价
            state.cart.forEach(i=>{
                state.total=i.num*i.price
            })
            
        },
        removecart(state,dataset){
             //对应数据num减1
            state.shop.forEach(i => {
                i.foods.forEach(s=>{
                    if(s.specfoods[0].item_id===dataset.item_id){
                        if(s.num<0){
                            s.num=0 
                        }else{
                            s.num--
                        }
                    }
                })
            });
             //减去购物车数据
            const item_id=dataset.item_id
            state.cart.forEach(i=>{
                if(i.item_id===item_id){
                    if(i.num<0){
                        i.num=0 
                    }else{
                        i.num--
                    }
                }
            })
            console.log(state.cart)

            // 计算总价
            state.cart.forEach(i=>{
                if(state.total<0){
                    state.total=0
                }else{
                    state.total=i.num*i.price
                }
            })
        },
        setheard(state,data){
            state.heard=data
            console.log(state.heard)
        },
        seteva(state,data){
            state.eva=data
        },
        setratings(state,data){
            state.ratings=[...state.ratings,...data]
            console.log(state.ratings)
        },
        setpage(state,page){
            state.page=page
            console.log(page)
        },
        setscore(state,data){
            state.score=data
            
        }
    },
    actions:{
        getdata({commit,state}){
            return new Promise((resolve,reject)=>{
              axios.get('http://elm.cangdu.org/shopping/v2/menu?restaurant_id='+state.type).then(res=>{
                console.log(res.data)
                res.data.forEach(i => {
                    i.foods.forEach(s=>{
                        s.num = Number(0)
                    })
                });
                // res.data.splice(7,8)
                commit("setdata",res.data)
                resolve()
              })
            })
        },
        getheard({commit,state}){
            return new Promise((resolve,reject)=>{
                axios.get('http://elm.cangdu.org/shopping/restaurant/'+state.type).then(res=>{
                    console.log(res.data) 
                    commit("setheard",res.data)
                    resolve()
                })
            })
        },
        // 评论1
        geteva({commit,state}){
            return new Promise((resolve,reject)=>{
                axios.get('http://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags').then(res=>{
                    console.log(res.data) 
                    commit("seteva",res.data)
                    resolve()
                })
            })
        },
        getratings({commit,state},page){
            return new Promise((resolve,reject)=>{
                axios.get('http://elm.cangdu.org/ugc/v2/restaurants/1/ratings?has_content=true&offset='+state.page).then(res=>{
                    console.log(res.data) 
                    commit("setratings",res.data)
                    resolve()
                })
            })
        },
        score({commit,state}){
            return new Promise((resolve,reject)=>{
                axios.get('http://elm.cangdu.org/ugc/v2/restaurants/1/ratings/scores').then(res=>{
                    console.log(res.data)
                    commit("setscore",res.data)
                    resolve()
                })
            })
        }
    }
}