<template>
  <div class="about">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
    </van-dropdown-menu>
    <van-empty v-show="false" description="空空如也" />
    <van-tabs type="card" @click="onClick" v-model="active">
      <van-tab title="类型">
        <div>类型</div>
      </van-tab>
      <van-tab title="趋势">
        <van-sticky z-index="10000">
          <div>趋势</div>
          <div>
            <ve-line :data="chartData" :settings="chartSettings"></ve-line>
          </div>
        </van-sticky>
        <div>
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell v-for="item in list" :key="item" :title="item" />
          </van-list>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import {
  DropdownMenu,
  DropdownItem,
  Empty,
  Tab,
  Tabs,
  List,
  Cell,
  Sticky,
  Toast
} from "vant";
import VeLine from "v-charts/lib/line.common";
export default {
  components: {
    "van-dropdown-menu": DropdownMenu,
    "van-dropdown-item": DropdownItem,
    "van-empty": Empty,
    "van-tabs": Tabs,
    "van-tab": Tab,
    "van-list": List,
    "van-cell": Cell,
    "van-sticky": Sticky,
    VeLine
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      active: "",
      value1: 0,
      option1: [
        { icon: "pending-payment", text: "支出", value: 0 },
        { icon: "paid", text: "收入", value: 1 }
      ],
      chartSettings: {
        stack: { 用户: ["访问用户", "下单用户"] },
        area: true
      },
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      }
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onClick(name, title) {
      Toast(title);
      if (title == "周") {
        this.$set(this.config, "data", {
          labels: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          datasets: [
            {
              label: "支出",
              data: [30, 70, 200, 300, 500, 800, 1500]
            },
            {
              label: "收入",
              data: [1000, 1000, 3000, 700, 800, 1000, 5000]
            }
          ]
        });
      } else if (title == "月") {
        this.config = {
          title: "消费趋势分析",
          xLabel: "天",
          yLabel: "￥ 元",
          data: {
            labels: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            datasets: [
              {
                label: "支出",
                data: [30, 70, 200, 300, 500, 800, 1500]
              },
              {
                label: "收入",
                data: [1000, 1000, 3000, 700, 800, 1000, 5000]
              }
            ]
          }
        };
      } else {
        this.config = {
          title: "消费趋势分析",
          xLabel: "月份",
          yLabel: "￥ 元",
          data: {
            labels: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12"
            ],
            datasets: [
              {
                label: "支出",
                data: [
                  30,
                  70,
                  200,
                  300,
                  500,
                  800,
                  1500,
                  2900,
                  5000,
                  8000,
                  9000,
                  10000
                ]
              },
              {
                label: "收入",
                data: [
                  1000,
                  1000,
                  3000,
                  700,
                  800,
                  1000,
                  5000,
                  8000,
                  4000,
                  1500,
                  3000,
                  5000
                ]
              }
            ]
          }
        };
      }
    }
  }
};
</script>
<style lang="scss">
</style>