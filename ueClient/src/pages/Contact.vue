<template>
  <div class="Shop">
    <header-top  head-title="" if-first-tiltle="true"></header-top>
    <div class="main">
      <div class="mapContainer" id="mapContainer">
      </div>
      <div class="ourInfomation">
          <p><i class="iconfont icon-site2"></i>门店地址:<span class="ourAddrs">成都市XX区XX路XXXXX</span></p>
          <p><i class="iconfont icon-iconwomen"></i>联系人:<span class="ourName">某某某</span></p>
          <p><i class="iconfont icon-shouji"></i>联系电话:<span class="ourPhone">135-1282-1582</span></p>
      </div>
    </div>
    <footer-section></footer-section>
  </div>
</template>
<script>
  import headerTop from '../components/header'
  import footerSection from '../components/footerSection'

  export default {
    components: {footerSection,headerTop},
    name: 'Shop',
    data () {
      return {

      }
    },
    methods :{
      getMap:function (position) {
        var lat = position.coords.latitude;//y，纬度，通过上面的getCurrentPosition函数定位浏览器位置，从而获取地址
        var lon = position.coords.longitude;//x，经度
        var map = new BMap.Map("mapContainer");
        var point=new BMap.Point(lon, lat);
        map.centerAndZoom(point, 15);
        var marker = new BMap.Marker(point);        // 创建标注
        map.addOverlay(marker);
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.ScaleControl());
        map.addControl(new BMap.OverviewMapControl());
        map.addControl(new BMap.GeolocationControl());
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("成都");
      },
      enterMap:function () {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getMap);
        } else {
          alert("您的浏览器不支持地理定位");//不支持
        }
      }
    },
    mounted(){
      this.enterMap();
    }
  }
</script>
<style lang="scss">
  @import "../style/mixin";
  .mapContainer{
    height:3.4rem;
    background: url("../assets/master/bgMap.png");
    background-size: cover;
  }
  .ourInfomation{
    height:1.4rem;
    padding-left:0.2rem;
    padding-top: 0.2rem;
    p{
      .iconfont{
        color:$greenColor;
        font-size: 0.22rem;
      }
      height:0.3rem;
      line-height: 0.3rem;
      .ourAddrs{}
      .ourName{}
      .ourPhone{}
    }
  }
</style>

