
<template>
  <div id="app">
    <router-view class="mainView">

    </router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods :{
    changeActive:function (e) {
      console.log(e);
    }
  },
  mounted () {
  },
};
</script>

<style lang="scss">
@import "style/mainStyle";

</style>

