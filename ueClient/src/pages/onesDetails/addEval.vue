<template>
    <div class="addNewEval">
      <header-top head-title="评价" class="" if-have-back="true"></header-top>
      <ul class="evalCont">
        <li><label>服务人：</label><span class="name colorRed">{{wokerName.worker}}</span></li>
        <li><label>服务态度：</label><span><i v-for="n in 5" class="iconfont icon-shoucang1 starOne" :class="n<=scoreOne?'iconOr':''" @click="changeStar(n,0)"></i></span></li>
        <li><label>服务质量：</label><span><i v-for="m in 5" class="iconfont icon-shoucang1 starTwo" :class="m<=scoreTwo?'iconOr':''" @click="changeStar(m,1)"></i></span></li>
        <li><label>评价：</label><textarea v-model="evalCont"></textarea></li>
      </ul>
      <button class="sbmBtn" @click="subEval">提交</button>
    </div>
</template>
<script>
  import headerTop from '../../components/header'

  export default {
    name:'addEval',
    components:{headerTop},
    data(){
      return{
        wokerName:this.$route.query.workerInfo,
        scoreOne:0,
        scoreTwo:0,
        evalCont:''
      }
    },
    methods:{
      changeStar(ind,cl){
        if(cl==0){
          this.scoreOne=ind;
        }else if(cl==1){
          this.scoreTwo=ind;
        }
      },
      subEval(){
        this.$router.go(-1);
      }
    },
    mounted(){

    },
  }
</script>
<style lang="scss">
  @import "../../style/mixin";
  .addNewEval{
    .evalCont{
      padding:0.1rem 0.2rem;
      li{
        height:0.4rem;
        label{
          display: inline-block;
          vertical-align: top;
          width:0.8rem;
          text-align: right;
        }
        .iconfont{
          margin:0;
          font-size: 0.2rem;
          color:$bgGray;
        }
        .iconOr{
          color:$orageColor;
        }
      }
      li:nth-last-of-type(1){
        height:0.8rem;
        textarea{
          height:0.8rem;
          width:1.8rem;
        }
      }
    }
    .sbmBtn{
      width:2rem;
      height:0.4rem;
      margin:0.2rem auto;
      background: $greenColor;
      border:none;
      box-shadow: none;
      border-radius: 0.1rem;
      font-size:0.18rem;
      color: $wriColor;
    }

  }
</style>
