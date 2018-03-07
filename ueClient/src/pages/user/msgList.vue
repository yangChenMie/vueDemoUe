<template>
  <div class="msgList">
    <header-top head-title="消息列表" class="" if-have-back="true"></header-top>
    <ul id="allMsg" class="allMsg">
      <li v-for="item in msgList" :key="item.ind" class="oneMsg " :class="item.role">
        <p class="msgDate">{{item.msgDate}}</p>
        <dl class="clearFloat" style="padding-top:0.1rem;">
          <dt class="msgPhoto"><img :src="item.msgPhoto" /></dt>
          <dd class="diffBg">
            <p class="row"></p>
            <p class="msgName colorRed">{{item.msgName}}</p>
            <p class="msgContent">{{item.msgContent}}</p>
          </dd>
        </dl>
      </li>
    </ul>
    <div class="reMsg">
      <input type="text"   v-model="newMsgCon"/>
      <button @click="addMsg">回复</button>
    </div>
  </div>
</template>
<script>
  import headerTop from '../../components/header'

  import { getAllMsg } from '../../service/getData'
  export default {
    name:'msgList',
    components:{headerTop},
    data(){
      return{
        msgList:[],
        newMsgCon:'',
        screenHeight:document.body.clientHeight,
      }
    },
    methods:{
      async getMsgList(){
        let  res=await getAllMsg();
        this.msgList=this.msgList.concat(res);
      },
      scrollBtm(){
        var content = document.getElementById('allMsg');
          content.scrollTop = content.scrollHeight;
      },
      addMsg(){
        var newMsg={
          "ind":this.msgList.length,
          "msgPhoto":"/static/image/2.png",
          "msgName":"羊羊羊",
          "msgContent":this.newMsgCon,
          "msgDate":"2017-9-23 09:36",
          "role":"isUser"
        };
        this.msgList.push(newMsg);
        this.newMsgCon='';
      },

    },
    mounted(){
      this.getMsgList();
      const that = this;
      window.onresize = () => {
        return (() => {
          window.screenHeight = document.body.clientHeight;
          that.screenHeight = window.screenHeight;
        })()
      }
    },
    watch:{
      msgList:function () {
        this.$nextTick(function () {
          this.scrollBtm();
        });
      },
      screenHeight:function () {
        this.scrollBtm();
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";
.msgList{
  display: flex;
  height:100%;
  .allMsg{
    flex:1;
    overflow-y: auto;
    background: $lightGray;
    padding-bottom: 0.2rem;
    .oneMsg{
      margin-top:0.2rem;
      .msgDate{
        width:100%;
        font-size: 0.1rem;
        color:$bgGray;
        text-align: center;
      }
      .msgPhoto{
        border-radius: 0.1rem;
        width:0.5rem;
        height:0.5rem;
        img{
          width:0.5rem;
          height:0.5rem;
          border-radius: 0.1rem;
          display: block;
        }
      }
      .diffBg{
        width:1.3rem;
        border-radius: 0.05rem;
        margin-top: 0.1rem;
        padding:0.05rem 0.1rem;
        position: relative;
        .row{
          position: absolute;
          width:0;
          height:0;
          border:0.05rem solid transparent;
        }
      }
    }
    .isService{
      /*客服*/
      .diffBg{
        background: $lightOrg;
        margin-left: 0.6rem;
        .row{
          border-right:0.05rem solid $lightOrg;
          left: -0.09rem;
          top: 0.1rem;
        }
        .msgName{
          text-align: left;
        }
      }
      .msgPhoto{
        float: left;
      }
    }
    .isUser{
      /*用户*/
      .diffBg{
        background: $wriColor;
        margin-left: 1.3rem;
        .row{
          border-left:0.05rem solid $wriColor;
          right: -0.08rem;
          top: 0.1rem;
        }
        .msgName{
          text-align: right;
        }
      }
      .msgPhoto{
        float: right;
      }
    }
  }
  .reMsg{
    height:0.4rem;
    padding: 0 0.1rem;
    input{
      width:2.1rem;
      height:0.3rem;
      margin-top:0.05rem;
    }
    button{
      width:0.8rem;
      height:0.3rem;
      margin-top: 0.05rem;
      border:0;
      box-shadow: none;
      border-radius: 0.1rem;
      background: $greenColor;
      color:$wriColor;
    }
  }
}
</style>
