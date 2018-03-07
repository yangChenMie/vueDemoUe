<template>
  <div class="List">
    <header-top  if-search-title="true" v-on:listenToSearch="showSearch"></header-top>
    <div class="main">
      <div class="allTitle" v-if="!ifSearch">
        <p @click="changePostOfDuty(1)" :class="oneTab=='搬家'?'active':''"> 搬家服务</p>
        <p @click="changePostOfDuty(2)" :class="oneTab=='阿姨'?'active':''"> 家政阿姨</p>
        <p @click="changePostOfDuty(3)" :class="oneTab=='保姆'?'active':''"> 全职保姆</p>
      </div>
      <div class="allTitle" v-if="ifSearch">
        搜索结果
      </div>
        <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" id="isScrollWrap"  ref="isScrollbox"  :is-show-load="isShowLoad">

        <!--搬家、保姆、阿姨 列表-->
        <ul class="allPerson" ref="isScrollAll">
          <li v-for="item in filterPerson(ListArr)" v-bind:key="item.num" class="onePerson" @click="goDetail(item)">
            <dl class="oneLeft">
              <!--用表达式的时候，图片路径不能用相对路径，放入static-->
              <img :src="item.photo" :onerror="imgUrl"/>
            </dl>
            <div class="oneRight">
              <div class="oneRigTop">
                <p class="oneName">{{item.name}}</p>
                <p class="personSix">性别:{{item.six}}</p>
                <p class="personAge">age:{{item.age}}</p>
              </div>
              <div class="oneScore">评分:<span class="allStar"><span class="yeStarWrap"  :style="{width:item.score/5*0.96+'rem'}"></span></span><span class="colorOrg">{{item.score}}分</span></div>
              <div class="oneRigDisc">{{item.discription}}</div>
            </div>
          </li>
        </ul>

        </v-scroll>
    </div>
    <footer-section></footer-section>
  </div>

</template>
<script>
  import headerTop from '../components/header'
  import footerSection from '../components/footerSection'
  import vScroll from '../components/vScroll'

  import { getAllPerson } from '../service/getData'

  export default {
    components: {footerSection,headerTop,vScroll},
    name: 'List',
    data () {
      return {
        imgUrl : 'this.src="' + require('../assets/icon/photo.png') + '"',
        ListArr:[],
        oneTab:"搬家",
        isShowLoad:false,
        ifSearch:false,
        searchName:"",
      }
    },
    methods :{
      //方法
      async initData(postOfDuty){
        let  res=await getAllPerson();
        if(postOfDuty=="all"){
          this.ListArr=res;
        }else{
          for(var i=0;i<res.length;i++){
            if(postOfDuty===res[i].postOfDuty){
              this.ListArr.push(res[i]);
            }
          }
        }
      },
      changePostOfDuty:function(pram){
        this.isShowLoad=false;
        this.ListArr=[];
        switch(pram)
        {
          case 1:
            this.oneTab="搬家";
            this.initData(this.oneTab);
            break;
          case 2:
            this.oneTab="阿姨";
            this.initData(this.oneTab);
            break;
          case 3:
            this.oneTab="保姆";
            this.initData(this.oneTab);
            break;
          default:
            this.oneTab="搬家";
            this.initData(this.oneTab);
        }
      },
      onRefresh(done) {
        done();
      },
      onInfinite(done){
        this.isShowLoad=true;
        var self=this;
        setTimeout(function(){
          self.initData(self.oneTab);
        },1000);
        done();
      },
      showSearch:function (data) {
        this.searchName=data;
        this.isShowLoad=false;
        this.ListArr=[];
        if(this.searchName!==""){
          this.ifSearch=true;
          this.oneTab="all";
        }else {
          this.ifSearch=false;
          this.oneTab="搬家";
        }
        this.initData(this.oneTab);
      },
      filterPerson:function(list){
        var self=this;
          return list.filter(function(item){
            if(self.ifSearch){
                return item.name.indexOf(self.searchName)!==-1;
            }else{
                return item;
            }
          })

      },
      goDetail:function (params) {
        this.$router.push({
          path: '/Detail',
          name:'Detail',
//          params:{
//            name:params.name
//          },
          query:{
            thePersonInfo:params ,
          }
        });
      }
    },
    mounted () {
      this.initData(this.oneTab);
    }
  }
</script>
<style lang="scss">
  @import "../style/mixin";
  .List{
    background: $lightGray;
    color:$darkGray;
  }
  .main{
    .allTitle{
      text-align: center;
      height:0.4rem;
      line-height: 0.4rem;
      font-weight: 700;
      border-bottom:0.01rem dashed $orageColor;
      background: $wriColor;
      display: flex;
      margin-bottom: 0.1rem;
      p{
        flex:1;
      }
      .active{
        color:$redColor;
      }
    }
    .allPerson{
      .onePerson{
        display: flex;
        height:1rem;
        width:100%;
        background: $wriColor;
        margin-bottom: 0.1rem;
        font-size:0.1rem;
        .oneLeft{
          width:0.8rem;
          height:1rem;
          flex:1;
          text-align: center;
            img{
              width:0.7rem;
              height:0.7rem;
              border-radius:50%;
              border:1px solid $greenColor;
              margin:0.15rem auto;
            }
        }
        .oneRight{
          padding-left:0.2rem;
          flex:3;
          .oneRigTop{
            height:0.3rem;
            display:flex;
            font-size: 0.12rem;
            line-height: 0.3rem;
            .oneName{
              flex:1;
              font-size: 0.14rem;
              font-weight: 700;
              line-height: 0.3rem;
            }
            .personSix{
              flex:1;
            }
            .personAge{
              flex:1;
            }
          }
          .oneScore{
            font-size: 0.14rem;
            height:0.25rem;
            line-height: 0.14rem;
            .allStar{
              margin:0 0.1rem;
              width:0.96rem;
              height: 0.16rem;
              display: inline-block;
              position: relative;
              background: url("../assets/star/starG.png") no-repeat ;
              background-size: 0.96rem 0.16rem;
              vertical-align: top;
              .yeStarWrap{
                height: 0.16rem;
                display: inline-block;
                position: absolute;
                background: url("../assets/star/starY.png") no-repeat ;
                background-size: 0.96rem 0.16rem;
              }

            }
          }
          .oneRigDisc{
            padding-top:0.05rem;
            height:0.35rem;
            line-height: 0.15rem;
            text-indent: 0.1rem;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
        }
      }
      .onePerson:last-of-type{
        margin-bottom: 0;
      }
    }
  }
  #isScrollWrap{
    height:4.3rem;
    overflow-y: auto;
  }
  .load{
    text-align: center;
    height:20px;
    line-height: 20px;
  }
</style>
