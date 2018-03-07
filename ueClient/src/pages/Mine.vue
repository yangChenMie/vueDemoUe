<template>
  <div class="Mine">
    <header-top  head-title="个人中心" is-msg="true" v-if="ifLogin"></header-top>
    <div class="main">
      <div class="isLogin"  v-if="ifLogin">
        <div class="headerPhoto">
          <div class="photoWrap">
            <vue-core-image-upload
              :class=""
              :crop="false"
              @imageuploaded="imageuploaded"
              @imagechanged="imagechanged"
              :max-file-size="5242880"
              url="" style="width:100%;height:100%;">
            <img :src="src" src="../assets/master/camera.png"/>
            </vue-core-image-upload>
          </div>
          <p class="vipName">羊羊羊</p>
          <div class="vMember">
            <div class="vipNum"><i class="iconVip"></i>金牌会员:252552552</div>
            <div class="barWrap"><p class="bar"></p><p class="number"><span>1524</span>/2000</p></div>
          </div>
        </div>
        <ul class="onesInfoList">
          <li><i class="iconfont icon-geren1 iconfont1"></i>个人信息<router-link to="/Mine/userInfo"><i class="iconfont iconfont2 icon-iconfonti2-copy"></i></router-link></li>
          <li><i class="iconfont icon-shoucang11 iconfont1"></i>我的收藏<router-link to="/Mine/collect"><i class="iconfont iconfont2 icon-iconfonti2-copy"></i></router-link></li>
          <li><i class="iconfont icon-pingjia2 iconfont1"></i>评价管理<router-link to="/Mine/managementEvel"><i class="iconfont iconfont2 icon-iconfonti2-copy"></i></router-link></li>
          <li><i class="iconfont icon-yuyue2 iconfont1"></i>预约记录<router-link to="/Mine/historyOrder"><i class="iconfont iconfont2 icon-iconfonti2-copy"></i></router-link></li>
          <li><i class="iconfont icon-fuhao iconfont1"></i>我的地址管理<router-link to="/Mine/myLocation"><i class="iconfont iconfont2 icon-iconfonti2-copy"></i></router-link></li>
          <li><i class="iconfont icon-quanyi1 iconfont1"></i>会员权益<i class="iconfont iconfont2 icon-iconfonti2-copy"  @click="memberProp()"></i></li>
          <li><i class="iconfont icon-question-9 iconfont1"></i>退出登录<i class="iconfont iconfont2 icon-iconfonti2-copy"  @click="exitLogin()"></i></li>
        </ul>
      </div>
      <div class="notLogin" v-if="!ifLogin">
        <v-login></v-login>
      </div>
    </div>
    <footer-section v-if="ifLogin"></footer-section>
    <!--弹框-->
    <v-dialog v-show="showDialog" :dialog-option="dialogOption" ref="dialog">
      <div v-if="ifMenber">
        <p>铜牌会员预约服务9.8折!</p><p>银牌会员预约服务9.5折!</p><p>金牌会员预约服务9折！</p>
      </div>
    </v-dialog>
  </div>
</template>
<script>
  import headerTop from '../components/header'
  import footerSection from '../components/footerSection'
  import  vDialog from '../components/dialog.vue'
  import vLogin from '../components/login.vue'
  import VueCoreImageUpload  from 'vue-core-image-upload'

  export default {
    components: {footerSection,headerTop,vDialog,vLogin,VueCoreImageUpload},
    name: 'Mine',
    data () {
      return {
        src:"../assets/master/camera.png",
        showDialog:false,
        ifLogin:true,
        ifMenber:false,
        dialogOption: {
          title: '温馨提示',
          content: "...",
          cancelButtonText: '取消',
          confirmButtonText: '确定',
          ifShowCancel:false,
          ifShowConfirm:false,
        }
      }
    },
    methods :{

//      弹出框的回调
  memberProp: function() {
    this.ifMenber=true;
    this.showDialog = true;
    this.dialogOption={
      title: '会员权益',
      content: "",
      cancelButtonText: '取消',
      confirmButtonText: '确定',
      ifShowCancel:false,
      ifShowConfirm:true,
    };
    this.$refs.dialog.confirm().then(() => {
      this.ifMenber=false;
      this.showDialog = false;
    }).catch(() => {
      this.showDialog = false;
      this.ifMenber=false;
    })
  },
  exitLogin:function () {
    this.showDialog = true;
    this.dialogOption={
      title: '退出登录',
      content: "是否退出登录？",
      cancelButtonText: '取消',
      confirmButtonText: '确定',
      ifShowCancel:true,
      ifShowConfirm:true,
    };
    this.$refs.dialog.confirm().then(() => {
      this.showDialog = false;
      this.ifLogin=false;
    }).catch(() => {
      this.showDialog = false;
    })
  },
      //选择图片触发
      imagechanged(res){
        console.log(res);
      },
      //上传完成之后
      imageuploaded(res) {
        if (res.errcode == 0) {
          console.log(res);
          this.src = res.data.src;
        }
      }
    },
  }
</script>
<style lang="scss">
  @import "../style/mixin";
  .main{
    .isLogin{
      .headerPhoto{
        border-bottom: 1px solid $orageColor;
        padding:0.2rem;
        padding-bottom:0.05rem;
        text-align: center;
        .photoWrap{
          width: 0.8rem;
          height:0.8rem;
          margin:0 auto;
          img{
            width:100%;
            height:100%;
            border-radius: 50%;
          }
        }
        .vipName{
          height: 0.3rem;
          line-height: 0.3rem;
        }
        .vMember{
          font-size: 0.1rem;
          line-height: 0.1rem;
          .vipNum{
            height: 0.16rem;
            line-height: 0.16rem;
            .iconVip{
              display: inline-block;
              height: 0.16rem;
              width: 0.16rem;
              background: url("../assets/icon/vip.png") no-repeat;
              vertical-align:top;
            }
          }
          .barWrap{
            position: relative;
            width: 2rem;
            height:0.1rem;
            border-radius: 0.05rem;
            background: $bgGray;
            margin:0.1rem auto;
            .bar{
              width:0.5rem;
              height:0.1rem;
              border-radius: 0.05rem;
              background: $greenColor;
            }
            .number{
              position: absolute;
              top:0;
              left:40%;
              font-size: 0.08rem;
              span{
                color: $redColor;
              }

            }
          }
        }
      }
      .onesInfoList{
        font-size: 0.14rem;
        margin-top: 0.1rem;
        .iconfont1{
          color: $greenColor;
        }
        .iconfont2{
          float: right;
        }
        li{
          height:0.4rem;
          padding-left:0.2rem;
          line-height: 0.4rem;
          width:100%;
          border-bottom: 1px dashed $bgGray;
        }
      }
    }
    .notLogin{
      height:100%;
    }
  }
</style>

