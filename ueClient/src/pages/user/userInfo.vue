<template>
<div class="userInfo">
  <header-top head-title="个人信息" class="" if-have-back="true"></header-top>
  <div class="infoMain">
    <label class="labelWrap">
      <span class="hint">头像</span><p class="photoBor"><img src="../../assets/icon/photo2.png"/></p>
    </label>
    <label class="labelWrap">
      <span class="hint"><span class="colorRed">*</span>昵称</span><input class="" type="text" :disabled="!ifCompile" :class="ifCompile?'borderOne':''" v-model="onesInfo.name">
    </label>
    <label class="labelWrap">
      <span class="hint"><span class="colorRed">*</span>手机号</span><input class="" type="text" :disabled="!ifCompile" :class="ifCompile?'borderOne':''"  v-model="onesInfo.phone"/>
    </label>
    <div v-if="ifCompile">
      <label class="labelWrap">
        <span class="hint"><span class="colorRed">*</span>手机认证</span><input class="borderOne" type="text" style="width:1rem;"/><img src="" style="width:0.8rem;margin-left: 0.05rem;height:0.3rem;display: inline-block;"/>
      </label>
      <label class="labelWrap">
        <span class="hint"><span class="colorRed">*</span>输入验证码</span><input class="borderOne" type="text" style="width:0.75rem;"/><button class="getPhoneCode">获取验证码</button>
      </label>
    </div>
    <label class="labelWrap">
      <span class="hint">邮箱</span><input class="" type="text" :disabled="!ifCompile" :class="ifCompile?'borderOne':''" v-model="onesInfo.email"/>
    </label>
    <label class="labelWrap">
      <span class="hint">邮编</span><input class="" type="text" :disabled="!ifCompile" :class="ifCompile?'borderOne':''"  v-model="onesInfo.eCode"/>
    </label>
    <label class="labelWrap">
      <span class="hint">描述</span><textarea class="" type="" :disabled="!ifCompile" :class="ifCompile?'borderOne':''"  v-model="onesInfo.discription"></textarea>
    </label>
    <!--<button class="ifCompile" v-if="!ifCompile" @click="changeCompile">编 辑</button>-->
    <!--<button class="ifCompile" v-if="ifCompile"  @click="changeCompile">保 存</button>-->
    <button class="ifCompile" @click="changeCompile">{{!ifCompile?"编 辑":"保 存"}}</button>
  </div>
</div>
</template>
<script>
  import headerTop from '../../components/header'

export default {
  name:'userInfo',
  components:{headerTop},
  data(){
    return{
      ifCompile:false,
      onesInfo:{
        name:'羊羊羊',
        phone:'123-1522-5854',
        email:'85656651@qq.com',
        eCode:'618200',
        discription:'羊羊羊有点怕麻烦，不是懒！不是懒！不是懒！'
      }
    }
  },
  methods:{
    changeCompile:function () {
      this.ifCompile=!this.ifCompile;
    }
  }
}
</script>
<style lang="scss">
  @import "../../style/mixin";
.userInfo{
  .infoMain{
    flex:1;
    overflow-y: auto;
    input[disabled='disabled'],textarea[disabled='disabled']{
      border:none;
      border-bottom: 1px solid $lightGray;
      background: $wriColor;
      width:1.8rem;
    }
    padding-top: 0.3rem;
    .labelWrap{
      display: block;
      height:0.4rem;
      width:100%;
      .getPhoneCode{
        background: $orageColor;
        width:1rem;
        color:$wriColor;
        border:0;
        box-shadow:none;
        height:0.3rem;
        border-radius:0.05rem;
        margin-left:0.05rem;
      }
      .hint{
        display: inline-block;
        width:0.8rem;
        text-align: right;
        margin-right: 0.1rem;
        height:0.3rem;
        vertical-align: top;
        line-height: 0.4rem;
      }
      input,.photoBor{
        display: inline-block;
        border:none;
        border-bottom: 1px solid $lightGray;
        height:0.3rem;
        width:1.8rem;
        vertical-align: top;
        padding-left: 0.05rem;
        text-align: center;
      }
      .photoBor{
          img{
            border-radius: 50%;
            border:1px solid $darkGray;
            width:0.3rem;
            height:0.3rem;
            margin:0 auto;
          }
      }
      textarea{
        display: inline-block;
        height:100%;
        width:1.8rem;
        padding-left: 0.05rem;
      }
    }
    .ifCompile{
      font-size: 0.16rem;
      width: 2rem;
      height:0.4rem;
      background: $greenColor;
      color: $wriColor;
      margin:0.2rem 0.6rem;
      border:none;
      border-radius: 0.05rem;
      text-align: center;
    }
    .borderOne{
      border:1px solid $lightGray!important;
    }
  }
}
</style>
