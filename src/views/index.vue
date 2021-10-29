<template>
  <div class="page">
    <div class="nav flex-row">
      <img class="logo" src="../images/logo.png" alt="" @click="show()" />
      <img class="more" src="../images/more.png" alt="" />
    </div>
    <div class="content">
      <div class="billboard">
        <img class="img" src="../images/banner.png" alt="" />
      </div>
      <div class="nav_school flex-row">
        <div class="block1 flex-row">
          <span class="checked w">学校新闻</span>
          <span class="w">媒体聚焦</span>
          <span class="w">校园速递</span>
        </div>
        <div class="block2 flex-row">
          <span>更多</span>
          <img class="right" src="../images/right.png" alt="" />
        </div>
      </div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <!-- <van-swipe class="my-swipe">
        <van-swipe-item class="van-swipe-item">1</van-swipe-item>
        <van-swipe-item class="van-swipe-item">2</van-swipe-item>
        <van-swipe-item class="van-swipe-item">3</van-swipe-item>
        <van-swipe-item class="van-swipe-item">4</van-swipe-item>
        <template #indicator="{ active }">
          <div class="custom-indicator">
            <div class="custom-indicator-item"></div>
            {{ active + 1 }}/4
          </div>
        </template>
      </van-swipe> -->
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {};
  },

  methods: {
    show() {
      Toast("提示内容");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/css/common.css";
.nav {
  padding: 20px 15px 20px 10px;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  .logo {
    width: 214px;
    height: 41px;
  }
  .more {
    width: 30px;
    height: 24px;
  }
}
.content {
  background: #fffdfa;
  .billboard {
    height: 90px;
    .img {
      width: 100%;
      height: 90px;
    }
  }
  .nav_school {
    margin: 15px 0;
    justify-content: space-between;
    .block1 {
      align-items: center;
      font-size: 14px;
      font-weight: 400;
      color: #999999;
      .w {
        margin: 0 -5px 0 15px;
      }
      .checked {
        font-size: 16px;
        font-weight: 600;
        color: #111111;
      }
    }
    .block2 {
      font-size: 12px;
      color: #bf161d;
      align-items: center;
      .right {
        width: 9px;
        height: 9px;
        margin: 0 18px 0 3px;
      }
    }
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  //   .my-swipe {
  //     .van-swipe-item {
  //       color: #fff;
  //       font-size: 20px;
  //       line-height: 150px;
  //       text-align: center;
  //       background-color: #39a9ed;
  //     }
  //   }

  .custom-indicator {
    display: flex;
    flex-direction: row;
  }
  .custom-indicator-item {
    width: 23px;
    height: 3px;
    background: #d8d8d8;
  }
}
</style>