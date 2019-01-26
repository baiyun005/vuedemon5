import Vue from "vue"
import axios from "axios"
import router from "../../Router/router"
const vue = new Vue()
export default {
    namespaced:true,
    state:{
        nav:[],
        con:[],
        articles:[]
    },
    mutations:{
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
            // console.log(cons)
            state.con=[...state.con,...cons]
            console.log(state.con)
        }
    },
    actions:{
        getNav({commit}){
            return new Promise((resolve,reject)=>{
                axios.get("http://elm.cangdu.org/v2/index_entry?geohash=34.8022,113.54414").then(res=>{
                if(res.status===200){
                    commit("getNav",res.data)
                    resolve()
                }
            })
            })
        },
        getCon({commit}){
            return new Promise((resolve,reject)=>{
                axios.get("http://elm.cangdu.org/shopping/restaurants?latitude=34.671833&longitude=113.712311").then(res=>{
                    if(res.status===200){
                        commit("getCon",res.data)
                        resolve()
                    }
                })
            })
        },
        getCons({commit},page){
            console.log(page)
            return new Promise((resolve,reject)=>{
                axios.get("http://elm.cangdu.org/shopping/restaurants?latitude=34.671833&longitude=113.712311",{
                    params:{
                        page
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