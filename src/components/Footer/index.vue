<template>
  <transition name="van-slide">
    <div class="footer" v-show="showAddBtn">
      <div class="icon">
        <div class="add" @click="AddAccount"></div>
      </div>
      <!-- <van-tabbar route v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="chart-trending-o" replace to="/info">明细</van-tabbar-item>
      <van-tabbar-item icon="balance-o" replace to="/about">记账</van-tabbar-item>
      <van-tabbar-item icon="contact" replace to="/user">我的</van-tabbar-item>
      </van-tabbar>-->
    </div>
  </transition>
</template>

<script>
// import { Tabbar, TabbarItem } from "vant";
import { mapState } from "vuex";
export default {
  // components: {
  //   "van-tabbar": Tabbar,
  //   "van-tabbar-item": TabbarItem
  // },
  data() {
    return {
      active: 0
    };
  },
  computed: mapState(["showAddBtn"]),
  methods: {
    AddAccount() {
      this.$router.push("/addaccount");
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  position: fixed;
  bottom: 0;
  display: flex;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, 0);
}
.add {
  margin: 0 auto;
  border: 1px solid;
  width: 50px;
  height: 50px;
  // color: #07c160;
  transition: color 0.25s;
  position: relative;
  border-radius: 50%;
  // background: #7fff00;
  color: #ffffff;
  background-image: linear-gradient(135deg, #abdcff 10%, #0396ff 100%);
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    transform: translate(-50%, -50%);
    border-top: 5px solid;
  }
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    height: 20px;
    transform: translate(-50%, -50%);
    border-left: 5px solid;
  }
}
</style>