<template>
    <div>
        <div class="top">
            <p><span>&lt;</span>修改密码</p>
        </div>
        <div class="user">
            <cube-input class="useript" v-model="value.username"
             :placeholder="ipt1"
            :type="usertype"></cube-input>
        </div>
        <div class="user">
            <cube-input class="useript" v-model="value.oldpassWord"
             :placeholder="ipt2"
             :eye="eye"
            :type="pwtype"></cube-input>
        </div>
        <div class="user">
            <cube-input class="useript" v-model="value.newpassword"
             :placeholder="ipt3"
             :eye="eye"
            :type="pwtype"></cube-input>
        </div>
        <div class="user">
            <cube-input class="useript" v-model="value.confirmpassword"
             :placeholder="ipt4"
             :eye="eye"
            :type="pwtype"></cube-input>
        </div>
        <div class="user yanzh">
            <cube-input class="useript" v-model="value.captcha_code"
             :placeholder="ipt5"
            :type="usertype"></cube-input>
             <img :src="url" alt="" width="100" height="40">
             <p  v-if="flagyan" class="huan" @click="agin">换一张</p>
        </div>
        <div class="loginbtn">
            <cube-button @click="login">确定</cube-button>
        </div>
    </div>
</template>

<script>
import axios from './../axios'
export default {
    data(){
        return{
            flag:true,
            value:{
                username:'',
                oldpassWord:'',
                newpassword:'',
                confirmpassword:'',
                captcha_code:''
            },
            url:'',
            oldpw:'',
            ipt1:'账号',
            ipt2:'旧密码',
            ipt3:'请输入新密码',
            ipt4:'请确定密码',
            ipt5:'验证码',
            usertype:'text',
            pwtype:'password',
            eye: {
                open: false,
                reverse: false
            },
            flagyan:false,
        }

    },
    methods:{
        login(){
            
            axios.post('/v2/changepassword',this.value).then(res =>{
                    console.log(res)
                    if(res.data.status==1){
                        localStorage.setItem("user",this.value.username)
                        localStorage.setItem("pw",this.value.newpassword)
                        this.toast = this.$createToast({
                            txt: res.data.success,
                            type: 'txt'
                        })
                        this.toast.show()
                        this.$router.push('/Index')
                    }else{
                        this.toast = this.$createToast({
                            txt: res.data.message,
                            type: 'txt'
                        })
                        this.toast.show()
                    }
                })
        },
        agin(){
            this.url='',
           axios.post('/v1/captchas').then(res =>{
            console.log(res)
            const resl =res.data.code
            let arr=resl.split(',')[1]
            let cc=setTimeout(()=>{
                this.url=resl
                this.flagyan=true
            },3000)
        }) 
        }
    },
    created(){
        this.value.username=localStorage.getItem("user")
        this.oldpw=localStorage.getItem("pw")
        axios.post('/v1/captchas').then(res =>{
            console.log(res)
            const resl =res.data.code
            let arr=resl.split(',')[1]
            let cc=setTimeout(()=>{
                this.url=resl
                this.flagyan=true
            },3000)
        })

    }
}
</script>
<style scoped>
     .top{
        display: flex;
        justify-content: space-between;
        background-color: #3190e8;
        height:0.88rem;
        width: 100%;
        margin-bottom: 0.3rem;
        text-align: center;
        line-height: 0.88rem;
        font-size: 0.30rem;
        color:#fff;
    }
    .top span{
        padding: 0 0.4rem;
    }
    .user{
        padding: 0.1rem 0;
    }
    .yanzh{
        display: flex;
        align-items: center;

    }
    .yanzh p{
        font-size: 0.3rem;
        margin-left: 0.5rem;
    }
</style>
