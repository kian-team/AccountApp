<template>
  <div class="home">
    <van-row>
      <van-col span="8">
        <van-cell title="请选择日期"  @click="show = true" />
      </van-col>
      <van-col span="16">{{currentDate}}</van-col>
    </van-row>

    <nav>
      <van-list
        v-if="list.length !== 0"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="(item, index) in list"
          :key="index"
          :title="item.account_name"
          :value="item.account_money"
        />
      </van-list>
      <van-empty v-else description="空空如也" />
    </nav>
    <div>
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
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Col, Row, DatetimePicker, List, Cell, Empty, Toast } from "vant";
import { AccountList } from "../api";

export default {
  name: "Home",
  components: {
    "van-col": Col,
    "van-row": Row,
    "van-datetime-picker": DatetimePicker,
    "van-list": List,
    "van-cell": Cell,
    "van-empty": Empty
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
  methods: {
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
        this.getData();

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 0) {
          this.finished = true;
        }
      }, 1000);
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
