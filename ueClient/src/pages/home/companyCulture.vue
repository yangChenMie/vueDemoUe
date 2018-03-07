<template>
  <div class="companyCulture">
    <header-top head-title="公司文化" class="" if-have-back="true"></header-top>
    我们公司....

  </div>
</template>
<script>
  import headerTop from '../../components/header'
  export default {
    name:'companyCulture',
    components: {headerTop},
    data(){
      return{

      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";
</style>
