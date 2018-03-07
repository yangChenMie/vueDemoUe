<template>
  <div class="managementEve">
    <header-top head-title="评价管理" class="" if-have-back="true"></header-top>
    <ul class="eveList">
      <li class="oneEve" v-for="item in evelList" :key="item.worker">
        <div class="clearFloat oneWrap"><p class="fl worker colorRed">{{item.worker}}</p><p class="fl classfiy">{{item.classfiy}}</p><p class="fl time">/{{item.time}}</p></div>
        <div class="eveCont">
          {{item.evelCont}}
        </div>
        <div class="threeWrap">
          <p class="fl date">{{item.date}}</p>
          <p class="fl">点赞{{item.goodUse}}次  评论{{item.ques}}次</p>
          <p class="fr reEve"><a>追评</a></p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import headerTop from '../../components/header'

  import { getAllMsg } from '../../service/getData'

  export default {
    name: 'managementEvel',
    components: {headerTop},
    data(){
      return{
          evelList:[{
            'classfiy':'搬家服务',
            'worker':'李大哥',
            'date':'2017-08-19',
            'time':'一小时',
            'evelCont':'非常好非常非常好非常好非常非常好非常好非常非常好非常好非常非常好非常好非常非常好非常好非常非常好非常好非常非常好非常好非常非常好非常好非常非常好',
            'goodUse':3,
            'ques':2
          },{
            'classfiy':'搬家服务',
            'worker':'李大哥',
            'date':'2017-08-19',
            'time':'一小时',
            'evelCont':'非常好非常非常好',
            'goodUse':3,
            'ques':5
          }],
      }
    }
  }

</script>
<style lang="scss">
  @import "../../style/mixin";
  .managementEve{
    .eveList{
      background: $lightGray;
      .oneEve{
        background: $wriColor;
        margin-bottom: 0.05rem;
        .oneWrap{
          height:0.3rem;
          line-height: 0.3rem;
          font-size: 0.12rem;
          border-bottom: 1px dashed $bgGray;
          .worker{
            font-size: 0.16rem;
            width:40%;
            padding:0 0.1rem;
          }
          .classfiy{}
          .time{}
        }
        .eveCont{
          padding:0.05rem 0.1rem;
          border-bottom: 1px dashed $bgGray;
          text-indent: 0.26rem;
          /*height:0.6rem;*/
          font-size: 0.14rem;
          line-height: 0.2rem;
          display: -webkit-box;
          overflow: hidden;
          white-space: normal!important;
          text-overflow: ellipsis;
          word-wrap: break-word;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .threeWrap{
          padding:0 0.1rem;
          font-size: 0.12rem;
          height:0.3rem;
          line-height: 0.3rem;
          .date{
            width:0.8rem;
          }
          .reEve{
            height:0.3rem;
            a{
              line-height: 0.15rem;
              display: inline-block;
              padding:0.01rem 0.05rem;
              border:1px solid $orageColor;
              border-radius: 0.1rem;
              color:$orageColor;
              margin-top:0.05rem;
            }
          }
        }
      }
    }
  }
</style>
