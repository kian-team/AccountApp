<template>
  <div class="home">
    <nav>
      <van-cell title="选择单个日期" :value="date" @click="show = true" />
      <van-calendar v-model="show" @confirm="onConfirm" color="#07c160" />
    </nav>
    <nav>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
import { Calendar, List, Cell } from "vant";
import { AccountList } from "../api";

export default {
  name: "Home",
  components: {
    "van-calendar": Calendar,
    "van-list": List,
    "van-cell": Cell
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      date: "",
      show: false
    };
  },
  methods: {
    getData(){
      AccountList().then(res =>{
        console.log(res);
      })
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
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
    }
  },
  mounted(){
    this.getData();
  }
};
</script>
