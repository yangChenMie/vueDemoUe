<template>
    <div class="register">
      <header-top head-title="用户注册" class="registerTitle" if-have-back="true"></header-top>
      <div class="regMain">
        <label class="phone"><span class="labelTitle"><span class="colorRed">*</span>手机号码</span><input type="text"/></label>
        <label class="code"><span class="labelTitle"><span class="colorRed">*</span>输入验证码</span><span><input type="text"/></span></label>
        <label class="phoneCode"><span class="labelTitle"><span class="colorRed">*</span>短信验证码</span><span><input type="text"/><button>获取验证码</button></span></label>
        <label class="email"><span class="labelTitle"><span class="colorRed">*</span>邮箱</span><input type="text"/></label>
        <label class="pwd"><span class="labelTitle"><span class="colorRed">*</span>密码</span><input type="text"/></label>
        <div class="degree"><p>弱</p><p>中</p><p>强</p></div>
        <label class="pwd"><span class="labelTitle"><span class="colorRed">*</span>确认密码</span><input type="text"/></label>
        <button class="registerBtn">注 册</button>
        <div class="goLogin">已有账号,去<router-link to="/Login" class="loginFont">登录</router-link></div>
      </div>
    </div>
</template>
<script>
  import headerTop from '../components/header'
  export default {
    name:'register',
    components: {headerTop},
    data(){
      return{}
    },
    methods:{},
  }
</script>
<style lang="scss">
  @import "../style/mixin";
.register{
  width: 100%;
  height:100%;
  .registerTitle{
    margin-bottom: 0.2rem;
  }
  .regMain{
    flex:1;
    overflow-y: auto;
    width: 100%;
    label,.degree{
      margin:0.1rem auto;
      width: 2.8rem;
      height:0.3rem;
    }
    label{
      display: block;
      input{
        width:1.8rem;
        margin-left: 0.2rem;
        height:0.3rem;
        background: transparent;
        border:none;
        border:1px solid $bgGray;
        border-radius: 0.05rem;
      }
      .labelTitle{
        display: inline-block;
        width:0.8rem;
        text-align: right;
      }
      span{
        input{
          width:0.8rem;
          margin-right: 0.1rem;
        }
        button{
          width:0.8rem;
          padding:0.05rem;
          background: $orageColor;
          border-radius: 0.05rem;
          border:none;
          color: $wriColor;
        }
      }

    }
    .degree{
      padding-left:1rem;
      display: flex;
      p{
        flex:1;
        margin-right: 0.1rem;
        text-align: center;
        height:0.3rem;
        line-height: 0.3rem;
        border:1px solid $bgGray;
      }
      p:nth-of-type(3){
        margin-right: 0;
      }
    }
    .registerBtn{
      width: 2rem;
      height:0.4rem;
      background: $orageColor;
      color: $wriColor;
      margin:0.1rem 0.6rem;
      border:none;
      border-radius: 0.05rem;
      text-align: center;
    }
    .goLogin{
      border:none;
      height:0.2rem;
      line-height: 0.2rem;
      width:2rem;
      margin:0.1rem auto;
      .loginFont{
        color: $greenColor;
        font-weight: 600;
        margin-left: 0.05rem;
      }
    }
  }

}
</style>
