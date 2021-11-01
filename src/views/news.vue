<template>
  <div class="page">
    <div class="nav flex-row">
      <img class="logo" src="../images/logo2.png" alt="" />
      <span class="goindex">返回首页</span>
    </div>

    <van-tabs v-model:active="active">
      <van-tab v-for="index in 8" :key="index" :title="'标签 ' + index">
        内容 {{ index }}
      </van-tab>
    </van-tabs>
    <div class="footer">
      <div class="fgx"></div>
      <div class="end-logo">
        <img class="end-logo-img" src="../images/logo.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { Tab, Tabs } from "vant";
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  data() {
    return {};
  },
};
</script>
<style lang='scss' scoped>
@import "../assets/css/common.css";

.page {
  background: #fffdfa;
  .nav {
    padding: 20px 15px 20px 10px;
    align-items: center;
    justify-content: space-between;
    background: #bf161d;
    .logo {
      width: 214px;
      height: 41px;
    }
    .goindex {
      font-size: 12px;
      color: #ffffff;
    }
  }
  .footer {
    position: absolute;
    bottom: -0px;
    .fgx {
      margin: 10px 15px 0px;
      width: 345px;
      height: 2px;
      background: #bf161d;
    }
    .end-logo { 
      text-align: center;
      .end-logo-img {
        margin-top: 16px;
        margin-bottom: 10px;
        width: 214px;
        height: 41px;
      }
    }
  }
}
</style>