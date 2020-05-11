<template>
  <div class="about">
    <div class="user-login" v-if="token == ''||token==null">
      <div class="header">
        <h3>用户登录</h3>
        <button @click="LoginX">github</button>
        <van-image
          round
          v-show="!showPasswdImg"
          fit="cover"
          width="100"
          height="100"
          :src="require('../assets/login-icon.png')"
        />
        <van-image
          round
          v-show="showPasswdImg"
          fit="cover"
          width="100"
          height="100"
          :src="require('../assets/passwd-icon.png')"
        />
      </div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          @focus="toggleImg"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          @focus="toggleImg"
          @blur="toggleImg"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div>
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
    <div class="user-status" v-else>
      <van-cell title="单元格" is-link />
      <van-cell title="单元格" is-link />
      <van-cell title="单元格" is-link />
      <van-cell title="单元格" is-link />
    </div>
  </div>
</template>
<script>
import { Button, Form, Field, Image as VanImage, Toast, Cell } from "vant";
import { Login, LoginX } from "../api/index";
import { mapState } from "vuex";
export default {
  components: {
    "van-button": Button,
    "van-form": Form,
    "van-field": Field,
    "van-image": VanImage,
    "van-cell": Cell
  },
  data() {
    return {
      showPasswdImg: false,
      imgPath: "",
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["token"])
  },
  methods: {
    LoginX() {
      let p = {
        path: "http://localhost:8080" // + this.$route.fullPath
      };
      LoginX(p).then(res => {
        console.log(res);
        // debugger;
        window.location.href = res.path;
      });
    },
    toggleImg() {
      this.showPasswdImg = !this.showPasswdImg;
    },
    onSubmit(values) {
      let p = {
        name: this.username,
        password: this.password
      };
      Login(p).then(res => {
        console.log(res);
        if (res.code !== 0) {
          Toast({
            message: res.msg,
            duration: 1000,
            forbidClick: true
          });
        } else {
          if (res.data.token) {
            //存储在本地的localStograge中
            this.$store.commit("setToken", res.data.token);
            //跳转至其他页面
            let redirect = decodeURIComponent(
              this.$route.query.redirect || "/"
            );
            this.$router.push({
              path: redirect
            });
          }
          // this.$router.push("/");
        }
      });
      console.log("submit", values);
    }
  }
};
</script>
<style lang="scss">
</style>