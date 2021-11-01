<template>
  <div class="page">
    <div class="nav flex-row">
      <img class="logo" src="../images/logo2.png" alt="" />
      <span class="goindex">返回首页</span>
    </div>

    <van-tabs v-model:active="active">
      <van-tab title="学院概况">
        <div class="schoolmsg">
          <div class="title">—— 学院简介 ——</div>
          <img class="img" src="../images/im1.png" alt="" />
          <div class="w">
            浙江纺织服装职业技术学院是由宁波市政府举办的公办全日制高等职业院校，是浙江省高职优质校建设单位、教育国际化特色高校建设单位，是首批国家教育信息化试点单位、浙江省首批数字校园示范校。
          </div>
          <div class="w w1">
            学校前身为浙江轻纺职业技术学院和宁波服装职业技术学院，经浙江省人民政府批准于2004年合并成立浙江纺织服装职业技术学院。学校坐落于宁波市北高教园区，占地面积600多亩，现有在校生1万余人、教职工700余人。学校下设纺织学院、时装学院、中英时尚设计学院/国际学院、艺术与设计学院、雅戈尔商学院/商学院等9个二级学院；现有专业35个，其中中央财政支持专业2个，省级优势专业及特色专业10个，省级示范专业4个。
          </div>

          <div class="title">—— 宣传片 ——</div>
          <img class="img" src="../images/im2.png" alt="" />
          <div class="title">—— 办学理念 ——</div>
          <div class="w">
            办学理念：弘扬传统 产学结合 服务社会 以人为本 和谐发展
          </div>
          <div class="title">—— 办学定位 ——</div>
          <div class="w">办学定位：立足行业，服务全省，校企联动，特色发展</div>
        </div>
      </van-tab>
      <van-tab title="学院章程"> </van-tab>
      <van-tab title="学院领导"> </van-tab>
      <van-tab title="视觉识别"> </van-tab>
      <van-tab title="校训校歌"> </van-tab>
      <van-tab title="校园风光"> </van-tab>
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
  .schoolmsg {
    margin: auto;
    width: 345px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    .title {
      margin-top: 20px;
      font-weight: 600;
    }
    .img {
      margin-top: 20px;
      width: 100%;
    }
    .w {
      margin-top: 15px;
      text-align: left;
    }
    .w1 {
      margin-top: 20px;
    }
  }
  .footer {
    margin-top: 50px;
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

::v-deep .van-tabs__wrap--scrollable .van-tab {
  padding: 0 6px;
}
</style>