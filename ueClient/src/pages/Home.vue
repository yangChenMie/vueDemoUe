<template>
  <div class="Home" >
    <header-top head-title="" if-first-tiltle="true"></header-top>
    <div class="main homeMain" >
      <!--轮播图-->
      <div class="slideGo">
        <swiper :options="swiperOption"  ref="mySwiper">
          <swiper-slide v-for="slide in swiperSlides" v-bind:key="slide" class="oneSlide">
              <img :src="slide"/>
              <div class="bannerText">
                <p>搬家、家政、保姆、月嫂</p>
                就找<span>优E家</span>
              </div>
          </swiper-slide>
          <!-- 这是轮播的小圆点 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- 以下控件元素均为可选 -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      <!--  <div class="swiper-scrollbar"  slot="scrollbar"></div>-->
        </swiper>
      </div>
      <div class="gol"><span class="colorRed"><i class="iconfont icon-llb"></i>招聘：</span>诚心招聘家政阿姨、搬家师傅、保姆！</div>
      <div class="navList clearFloat">
        <router-link to="/Home/companyCulture">
        <div>
          <p class="">！</p>
          <p>公司文化</p>
        </div>
        </router-link>
        <router-link to="/Home/companyServe">
        <div>
          <p class="">？</p>
          <p>服务项目</p>
        </div>
        </router-link>
      </div>
      <div class="hotMain">
        <div class="hotTitle">
          ----为您推荐----
        </div>
        <div class="mainAndNav">
            <div class="changeNav">
              <p @click="changePostOfDuty(1)" :class="oneTab=='金牌搬家'?'active':''"> 金牌搬家</p>
              <p @click="changePostOfDuty(2)" :class="oneTab=='全能阿姨'?'active':''"> 全能阿姨</p>
              <p @click="changePostOfDuty(3)" :class="oneTab=='优质保姆'?'active':''"> 优质保姆</p>
            </div>
            <ul class="mainBox">
              <li v-for="item in hotListArr" v-bind:key="item.num" class="oneHotPerson" @click="goDetail(item)">
                <p class="num"><i :class="{numOne:item.num==1,numTwo:item.num==2,numThree:item.num==3}"></i></p>
                <dl class="oneHotPerson">
                  <!--用表达式的时候，图片路径不能用相对路径，放入static-->
                  <dt><img :src="item.photo" :onerror="imgUrl"/> </dt>
                  <dd class="onePersonName colorRed">
                    {{item.name}}
                  </dd>
                </dl>
              </li>
            </ul>
        </div>
      </div>

    </div>
    <footer-section></footer-section>
  </div>

</template>

<script>
  import headerTop from '../components/header'
  import footerSection from '../components/footerSection'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { getHotPerson,getTest } from '../service/getData'

  require('swiper/dist/css/swiper.css');
  export default {
  name: 'home',
  components: {footerSection,headerTop,swiper, swiperSlide},
  data () {
    return {
      imgUrl : 'this.src="' + require('../assets/icon/photo.png') + '"',
      swiperOption: {
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: 3000,
        // direction : 'vertical',
        effect:"coverflow",
        grabCursor : true,
        setWrapperSize :true,
         autoHeight: true,
        // paginationType:"bullets",
        pagination : '.swiper-pagination',
        paginationClickable :true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        // scrollbar:'.swiper-scrollbar',
        mousewheelControl : true,
        observeParents:true,
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        // debugger: true,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        // onTransitionStart(swiper){
        //   console.log(swiper)
        // },
      },
      swiperSlides: ["/static/image/banner/banner1.png","/static/image/banner/banner2.png","/static/image/banner/banner3.png"],
      hotListArr:[],
      oneTab:"金牌搬家"
    }
  },
  computed: {
    //实时计算
    swiper() {
      return this.$refs.mySwiper.swiper;
    },

  },
  methods :{
    //方法
    async initData(postOfDuty){
      let  res=await getHotPerson();
      for(var i=0;i<res.length;i++){
        if(postOfDuty===res[i].postOfDuty){
          this.hotListArr.push(res[i]);
        }
      }
    },
    changePostOfDuty:function(pram){
      switch(pram)
      {
        case 1:
          this.oneTab="金牌搬家";
          this.hotListArr=[];
          this.initData(this.oneTab);
          break;
        case 2:
          this.oneTab="全能阿姨";
          this.hotListArr=[];
          this.initData(this.oneTab);
          break;
        case 3:
          this.oneTab="优质保姆";
          this.hotListArr=[];
          this.initData(this.oneTab);
          break;
        default:
          this.oneTab="金牌搬家";
          this.hotListArr=[];
          this.initData(this.oneTab);
      }
    },
    goDetail:function (params) {
      this.$router.push({
        path: '/Detail',
        name:'Detail',
//        params:{
//          name:params.name
//        },
        query:{
          thePersonInfo:params ,
        }
      });
    },
    async test(){
      let  res2=await getTest();
      console.log(res2);
    }
  },
  mounted () {
    //发起后端请求，拿回数据
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
//    this.swiper.slideTo(4, 1000, false);
    this.initData(this.oneTab);
    this.test();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../style/mixin";
  .Home{
    .slideGo{
      .oneSlide{
        float: left;
        height:1.2rem;
        position: relative;
        img{
          width:100%;
          height: 1.2rem;
        }
        .bannerText{
          width:100%;
          position: absolute;
          top:0.3rem;
          text-align: center;
          color:black;
          font-size: 0.18rem;
          p{
            color:$orageColor;
            width:100%;
            margin-bottom: 0.1rem;
          }
          span{
            font-size: 0.24rem;
            margin-left: 0.05rem;
            color:$greenColor;
          }
        }
      }

      .swiper-button-prev, .swiper-button-next{
        -webkit-background-size: 20px 30px;
        background-size: 20px 30px;
      }
    }
    .main{
      .gol{
        padding-left:0.1rem;
        height:0.3rem;
        line-height: 0.3rem;
        font-size:0.12rem;
        width: 100%;
        background: $bgGray;
        opacity: 0.5;
        margin-bottom: 0.1rem;
      }
      .navList{
        padding:0.1rem 0.3rem;
        div{
          width:50%;
          float: left;
          p{
            width:70%;
            height:0.3rem;
            line-height: 0.3rem;
            margin:0 auto;
            text-align: center;
            background: $wriColor;
            opacity: 0.7;
          }
          p:first-of-type{
            font-size: 0.3rem;
            font-weight: 700;
            width:0.4rem;
            height:0.4rem;
            line-height: 0.4rem;
            border-radius: 50%;
            background: $greenColor;
            color:$wriColor;
          }
          p:last-of-type{
            /*color:$orageColor;*/
          }
        };
      }
      .hotMain{
        border-bottom: 2px solid $bgGray;
        .hotTitle{
          text-align: center;
          font-size: 0.14rem;
          font-weight: 700;
          height: 0.4rem;
          color: $orageColor;
          background: $lightGray;
          line-height: 0.4rem;
          border-bottom: 2px solid $bgGray;
        }
        .mainAndNav{
          display: flex;
          .changeNav{
            flex:1;
            background: $bgGray;
            border-right: 2px solid $bgGray;
            /*opacity: 0.5;*/
            text-align: center;
            p{
              height:0.6rem;
              line-height: 0.6rem;
            }
          }
          .active{
            background: $wriColor;
            color:$orageColor;
          }
          .mainBox{
            background: $wriColor;
            flex:3;
            display: flex;
            li{
              flex:1;
              .num{
                height:0.6rem;
                padding:0.1rem;
                i{
                  display: block;
                  width:0.4rem;
                  height:0.4rem;
                  background-size: 0.4rem;
                }
                .numOne{
                  background: url("../assets/icon/oneA2.png") no-repeat;
                  background-size: 0.4rem;
                }
                .numTwo{
                  background: url("../assets/icon/twoA2.png") no-repeat;
                  background-size: 0.4rem;
                }
                .numThree{
                  background: url("../assets/icon/threeA2.png") no-repeat;
                  background-size: 0.4rem;
                }

              }
              .oneHotPerson{
                height:1.2rem;
                img{
                  width:0.6rem;
                  height:0.6rem;
                  border-radius: 50%;
                  border:1px solid $wriColor;
                  margin:0 auto;
                }
                .onePersonName{
                  height:0.6rem;
                  text-align: center;
                  line-height: 0.6rem;
                }
              }
            }
          }
        }
      }
    }
  }


</style>
