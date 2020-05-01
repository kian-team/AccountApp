<template>
  <div class="about">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
    </van-dropdown-menu>
    <van-empty v-show="false" description="空空如也" />
    <van-tabs type="card" @click="onClick" v-model="active">
      <van-tab title="周">
        <div>
          <chartxkcd-line :config="config"></chartxkcd-line>
        </div>
      </van-tab>
      <van-tab title="月">
        <div>
          <chartxkcd-line :config="config"></chartxkcd-line>
        </div>
      </van-tab>
      <van-tab title="年">
        <div>
          <chartxkcd-line :config="config"></chartxkcd-line>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { DropdownMenu, DropdownItem, Empty, Tab, Tabs, Toast } from "vant";
import { chartXKCDLine } from "chart.xkcd-vue";
export default {
  components: {
    "chartxkcd-line": chartXKCDLine,
    "van-dropdown-menu": DropdownMenu,
    "van-dropdown-item": DropdownItem,
    "van-empty": Empty,
    "van-tabs": Tabs,
    "van-tab": Tab
  },
  data() {
    return {
      value1: 0,
      option1: [
        { icon: "pending-payment", text: "支出", value: 0 },
        { icon: "paid", text: "收入", value: 1 }
      ],
      config: {
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
      }
    };
  },
  methods: {
    onClick(name, title) {
      Toast(title);
      if (title == "周") {
        this.$set(this.config, 'data', {
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
          })
      } else if (title == "月") {
        this.config = {
          title: "消费趋势分析",
          xLabel: '天',
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