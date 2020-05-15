<template>
  <div class="addaccount">
    <van-nav-bar title="记录" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
      </template>
    </van-nav-bar>
    <nav>
      <van-tabs type="card" animated title-active-color="#ffcccc">
        <van-tab title="Pay" title-style>
          <nav>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="blue">
              <van-swipe-item>
                <van-grid :gutter="10">
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                </van-grid>
              </van-swipe-item>
              <van-swipe-item>
                <van-grid :gutter="10">
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                </van-grid>
              </van-swipe-item>
            </van-swipe>
          </nav>
        </van-tab>
        <van-tab title="Earn">
          <nav>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
              <van-swipe-item>
                <van-grid>
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                </van-grid>
              </van-swipe-item>
              <van-swipe-item>2</van-swipe-item>
              <van-swipe-item>3</van-swipe-item>
              <van-swipe-item>4</van-swipe-item>
            </van-swipe>
          </nav>
        </van-tab>
      </van-tabs>
    </nav>
    <nav>
      <van-field
        readonly
        clickable
        :value="value"
        placeholder="请输入金额"
        @touchstart.native.stop="show = true"
      />
      <van-number-keyboard
        :show="show"
        theme="custom"
        extra-key="."
        close-button-text="完成"
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
        v-model="value"
      />
    </nav>
  </div>
</template>

<script>
import {
  NavBar,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  NumberKeyboard,
  Toast,
  Field
} from "vant";
import { GetIcon } from "../api/index";
export default {
  components: {
    "van-nav-bar": NavBar,
    "van-tab": Tab,
    "van-tabs": Tabs,
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
    "van-grid": Grid,
    "van-grid-item": GridItem,
    "van-number-keyboard": NumberKeyboard,
    "van-field": Field
  },
  data() {
    return {
      show: true,
      value: "",
      icons: []
    };
  },
  methods: {
    GetIcon() {
      GetIcon(res => {
        this.icons = res;
      });
    },
    onClickLeft() {
      Toast("返回");
      this.$router.push("/");
    },
    onClickRight() {
      Toast("按钮");
    },
    onInput(value) {
      Toast(value);
    },
    onDelete() {
      Toast("删除");
    }
  },
  mounted() {
    this.$store.commit('toggleAddBtn', false);
    this.GetIcon();
  }
};
</script>

<style lang="scss" >
.addaccount {
  .van-tabs__nav--card {
    border: none !important;
    .van-tab.van-tab--active {
      background-image: linear-gradient(135deg, #43cbff 10%, #9708cc 100%);
    }
    &.van-tab {
      border-right: none;
    }
  }
  // .my-swipe .van-swipe-item {
  //   color: #fff;
  //   font-size: 20px;
  //   // line-height: 150px;
  //   text-align: center;
  //   background-color: #39a9ed;
  // }
}
</style>