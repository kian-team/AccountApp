<template>
  <div class="footer">
    <van-tabbar route v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item icon="home-o" replace to="/" >首页</van-tabbar-item>
      <van-tabbar-item icon="chart-trending-o" replace to="/info" >明细</van-tabbar-item>
      <van-tabbar-item icon="balance-o" replace to="/about" >记账</van-tabbar-item>
      <van-tabbar-item icon="contact" replace to="/user" >我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem
  },
  data(){
    return{

      active:0
    }
  }
};
</script>

<style lang="scss" scoped>
</style>