<template>
  <div>
    <ul class="box_item2_wrapper">
      <li :class="inde==1?'selected_order':''" @click="setdata(1)">只能排序</li>
      <li :class="inde==2?'selected_order':''" @click="setdata(2)">只能排序</li>
      <li :class="inde==3?'selected_order':''" @click="setdata(3)">只能排序</li>
      <li :class="inde==4?'selected_order':''" @click="setdata(4)">只能排序</li>
      <li :class="inde==5?'selected_order':''" @click="setdata(5)">只能排序</li>
    </ul>
    
  </div>
</template>

<script>
import bus from "../../bus"
export default {
  data(){
    return {
      inde:1
    }
  },
  methods:{
    // 传递排序方式
    setdata(index){
      this.inde=index
      const data={
        order_by:index
      }
      bus.$emit("changedata",data)
    }
  }
}
</script>

<style>
  .box_item2_wrapper{
    background-color: white;
    padding: 10px;
  }
  .box_item2_wrapper li{
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  /* 选中的样式改变 */
  .selected_order{
    color : #abcdef;
  }
  .box_item2_wrapper li:last-child{
    border:none;
  }
</style>
