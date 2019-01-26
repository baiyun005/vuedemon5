import Vue from "vue"
import axios from "axios"
import router from "../../Router/router"
const vue = new Vue()
export default {
    namespaced:true,
    state:{
        title:"",
        nav:[],
        con:[],
        articles:[]
    },
    mutations:{
        getTitle(state,title){
            state.title=title
        },
        getNav(state,nav){
            const arr =[];
            for(let i=0;i<nav.length;i+=8){
                arr.push(nav.slice(i,i+8))
            }
            state.nav=arr
        },
        getCon(state,con){
            state.con=con
        },
        getCons(state,cons){
            state.con=[...state.con,...cons]
        }
    },
    actions:{
        getTitle({commit},geohash){
            return new Promise((resolve,reject)=>{
              axios.get("http://ele.kassing.cn/v2/pois/"+geohash).then(res=>{
                  commit("getTitle",res.data.name)
              })
            })
          },
        getNav({commit},geohash){
            return new Promise((resolve,reject)=>{
                axios.get("http://elm.cangdu.org/v2/index_entry?geohash="+geohash).then(res=>{
                if(res.status===200){
                    commit("getNav",res.data)
                    resolve()
                }
            })
            })
        },
        getCon({commit},geohash){
            console.log(geohash)
            return new Promise((resolve,reject)=>{
                axios.get("http://elm.cangdu.org/shopping/restaurants",{
                    params:{
                        latitude:geohash[0],
                        longitude:geohash[1]
                    }
                }).then(res=>{
                    if(res.status===200){
                        commit("getCon",res.data)
                        resolve()
                    }
                })
            })
        },
        getCons({commit},{page,geohash}){
            console.log(page)
            return new Promise((resolve,reject)=>{
                axios.get("http://elm.cangdu.org/shopping/restaurants",{
                    params:{
                        latitude:geohash[0],
                        longitude:geohash[1],
                        offset:(page-1)*20
                    }
                }).then(res=>{
                    if(res.status===200){
                        commit("getCons",res.data)
                        resolve()
                    }
                })
            })
        }
    }
}