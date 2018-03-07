<template>
  <div class="oneDetail">
    <header-top head-title="员工详情" class="" if-have-back="true"></header-top>
    <div class="scrollWrap" ref="scrollEval">
      <div class="slideGo">
        <swiper :options="swiperOption"  ref="mySwiper">
          <swiper-slide v-for="slide in swiperSlides" v-bind:key="slide" class="oneSlide">I'm Slide {{ slide }}</swiper-slide>
          <!-- 这是轮播的小圆点 -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="oneInfoAndEval">
        <div class="onesInfo">
            <p class="name colorRed">{{thePersonInfo.name}}</p>
            <div class="disFlex infoO">
              <p class="age">年龄：{{thePersonInfo.age}}</p>
              <p class="six"><i class="iconfont icon-xingbie3">:</i>{{thePersonInfo.six}}</p>
              <p class=" price">收费标准：<span class="colorRed">{{thePersonInfo.price}}</span></p>
            </div>
            <p class="discription">{{thePersonInfo.discription}}</p>
        </div>
        <div class="evaluate">
          <p class="evaluateTitle">评价({{evalList.length}})</p>
          <ul class="evaluateCon">
            <li class="oneEval" v-for="(item,index) in evalList">
                <div class="disFlex evalPerson">
                  <p class="evalPhoto"><img src="../../assets/icon/photo2.png"/> </p>
                  <p class="evalName">{{item.name}}</p>
                  <p class="evalScore"><span class="allStar"><span class="yeStarWrap"  :style="{width:item.score/5*0.96+'rem'}"></span></span></p>
                </div>
                <p class="content" @click="goEvalInfo(item)">
                  {{item.content}}
                </p>
                <div class="other clearFloat">
                  <p class="fl">{{item.date}}</p>
                  <p class="fr" @click="changeUser(index)"><i class="iconfont icon-dianzan" :class="ifUser[index]?'colorRed':''"></i>有用({{item.isUse}})</p>
                  <p class="fr"  @click="goEvalInfo(item)"><i class="iconfont icon-lianxi2"></i>提问({{item.isAsk}})</p>
                </div>
              </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="enjoyAndContact disFlex">
      <p class="enjoy" @click="changeEnjoy">
        <i class="iconfont icon-xihuan2" v-if="!ifLike"></i>
        <i class="iconfont icon-xihuan3" v-if="ifLike"></i>
        收藏
      </p>
      <p class="contact"><i class="iconfont icon-lianxiwomen"></i>联系我们</p>
      <p class="orderFor"><i class="iconfont icon-qicheqianlian-1"></i>预约</p>
    </div>
  </div>
</template>
<script>

  import headerTop from '../../components/header'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name:'detail',
    components:{headerTop,swiper, swiperSlide},
    data(){
      return{
        evalList:[{
          'name':'羊羊羊',
          'score':4.3,
          'date':'2019-07-05 20:08',
          'content':'哈哈哈哈哈哈哈哈哈哈啊哈,我就随便打电子试一下就好了，我看你们是加到就是收费i 说的将调档我和开始的，单身的覅偶发。到说翻就翻放假，抖擞is发发发韩国。',
          'isUse':7,
          'isAsk':1
        },{
          'name':'羊羊羊',
          'score':3.7,
          'date':'2019-07-05 20:08',
          'content':'哈哈哈哈哈哈哈哈哈哈啊哈,都怕的品味的可怕大家发的那等你撒大家是否上家公司不是废话就是改版多久啊啥的。',
          'isUse':5,
          'isAsk':6
        },{
          'name':'羊羊羊da',
          'score':4.6,
          'date':'2019-07-05 20:08',
          'content':'哈哈哈哈哈哈哈哈哈哈啊哈,我就随便打电子试一下就好了，我看你们是加到就是收费i 说的将调档我和开始的，单身的覅偶发。到说翻就翻放假，抖擞is发发发韩国。',
          'isUse':3,
          'isAsk':2
        }],
        thePersonInfo:this.$route.query.thePersonInfo,
        swiperSlides: [1, 2, 3, 4, 5],
        ifLike:false,
        ifUser:[false,false],
        swiperOption: {
          notNextTick: true,
          autoplay: 3000,
          effect:"coverflow",
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
        },
      }
    },

    methods:{
      changeEnjoy:function () {
        this.ifLike=!this.ifLike;
      },
      changeUser:function (i) {
        this.ifUser[i]=!this.ifUser[i];
        this.$set(this.ifUser, i, this.ifUser[i]);
      },
      goEvalInfo(ite){
        sessionStorage.setItem('pos', this.$refs.scrollEval.scrollTop);
        this.$router.replace({
          path: '/evalInfo',
          name:'evalInfo',
          query:{
            workerInfo:this.thePersonInfo ,
            evalCon:ite
          }
        });
      }
    },
    computed:{
      getThePersonInfo () {
        this.thePersonInfo=this.$route.query.thePersonInfo;
      },
      swiper() {
        return this.$refs.mySwiper.swiper;
      },
    },
    mounted(){
      if(sessionStorage.getItem('pos')){
        this.$refs.scrollEval.scrollTop = parseInt(sessionStorage.getItem('pos'));
        sessionStorage.removeItem("pos");
      }
    },
    watch: {
      // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
      '$route': 'getThePersonInfo'
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";
  .oneDetail{
    font-size: 0.12rem;
    color: $darkGray;
    display: flex;
    .scrollWrap{
      flex:1;
      overflow-y: auto;
      margin-bottom: 0.44rem;
      .slideGo{
        .oneSlide{
          float: left;
          height:1.5rem;
          background:$yellOrgColor ;
        }
      }
      .oneInfoAndEval{
        width:100%;
        background: $lightGray;
        .onesInfo{
          background: $wriColor;
          font-size: 0.12rem;
          text-align: center;
          border-bottom:1px dashed $greenColor;
          padding: 0.1rem 0;
          .name{
            font-size: 0.16rem;
            height:0.26rem;
            line-height: 0.26rem;
          }
          .infoO{
            height:0.26rem;
            line-height: 0.26rem;
            p{
              flex:1;
            }
            .age{

            }
            .price{
              flex:2;
            }
            .six{

            }
          }
          .discription{
            text-align: left;
            text-indent: 0.25rem;
          }
        }
        .evaluate{
          background: $wriColor;
          font-size: 0.12rem;
          margin-top: 0.2rem;
          padding-top:0.05rem;
          .evaluateTitle{
            padding:0 0.1rem;
            font-size: 0.14rem;
            line-height: 0.26rem;
            border-bottom: 1px solid $lightGray;
          }
          .evaluateCon{
            .oneEval{
              padding:0 0.1rem 0.1rem;
              border-bottom: 1px solid $lightGray;
              .evalPerson{
                border-bottom: 1px dashed $lightGray;
                padding:0.05rem 0;
                .evalPhoto{
                  width:0.4rem;
                  height:0.4rem;
                  border-radius: 50%;
                  border:1px solid $lightGray;
                  img{
                    border-radius: 50%;
                    width:0.4rem;
                    height:0.4rem;
                  }
                }
                .evalName{
                  flex: 1;
                  line-height: 0.4rem;
                  padding-left:0.1rem;
                }
                .evalScore{
                  flex:2;
                  padding-top:0.12rem;
                  .allStar{
                    margin:0 ;
                    width:0.96rem;
                    height: 0.16rem;
                    display: inline-block;
                    position: relative;
                    background: url("../../assets/star/starG.png") no-repeat ;
                    background-size: 0.96rem 0.16rem;
                    vertical-align: top;
                    .yeStarWrap{
                      height: 0.16rem;
                      display: inline-block;
                      position: absolute;
                      background: url("../../assets/star/starY.png") no-repeat ;
                      background-size: 0.96rem 0.16rem;
                    }

                  }
                }
              }
              .content{
                text-align: left;
                text-indent: 0.25rem;
                line-height: 0.2rem;
              }
              .other{
                p{
                  padding:0 0.1rem;
                  i{
                    font-size: 0.14rem;
                  }
                }
              }
            }
          }
        }

      }
    }
    .enjoyAndContact{
      height:0.44rem;
      line-height: 0.44rem;
      font-size: 0.14rem;
      text-align: center;
      position: fixed;
      bottom: 0;
      p{
        border-top:2px solid $greenColor;
        width:1rem;
        color: $greenColor;
        .iconfont{
          font-size: 0.24rem;
          margin-left: 0.05rem;
          font-weight: 800;
        }
      }
      .activeEnjoy{
        background: $greenColor;
      }
      p:nth-of-type(2){
        background: $greenColor;
        color:$wriColor;

      }
      p:nth-of-type(3){
        border:none;
        flex:1;
        color:$orageColor;
        font-weight: 600;
      }
    }
  }
</style>
