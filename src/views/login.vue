<template>
    <div class="loginbox">
        <div class="top">
            <p><span>&lt;</span>密码登录</p>
        </div>
        <div class="user">
            <cube-input class="useript" v-model="value.username"
             :placeholder="userplaceholder"
            :type="usertype"
            :clearable="clearable"
             v-on:input="vueTouch"></cube-input>
        </div>
        <div class="pw">
            <cube-input class="pwipt" v-model="value.password"
            :placeholder="pwplaceholder"
            :type="pwtype"
            v-on:input="vueTouch1"
            :eye="eye"
            ></cube-input>
        </div>
        <div class="captcha">
            <cube-input class="captchaipt" v-model="value.captcha_code"
            :placeholder="captchaplaceholder"
            :type="captchatype"
            :maxlength="maxlength"
            ></cube-input>
            <img :src="url" alt="" width="250" height="40">
            <p  v-if="flagyan" class="huan" @click="agin">换一张</p>
            <cube-button v-if="flag" class="act" @click="yanzheng">{{flag1false}}</cube-button>
            <cube-button v-else>{{flag1false}}</cube-button>
        </div>
        <div class="loginbtn">
            <cube-button @click="login">登录</cube-button>
        </div>
        <div class="changepw">
            <router-link to="/changepw">重置密码</router-link>
        </div>
    </div>
</template>

<script>
import axios from './../axios'
export default {
    components:{  
    },
    data(){
        return{
            flag:true,
            value:{
                username:'',
                password:'',
                captcha_code:''
            },
            time:60,
            flagyan:false,
            url:'',
            maxlength:4,
            flag1false:'获取验证码',
            userplaceholder: '手机/邮箱/用户名',
            pwplaceholder: '密码',
            captchaplaceholder:'请输入验证码',
            usertype: 'text',
            pwtype: 'password',
            captchatype: 'text',
             clearable: {
                visible: true,
                blurHidden: true
            }, 
            eye: {
                open: false,
                reverse: false
            }
        }
    },
    methods:{
        vueTouch(){
            if(this.value.username!=''&&this.value.password!=''){
                this.flag=true
            }else{
                this.flag=false
            }
        },
        vueTouch1(){
            if(this.value.username!=''&&this.value.password!=''){
                this.flag=true
            }else{
                this.flag=false
            }
        },
        yanzheng(){
            // clearInterval(timer)
            // console.log(this.value.username)
            this.flag=false
            if(this.value.username==''||this.value.password==''){
                this.toast = this.$createToast({
                    txt: '请输入用户名或密码',
                    type: 'txt'
                })
                this.toast.show()
            }else{
                var aa=parseInt(this.time)
                var tt=this.flag1false
                this.url=''
                this.flag=false
                let timer=setInterval(()=>{
                    aa--
                    this.flag1false='已发送'+aa+'s'
                    if(aa==0){
                        this.flag1false='重新获取'
                        this.flag=true
                        clearInterval(timer)
                    }
                },1000)
                
                axios.post('/v1/captchas').then(res =>{
                    console.log(res)
                    this.flagyan=true
                    const resl =res.data.code
                    let arr=resl.split(',')[1]
                    let cc=setTimeout(()=>{
                        this.url=resl
                    },3000)
                })
                
            }
            // this.flag=true
        },
        agin(){
            // this.time=60
            this.url=''
            axios.post('/v1/captchas').then(res =>{
            console.log(res)
            const resl =res.data.code
            let arr=resl.split(',')[1]
            let cc=setTimeout(()=>{
                this.url=resl
            },3000)
        }) 

            
        },
        login(){
            console.log(this.value.captcha_code)
            if(this.value.username==''||this.value.password==''){
                this.toast = this.$createToast({
                    txt: '请输入用户名或密码',
                    type: 'txt'
                })
                this.toast.show()
            }
            else if(this.value.captcha_code==''){
                this.toast = this.$createToast({
                    txt: '请输入验证码',
                    type: 'txt'
                })
                this.toast.show()
            }
            else{
                axios.post('/v2/login',this.value).then(res =>{
                    // console.log(res.data)
                    if(res.data.is_mobile_valid){
                        this.toast = this.$createToast({
                            txt: '登录成功',
                            type: 'txt'
                        })
                        this.toast.show()
                        localStorage.setItem("user",this.value.username)
                        localStorage.setItem("pw",this.value.password)
                        //跳转首页
        
                            // 跳转主页
                            this.$router.push('/Index')
                    }else{
                        // console.log(res.data.message)
                        this.toast = this.$createToast({
                            txt: res.data.message,
                            type: 'txt'
                        })
                        this.toast.show()
                    }
                })
            }
        },

        
    }
}
</script>

<style scoped>
    *{
        padding: 0;
    }
    .yanz p{
        margin-top: 0.2rem;
        font-size: 0.36rem;
    }
    .huan{
        width: 1.2rem;
        /* padding: 0 0.1rem; */
        font-size: 0.2rem;
        line-height: 40px;
    }
    .loginbox{
        background-color: #f5f5f5;
    }
    .loginbox .top{
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
    .captcha{
        padding: 0.2rem 0;
        display: flex;
        justify-content: space-around;
        /* align-items: center; */
    }
    .captcha img{
        padding: 0 0.1rem;
    }
    .changepw{
        display: flex;
        justify-content: flex-end;
        margin-top: 0.3rem;
        font-size: 0.3rem;
        color: #3190e8;
    }
    .captcha button{
        width: 40%;
    }
    .top p span,.mimalo{
        padding: 0 0.4rem;
    }
    .user{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .useript{
        padding: 0;
    }
    .useript ,.pwipt{
        width: 85%;
        font-size: 0.28rem;
        height: 0.55rem;
        padding: 0.09rem;
        background-color: #ffffff;
    }
    .pwipt{
        width: 100%;
        padding: 0.1rem 0;
        margin-top: 0.1rem;
    }
    .cube-btn{
        font-size: 0.28rem;
    }
    .cube-input .cube-input-field{
        font-size: 0.28rem;
        padding: 0;
    }
    .user .cube-btn {
        width: 30%;
        height: 0.73rem;
        text-align: center;
        padding: 0.15rem;
        background-color: #d5d4d2;
        /* line-height: 0.4rem; */
    }
    .useript .cube-input-field{
        padding: 0.2rem;
    }
    .tishi{
        font-size: 0.3rem;
        color:#666; 
        margin-top: 0.2rem;
        margin-bottom: 0.3rem;
    }
    .pwipt input{
        padding: 0;
    }
    .loginbtn .cube-btn{
        padding: 0.3rem 0;
        font-size: 0.36rem;
        background-color: #4dc160;
        
    }
    .user .act{
        background-color: red
    }
</style>
