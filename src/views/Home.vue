<template>
  <div class="home">
    <van-sticky :offset-top="0">
      <div class="header">
        <van-row>
          <van-col span="4">
            <van-cell class="setting-icon" icon="setting-o" />
          </van-col>
          <van-col span="16">
            <van-cell
              :title="currentTime"
              @click="show = true"
              is-link
              arrow-direction="down"
            />
            <!-- <van-dropdown-menu>
          <van-dropdown-item v-model="value2" :options="option2" />
            </van-dropdown-menu>-->
          </van-col>
          <van-col span="4">
            <van-cell icon="bar-chart-o" @click="routerInfo" />
          </van-col>
        </van-row>
      </div>
    </van-sticky>
    <!-- <van-row>
      <van-col span="8">
        <van-cell title="请选择日期" @click="show = true" />
      </van-col>
      <van-col span="16">{{currentDate}}</van-col>
    </van-row>-->

    <nav>
      <van-list
        v-if="list.length !== 0"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-swipe-cell v-for="(item, index) in list" :key="index">
          <van-cell>
            <template #icon>
              <van-image width="50" height="50" :src="item.photo" />
              <!-- <van-icon name="search" style="line-height: inherit;" /> -->
            </template>
            <template #title>
              <span class="custom-title">{{item.title}}</span>
            </template>
            <template #label>
              <span class="custom-title">{{item.time}}</span>
            </template>
            <template #default>
              <span class="custom-title">-{{item.spend}}</span>
            </template>
          </van-cell>
          <template #right>
            <van-button square type="danger" text="删除" />
            <van-button square type="primary" text="收藏" />
          </template>
        </van-swipe-cell>
      </van-list>
      <van-empty v-else description="空空如也" />
    </nav>
    <div>
      <van-popup v-model="show" round position="bottom" :style="{ height: '30%' }">
        <van-datetime-picker
          v-show="show"
          v-model="currentDate"
          title="选择时间"
          type="year-month"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
          @confirm="confirm"
          @cancel="cancel"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  Col,
  Row,
  DatetimePicker,
  List,
  Cell,
  Empty,
  Toast,
  // DropdownMenu,
  // DropdownItem,
  Popup,
  Sticky,
  // Icon,
  SwipeCell,
  Button,
  Image as VanImage 
} from "vant";
import { AccountList, LoginCallBack, GetList } from "../api";

export default {
  name: "Home",
  components: {
    "van-col": Col,
    "van-row": Row,
    "van-datetime-picker": DatetimePicker,
    "van-list": List,
    "van-cell": Cell,
    "van-empty": Empty,
    // "van-dropdown-menu": DropdownMenu,
    // "van-dropdown-item": DropdownItem,
    "van-popup": Popup,
    "van-sticky": Sticky,
    // "van-icon": Icon,
    "van-swipe-cell": SwipeCell,
    "van-button":Button,
    "van-image": VanImage
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      date: "",
      show: false,
      minDate: new Date(1988, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
    };
  },
  computed: {
    currentTime() {
      return `${this.currentDate.getFullYear()}年${this.currentDate.getMonth() +
        1}月`;
    }
  },
  methods: {
    GetList() {
      GetList().then(res => {
        console.log(res);
        this.list = res;
      });
    },
    routerInfo() {
      this.$router.push("/info");
    },
    LoginCallBack() {
      LoginCallBack().then(res => {
        console.log(res);
        debugger;
      });
    },
    confirm() {
      this.show = false;
    },
    cancel() {
      this.show = false;
    },
    formatter(type, val) {
      if (type === "year") {
        return `${val}年`;
      } else if (type === "month") {
        return `${val}月`;
      }
      return val;
    },
    getData() {
      AccountList().then(res => {
        console.log(res);
        if (res.code !== 0) {
          Toast({
            message: res.msg,
            duration: 1000,
            forbidClick: true
          });
        } else {
          this.list = res.data.list;
        }
      });
    },
    formatDate(date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        let res = this.GetList();
        let list = this.list;
        this.list = [...res, ...list];
        // this.getData();

        // 加载状态结束
        this.loading = false;

        // // 数据全部加载完成
        // if (this.list.length >= 0) {
        //   this.finished = true;
        // }
      }, 1000);
    }
  },
  mounted() {
    // this.getData();
    this.GetList();
  }
};
</script>
<style lang="scss">
.home {
  .header {
    background: linear-gradient(135deg, #90f7ec 10%, #32ccbc 100%);
    .setting-icon {
      font-size: 20px;
      // color: #ffffff;
    }
  }
}
</style>
