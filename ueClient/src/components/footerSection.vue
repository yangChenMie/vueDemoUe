<template>
  <ul class="ulNav" id="footerSection">
      <li v-bind:class="[($route.path.indexOf('Home')!== -1||$route.path=='/')? 'active' : '']" ><router-link  class="linkFont"  to="/Home" ><i class="icon iconfont icon-home"></i><p>首页</p></router-link></li>
      <li v-bind:class="[$route.path.indexOf('List') !== -1? 'active' : '']" ><router-link class="linkFont"   :to="{path:'/List',query: {name: '123'}}"><i class=" icon iconfont icon-jiazheng1"></i><p>服务</p></router-link></li><!--传参数-->
      <li v-bind:class="[$route.path.indexOf('Contact') !== -1? 'active' : '']" ><router-link class="linkFont"  to="/Contact"><i class="icon iconfont icon-ccgl-dizhichaxun-11"></i><p>联系我们</p></router-link></li>
      <li v-bind:class="[$route.path.indexOf('Mine') !== -1? 'active' : '']" ><router-link  class="linkFont" to="/Mine"><i class="icon iconfont icon-wode"></i><p>我的</p></router-link></li>
    </ul>
</template>
<script>
  export default {
    data () {
      return {

      }
    },
    methods :{

    },
    mounted () {

    },
  };
</script>

<style lang="scss">
  @import "../style/mainStyle";

</style>

