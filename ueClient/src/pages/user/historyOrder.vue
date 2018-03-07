<template>
  <div class="historyOrder">
    <header-top head-title="预约历史" class="" if-have-back="true"></header-top>
    <ul class="orderList">
      <li v-for="item in orderList" :key="item.worker" class="onOrder">
        <div class="clearFloat oneWrap"><p class="fl worker colorRed">{{item.worker}}</p><p class="fr date">{{item.date}}</p></div>
        <div class="clearFloat twoWrap"><p class="oneClass fl">{{item.classfiy}}</p><p class="fr time">{{item.time}}</p></div>
        <div class="clearFloat threeWrap"><p class="fr orderBtn"><a>再预约</a>
          <a v-if="item.state==!0">已评价</a>
          <router-link v-if="item.state==0" :to="{path:'/addEval',query: {workerInfo: item}}">评价</router-link>
        </p></div>
      </li>
    </ul>
  </div>
</template>
<script>
  import headerTop from '../../components/header'

  import { getAllMsg } from '../../service/getData'

  export default {
    name: 'historyOrder',
    components: {headerTop},
    data(){
      return{
        orderList:[{
          'classfiy':'搬家服务',
          'worker':'李大哥',
          'date':'2017-08-19',
          'time':'一小时',
          'state':'0'
        },{
          'classfiy':'搬家服务',
          'worker':'李大哥',
          'date':'2017-08-19',
          'time':'一小时',
          'state':'1'
        },{
          'classfiy':'搬家服务',
          'worker':'李大哥',
          'date':'2017-08-19',
          'time':'一小时',
          'state':'0'
        }],
      }
    }
  }

</script>
<style lang="scss">
  @import "../../style/mixin";
  .historyOrder{
    .orderList{
      background: $lightGray;
    }
    .onOrder{
      background: $wriColor;
      margin-bottom: 0.05rem;
      .oneClass{

      }
      .oneWrap,.twoWrap,.threeWrap{
        border-bottom: solid 1px $lightGray;
        padding:0.05rem 0.1rem;
      }
      .worker,.time{
        width: 50%;
        text-align: left;
      }
      .time{
        text-align: right;
      }
      .date{
        font-size: 0.1rem;
      }
      .orderBtn{
        a{
          display: inline-block;
          padding:0.02rem 0.05rem;
          border:1px solid $orageColor;
          border-radius: 0.1rem;
          margin-left:0.1rem;
          color:$orageColor;
        }
      }
    }
  }
</style>
