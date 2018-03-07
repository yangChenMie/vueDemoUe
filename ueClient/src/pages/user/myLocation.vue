<template>
  <div class="myLocation">
    <header-top head-title="地址管理" class="" if-have-back="true"></header-top>
    <div class="addAdress" @click="editLoc(0,{})"><i class="iconfont add">+</i>新增地址</div>
    <ul class="locationList">
      <li v-for="(item,index) in locationList" :key="index" class="oneLocation">
        <div class="nameAndPhone clearFloat">
          <p class="fl name">{{item.name}}</p>
          <p class="fr phone">{{item.phone}}</p>
        </div>
        <div class="address">{{item.address}}</div>
        <div class="btns ">
          <p class="setDefau" :class="item.state?'stateActive':''" @click="setLocState(index)"><i  class="iconfont icon-duoxuankuang"  :class="item.state?'icon-duoxuankuang1':''"></i>{{item.state?"默认地址":"设为默认"}}</p>
          <p class="" @click="editLoc(1,item)"><i class="iconfont icon-pingjia-copy"></i>编辑</p>
          <p class="" @click="deleteLoc(index)"><i class="iconfont icon-shanchu"></i>删除</p></div>
      </li>
    </ul>
    <v-dialog v-show="showDialog" :dialog-option="dialogOption" ref="dialog">
      <div style="height:150px;" v-if="ifEdit">
        <p style="height:25px;"><label style="height:20px;width:50px;display: inline-block">联系人</label><input type="text" v-model="thisname" style="width:150px;border:none;border-bottom: 1px solid #cdcdcd;height:20px;"/></p>
        <p style="height:25px;"><label style="height:20px;width:50px;display: inline-block">电话</label><input type="text" v-model="thisphone"  style="width:150px;border:none;border-bottom: 1px solid #cdcdcd;height:20px;"/></p>
        <p style="height:70px;margin-top:15px;"><label style="width:50px;display: inline-block;vertical-align: top;">地址</label><textarea v-model="thisadress"  style="width:150px;height:60px;border:1px solid #cdcdcd;box-shadow: none;"></textarea></p>
      </div>
    </v-dialog>
  </div>
</template>
<script>
  import headerTop from '../../components/header'
  import  vDialog from '../../components/dialog.vue'

  import { getAllMsg } from '../../service/getData'

  export default {
    name: 'myLocation',
    components: {headerTop,vDialog},
    data(){
      return{
        ifEdit:false,
        thisname:'',
        thisphone:'',
        thisadress:'',
        showDialog:false,
        locationList:[{
          'state':true,
          'name':'羊羊羊',
          'phone':'13513612525',
          'address':'四川省成都市武侯区天府二街蜀都中心2期'
        },{
          'state':false,
          'name':'羊羊羊',
          'phone':'13513612525',
          'address':'四川省成都市武侯区天府二街蜀都中心2期'
        },{
          'state':false,
          'name':'羊羊羊',
          'phone':'13513612525',
          'address':'四川省成都市武侯区天府二街蜀都中心2期'
      }],
        dialogOption: {
          title: '温馨提示',
          content: "...",
          cancelButtonText: '取消',
          confirmButtonText: '确定',
          ifShowCancel:false,
          ifShowConfirm:false,
        }
      }
    },
    methods:{

      editLoc: function(m,item) {
        this.showDialog = true;
        this.ifEdit=true;
        if(m==1){
          this.thisname=item.name;
          this.thisphone=item.phone;
          this.thisadress=item.address;
          this.dialogOption={
            title: '编辑地址',
            content:'',
            cancelButtonText: '取消',
            confirmButtonText: '确定',
            ifShowCancel:true,
            ifShowConfirm:true,
          };
        }else{
          this.dialogOption={
            title: '新增地址',
            content:'',
            cancelButtonText: '取消',
            confirmButtonText: '确定',
            ifShowCancel:true,
            ifShowConfirm:true,
          };
        }
        this.$refs.dialog.confirm().then(() => {
          this.showDialog = false;
          this.ifEdit=false;
          if(m==1){
          item.name=this.thisname;
          item.phone=this.thisphone;
          item.address=this.thisadress;
          }else{
            this.locationList.push({
              'state':false,
              'name':this.thisname,
              'phone':this.thisphone,
              'address':this.thisadress});
          }
        }).catch(() => {
          this.showDialog = false;
          this.ifEdit=false;
        })
      },
      //      删除弹出框
      deleteLoc: function(i) {
        var flag=this.locationList[i].state;
        this.showDialog = true;
        this.dialogOption={
          title: '删除常用地址',
          content: "确认删除?",
          cancelButtonText: '取消',
          confirmButtonText: '确定',
          ifShowCancel:true,
          ifShowConfirm:true,
        };
        this.$refs.dialog.confirm().then(() => {
          this.showDialog = false;
          this.locationList.splice(i,1);
          if(flag){
            this.locationList[0].state=true;
          }
        }).catch(() => {
          this.showDialog = false;
        })
      },
      setLocState:function (i) {
        var flag=this.locationList[i].state;
        for(var j=0;j<this.locationList.length;j++){
          this.locationList[j].state=false;
        }
        this.locationList[i].state=!flag;
        this.$set(this.locationList, i, this.locationList[i]);
      }
    }
  }

</script>
<style lang="scss">
  @import "../../style/mixin";
  .addAdress{
    height:0.4rem;
    text-align: center;
    line-height: 0.4rem;
    .add{
      font-size:0.24rem;
      vertical-align: top;
    }
  }
  .locationList{
    background: $lightGray;
    .oneLocation{
      margin-top:0.05rem;
      margin-bottom:0.1rem;
      background: $wriColor;
      .nameAndPhone{
        padding:0.1rem;
        .name{}
        .phone{}
      }
      .address{
        border-bottom: 1px solid $lightGray;
        padding:0.1rem;
      }
      .btns{
        display: flex;
        padding:0.1rem;
        p{
          flex:1;
          font-size: 0.12rem;
          text-align: right;
        }
        .setDefau{
          flex:2;
          text-align: left;
          i{
            vertical-align: middle;
          }
        }
        .stateActive{
          color:$orageColor;
        }
      }
    }
  }
</style>
