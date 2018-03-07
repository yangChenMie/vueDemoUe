<template>
<div class="login">
  <div class="userName">
    <i class="iconfont icon-yonghuming"></i>
    <input type="text" placeholder="email or username"/>
  </div>
  <div class="userPwd">
    <i class="iconfont icon-password"></i>
    <input type="password" />
  </div>
  <div class="remenberPwd">
    <span><input type="checkbox" name="remenber" class="remb"/> 记住密码</span>
    <span> 忘记密码 ?</span>
  </div>
    <button class="loginBtn">登 录</button>
  <div class="goRegister">还没有优e家会员,去<router-link to="/Register" class="registerFont">注册</router-link><router-link to="/Home" class="goHome">返回主页</router-link>
  </div>
</div>
</template>
<script>
 export default {
   name:"login",
   data(){
     return{

     }
   },
   methods:{

   },

 }
</script>
<style lang="scss">
  @import "../style/mixin";
.login{
  /*min-height: 4.6rem;*/
  height:100%;
  padding-top:2rem;
  background: url("../assets/bg1.jpg");
  background-size: cover;
  color:$darkGray;
  font-size: 0.12rem;
  input{
    border:none;
    background: transparent;
  }
  .userName,.userPwd,.remenberPwd,.goRegister{
    border:1px solid $bgGray;
    border-radius: 0.05rem;
    width:2rem;
    height:0.3rem;
    line-height: 0.3rem;
    margin:0.1rem auto;
  }
  .remenberPwd{
    border: none;
    display: flex;
    height:0.2rem;
    line-height: 0.2rem;
    span{
      flex: 1;
      text-align: left;
      .remb{
        vertical-align: middle;
      }
    }
    span:nth-of-type(2){
      text-align: right;
      padding-right: 0.1rem;
    }
  }
  .loginBtn{
    width: 2rem;
    height:0.4rem;
    background: $orageColor;
    color: $wriColor;
    margin:0.1rem 0.6rem;
    border:none;
    border-radius: 0.05rem;
    text-align: center;
  }
  .goRegister{
    border:none;
    height:0.2rem;
    line-height: 0.2rem;
    .registerFont,.goHome{
      color: $greenColor;
      font-weight: 600;
      margin-left: 0.05rem;
    }
    .goHome{
      color: $greenBlue;
    }
  }
}
</style>
