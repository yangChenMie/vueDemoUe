<template>
  <div id="headerTop" class="iconfont">
    <i v-if="ifHaveBack" class="iconfont icon-jiantou4" @click="goBack"></i>
    <p v-if="ifFirstTiltle" class="firstTitle">
      <span style="line-height: 0.4rem;">&#xe6f1;</span><span style="font-size:0.28rem;margin-right: -0.05rem;padding-top: 0.02rem;">&#xe6c0;</span><span>&#xe795;</span><span style="margin-left: -0.05rem;">&#xe6bf;</span>
    </p>
    <div v-if="ifSearchTitle" class="title">
      <div class="city"><p><i class="iconfont icon-dizhi"></i><span>{{nowCity}}</span></p></div>
      <p class="search">
        <input class="fl" type="text" placeholder="请输入名字查找" v-model="searchName" @input="sendMsg" />
        <button class="fl iconfont icon-sousuo4" @click="sendMsg"></button>
      </p>
    </div>
    <span style="font-size: 0.16rem;">{{ headTitle}}</span>
    <router-link to="/Mine/msgList" v-if="isMsg">
      <div class="message"><p v-if="ifHaveMsg"></p></div>
    </router-link>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        nowCity:"成都",
        searchName:"",
        ifHaveMsg:false,
      }
    },
    props:['ifFirstTiltle','ifSearchTitle','headTitle','ifHaveBack','isMsg'],
    methods :{
      sendMsg:function () {
        this.$emit("listenToSearch",this.searchName);
      },
      goBack:function () {
        this.$router.go(-1);
      }
    },
    mounted () {

    },
  };
</script>

<style lang="scss">
  @import "../style/mainStyle";
  .firstTitle{
    span{
      display: inline-block;
      margin:0;
      height:0.44rem;
      line-height: 0.44rem;
      font-size:0.24rem;
      vertical-align: top;
    }
  }
  #headerTop{
    position: relative;
    .title{
      display: flex;
      font-size: 0.12rem;
      .city{
        font-size: 0.1rem;
        flex:2;
        line-height: 0.25rem;
        p{
          width:0.6rem;
          padding-right:0.02rem;
          border:1px solid $wriColor;
          height:0.25rem;
          border-radius: 0.05rem;
          margin-top:0.07rem;
          margin-left:0.05rem;
          text-overflow:ellipsis;
          overflow:hidden;
          white-space:nowrap;
        }
      }
      .search{
        flex:5;
        line-height: 0.25rem;
        padding-top:0.07rem;
        padding-left: 0.2rem;
        input,button{
          height:0.25rem;
          background: $wriColor;
          border:1px solid $bgGray;
          box-shadow: none;
          text-align: center;
        }
        input{
          border-right:none;
          border-radius: 0.05rem 0 0 0.05rem;
          text-align: left;
          padding-left: 0.1rem;
        }
        button{
          font-size: 0.14rem;
          font-weight: 600;
          border-left:none;
          border-radius:0 0.05rem 0.05rem 0;
        }
      }
    }
    .icon-jiantou4{
      font-size: 0.2rem;
      margin-left:0.05rem;
      float: left;
    }
  }
  .message{
    position: absolute;
    top:0.1rem;
    right:0.1rem;
    width:0.28rem;
    height: 0.28rem;
    background: url("../assets/master/msg.png") no-repeat;
    background-size: cover;
    p{
      position: absolute;
      width:0.08rem;
      height:0.08rem;
      right:0;
      top:0.01rem;
      border-radius: 50%;
      background: $redColor;
    }
  }
</style>
