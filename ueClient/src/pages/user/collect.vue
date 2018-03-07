<template>
  <div class="collect">
    <header-top head-title="收藏列表" class="" if-have-back="true"></header-top>
    <div class="collectContent" v-if="ifHaveCollect">
        <div v-for="item in collectList" :key="item.num" class="oneCollect" @click="goDetail(item)">
            <img :src="item.photo" />
            <p>{{item.name}}</p>
            <p class="colorRed">￥{{item.price}}</p>
        </div>
    </div>
    <div class="collectContent" v-if="!ifHaveCollect" >
      <img class="sigeImg" src="../../assets/icon/sige.png"/>
      <i class="iconfont icon-gantanhao sigeI"></i>
      <span class="sigeText">您还没喜欢的人，赶快去看看吧。</span>
    </div>
  </div>
</template>
<script>
  import headerTop from '../../components/header'

  import { getCollect } from '../../service/getData'

  export default {
    name: 'collect',
    components: {headerTop},
    data(){
      return{
        ifHaveCollect:true,
        collectList:[]
      }
    },
    methods:{
      async getCollectData(){
        let res=await getCollect();
        this.collectList=this.collectList.concat(res);
      },
      goDetail:function (params) {
        this.$router.replace({
          path: '/Detail',
          name:'Detail',
          params:{
            name:params.name
          },
          query:{
            thePersonInfo:params ,
          }
        });
      }

    },
    mounted(){
      this.getCollectData();
    }
  }

</script>
<style lang="scss">
  @import "../../style/mixin";
  .collect{
    .collectContent{
      padding:0 0.2rem;
      /*没有收藏*/
      .sigeImg{
        width:1.5rem;
        height:1.5rem;
        display: block;
        margin:0.5rem auto;
      }
      .sigeI{
        display: inline-block;
        width:0.3rem;
        height:0.3rem;
        line-height: 0.3rem;
        text-align: center;
        margin-left: 0.5rem;
        border:0.02rem solid $redColor;
        border-radius: 50%;
        font-size: 0.16rem;
        font-weight: 600;
        color:$redColor;
      }
      .sigeText{
        color:$bgGray
      }

      /*有收藏数据*/
      .oneCollect{
        display: inline-block;
        width:1.35rem;
        margin-top:0.1rem;
        border:1px solid $bgGray;
        text-align: center;
        img{
          width:1rem;
          margin:0.1rem auto;
        }
      }
      .oneCollect:nth-of-type(odd){
        margin-right:0.1rem;
      }

    }
  }
</style>
