import Vue from "vue"
import axios from 'axios'
import router from "../../Router/router"
const vue = new Vue()
export default {
    namespaced:true,
    state:{
        shop:[],
        heard:'',
        eva:[],
        ratings:[],
        type:1,
        cart:[],
        total:0.00,
        page:0,
        score:null,
        id:1
    },
    mutations:{
        setdata(state,data){
            state.shop=data
        },
        addcart(state,dataset){
            localStorage.setItem("buycart",dataset)
            //对应数据num加1
            state.shop.forEach(i => {
                i.foods.forEach(s=>{
                    if(s.specfoods[0].sku_id===dataset.sku_id){
                        s.num++
                    }
                })
            });
            // console.log(state.shop)
            //购物车存数据
            const sku_id=dataset.sku_id
            const item=state.cart.find(i=>(i.sku_id===sku_id))
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
            if(state.total>0){
                state.total=0
                state.cart.forEach(i=>{
                    state.total+=i.num*i.price
                })
            }else{
                state.cart.forEach(i=>{
                    state.total=i.num*i.price
                })
            }
            
            
        },
        removecart(state,dataset){
             //对应数据num减1
            state.shop.forEach(i => {
                i.foods.forEach(s=>{
                    if(s.specfoods[0].sku_id===dataset.sku_id){
                        if(s.num<0){
                            s.num=0 
                        }else{
                            s.num--
                        }
                    }
                })
            });
             //减去购物车数据
            const sku_id=dataset.sku_id
            state.cart.forEach(i=>{
                if(i.sku_id===sku_id){
                    if(i.num>0){
                        i.num--
                    }else{
                        i.num=0 
                    }
                }
            })
            console.log(state.cart)

            // 计算总价
            if(state.total>0){
                state.total=0
                state.cart.forEach(i=>{
                    state.total+=i.num*i.price
                })
            }
            // 判断num是否为0 
            const carts=state.cart.filter(i=>(i.num>0))
            state.cart=carts 
            console.log(state.cart)
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
        },
        getid(state,id){
            state.id=id
        }
    },
    actions:{
        getdata({commit,state},id){
            return new Promise((resolve,reject)=>{
              axios.get('http://elm.cangdu.org/shopping/v2/menu?restaurant_id='+state.id).then(res=>{
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
                axios.get('http://elm.cangdu.org/shopping/restaurant/'+state.id).then(res=>{
                    console.log(res.data) 
                    commit("setheard",res.data)
                    resolve()
                })
            })
        },
        // 评论1
        geteva({commit,state}){
            return new Promise((resolve,reject)=>{
                axios.get('http://elm.cangdu.org/ugc/v2/restaurants/'+state.id+'/ratings/tags').then(res=>{
                    console.log(res.data) 
                    commit("seteva",res.data)
                    resolve()
                })
            })
        },
        getratings({commit,state},page){
            return new Promise((resolve,reject)=>{
                axios.get('http://elm.cangdu.org/ugc/v2/restaurants/'+state.id+'/ratings?has_content=true&offset='+state.page+'&limit=10&tag_name=').then(res=>{
                    console.log(res.data) 
                    commit("setratings",res.data)
                    resolve()
                })
            })
        },
        score({commit,state}){
            return new Promise((resolve,reject)=>{
                axios.get('http://elm.cangdu.org/ugc/v2/restaurants/'+state.id+'/ratings/scores').then(res=>{
                    console.log(res.data)
                    commit("setscore",res.data)
                    resolve()
                })
            })
        }
    }
}