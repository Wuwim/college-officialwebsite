<template>
  <div class="page">
    <div class="nav flex-row">
      <img class="logo" src="../images/logo2.png" alt="" />
      <span class="goindex">返回首页</span>
    </div>

    <van-tabs v-model:active="active" swipeable>
      <van-tab title="管理机构">
        <div class="second_college">
          <div class="title">教学单位</div>
          <div class="list-box">
            <div class="list" v-for="(item, index) in arr" :key="index + item">
              {{ item.name }}
            </div>
          </div>
          <div class="down-box">
            <img class="down" src="../images/down.png" alt="" />
          </div>
        </div>
      </van-tab>
      <van-tab title="二级学院">
        <div class="second_college">
          <div class="title">教学单位</div>
          <div class="list-box">
            <div class="list" v-for="(item, index) in arr" :key="index + item">
              {{ item.name }}
            </div>
          </div>
          <div class="down-box">
            <img class="down" src="../images/down.png" alt="" />
          </div>
        </div>
      </van-tab>
      <van-tab title="教辅部门"> 内容 {{ index }} </van-tab>
      <van-tab title="其他机构"> 内容 {{ index }} </van-tab>
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
    return {
      arr: [
        { name: "纺织学院" },
        { name: "时装学院" },
        { name: "艺术与设计学院" },
        { name: "商学院（雅戈尔商学院）" },
        { name: "信息媒体学院" },
        { name: "机电与轨道交通学院" },
        { name: "基础教学部（体育部）" },
        { name: "中英时尚设计学院" },
        { name: "继续教育学院（宁波明州职业专修学院）" },
        { name: "创业学院" },
        { name: "马克思主义学院" },
      ],
    };
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
  .second_college {
    font-size: 14px;
    color: #111111;
    .title {
      margin-top: 15px;
      font-weight: 600;
      text-align: center;
    }
    .list-box {
      height: 300px;
      overflow-y: scroll;
      .list {
        padding: 15px 0 15px 15px;
      }
      .list:nth-child(2n) {
        background: #f3f3f4;
      }
    }
    .down-box {
      text-align: center;
      .down {
        margin-top: 70px;
        width: 28px;
        height: 14px;
      }
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
::v-deep .van-tab {
  flex: none;
  font-size: 14px;
  color: #999999;
}
::v-deep .van-tab--active {
  font-size: 16px;
  font-weight: 600;
  color: #111111;
}
</style>