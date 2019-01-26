import Vue from "vue"
import axios from "../../axios"
import router from "../../Router/router"
const vue = new Vue()
// http://elm.cangdu.org/shopping/restaurants
// http://elm.cangdu.org/shopping/restaurants?latitude=31.22299&longitude=121.36025&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=252&restaurant_category_ids[]=&order_by=&delivery_mode[]=
export default {
    namespaced: true,
    state: {
        // 发送请求数据
        data: {
            latitude: String, //经度
            longitude: String, //纬度
            offset: 0, //跳过多少条数据默认0
            limit: 20, //请求多少数据默认20条
            restaurant_category_id:239,//餐馆分类id
            order_by:4,//排序方式 默认为4智能排序
            delivery_mode:[1],//配送方式id
            support_ids:[]
        },
        shopList:[]
    },
    mutations: {
        changedata(state,data){
            state.data={...state.data,...data}
        }
    },
    // http://ele.kassing.cn/shopping/restaurants?latitude=31.22967&longitude=121.4762
    // 获取商家数据事件
    actions: {
        getShop({commit,state}){
            return new Promise((resolve,reject)=>{
                axios.get("/shopping/restaurants",{
                    params:{...state.data}
                }).then(res=>{
                    console.log(123)
                    console.log(res)
                    resolve(res.data)
                })
            })
        }
    }
}