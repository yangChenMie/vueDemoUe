<template>
  <div class="evalInfo">
    <header-top head-title="评价详情" class="header" >
      <router-link :to="{path:'/Detail',query:{thePersonInfo: worker}}" replace><i  class="iconfont icon-jiantou4"></i></router-link>
    </header-top>
    <div class="evalMain">
      <p><span class="name colorOrg">{{evalCon.name}}</span><span class="server fr">家政/1小时</span></p>
      <p><span class="date">2017-08-16 08:55</span><span class="isUseNum "><span class="colorRed">10</span>人觉得有用</span></p>
      <p class="content">很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好很好。</p>
      <div class="askEval">
        <p class="allAsk"><i class="iconfont icon-lianxi2"></i>所有问答</p>
        <ul class="askList">
          <li v-for="item in askList" :key="item.name">
            <p class="colorRed">{{item.name}}</p>
            <p class="askCon">{{item.content}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="useOrAsk">
      <div class="noInput" v-if="!ifInput">
        <p @click="changeUse"><i class="iconfont icon-dianzan" :class="setUse?'colorRed':''"></i>点赞</p>
        <p @click="goAsk"><i class="iconfont icon-lianxi2"></i>提问</p>
      </div>
      <div class="isInput" v-if="ifInput">
        <input type="text"   v-model="askContent"/>
        <button @click="addAsk">回复</button>
      </div>
    </div>
  </div>
</template>

<script>
  import headerTop from '../../components/header'

  export default {
    name:'evalInfo',
    components:{headerTop},
    data(){
      return{
        worker:this.$route.query.workerInfo,
        evalCon:this.$route.query.evalCon,
        ifInput:false,
        setUse:false,
        askContent:'',
        askList:[{
          'name':'hahahaha',
          'content':'服务好吗？'
        },{
        'name':'hahahaha',
          'content':'质量咋样？'
        },{
          'name':'羊羊羊',
          'content':'还可以啊。'
        },{
          'name':'羊羊羊',
          'content':'挺好的'
        }]
      }
    },
    methods:{
      changeUse(){
        this.setUse=!this.setUse;
      },
      goAsk(){
        this.ifInput=true;
      },
      addAsk(){
        this.ifInput=false;
        this.askList.push({
          'name':'羊羊羊',
          'content':this.askContent
        });
        this.askContent='';
      }
    },
    mounted(){

    },
  }
</script>
<style lang="scss">
  @import "../../style/mixin";
.evalInfo{
  display: flex;
  .header{
    .iconfont{
      color:$wriColor;
    }
  }
  .evalMain{
    flex: 1;
    padding:0 0.1rem;
    overflow-y: auto;
    .askEval{
      margin-top:0.1rem;
      .allAsk{
        height:0.3rem;
        line-height: 0.3rem;
        border-bottom: 1px solid $lightGray;
        .iconfont{
          color: #007aff;
          margin-right:2px;
          font-size:0.14rem;
        }
      }
      .askList{
        padding:0 0.1rem;
        li{
          border-bottom: 1px dashed $lightGray  ;
          margin-bottom: 0.1rem;
          p{
            height:0.25rem;
            line-height: 0.25rem;
          }
          .askCon{
            padding-left:0.2rem;
          }
        }
      }
    }
    .name{
      font-size: 0.16rem;
    }
    .date,.isUseNum{
      font-size:0.1rem;
      color:#8a8885;
      margin-right:0.15rem;
    }
    .content{
      margin-top:0.1rem;
      text-indent: 0.24rem;
      font-size: 0.12rem;
    }
  }
  .useOrAsk{
    height:0.44rem;
    .noInput{
      display: flex;
      p{
        height:100%;
        flex: 1;
        border:1px solid $lightGray;
        text-align: center;
        line-height: 0.44rem;
        .iconfont{
          color:$bgGray;
        }
        .colorRed{
          color:$redColor;
        }
      }
    }
    .isInput{
      height:0.44rem;
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
}
</style>
