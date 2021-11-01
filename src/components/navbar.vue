<template>
  <div class="commom" v-if="isShow">
    <div class="title flex-row">
      <img class="img1" src="../images/logo3.png" alt="" />
      <img @click="close" class="img2" src="../images/x.png" alt="" />
    </div>
    <div>
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item title="校情总览" name="1">
          <div class="flex-col">
            <span class="mt">学院概况</span>
            <span class="mt">学院章程</span>
            <span class="mt">学院领导</span>
            <span class="mt">视觉识别</span>
            <span class="mt">校训校歌</span>
            <span class="mt mb">校园风光</span>
          </div>
        </van-collapse-item>
        <van-collapse-item title="机构设置" name="2">
          <div class="flex-col">
            <span class="mt">管理机构</span>
            <span class="mt">二级学院</span>
            <span class="mt">教辅部门</span>
            <span class="mt mb">其他机构</span>
          </div></van-collapse-item
        >
        <van-collapse-item title="人才培养" name="3">
          <div class="flex-col">
            <span class="mt">培养模式</span>
            <span class="mt">专业设置</span>
            <span class="mt">精品课程</span>
            <span class="mt">师资队伍</span>
            <span class="mt mb">教学成果</span>
          </div></van-collapse-item
        >
        <van-collapse-item title="社会服务" name="4">
          <div class="flex-col">
            <span class="mt">科技服务</span>
            <span class="mt">产学合作</span>
            <span class="mt mb">社会培训</span>
          </div></van-collapse-item
        >
        <van-collapse-item title="国际合作" name="5">
          <div class="flex-col">
            <span class="mt">合作办学</span>
            <span class="mt">境外交流</span>
            <span class="mt">中英平台</span>
            <span class="mt mb">友好院校</span>
          </div></van-collapse-item
        >
        <van-collapse-item title="招生就业" name="6">
          <div class="flex-col">
            <span class="mt">招生网</span>
            <span class="mt mb">就业网</span>
          </div></van-collapse-item
        >
      </van-collapse>
    </div>
    <div class="wff">微纺服</div>
  </div>
</template>
<script>
import { Collapse, CollapseItem } from "vant";
export default {
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
  },
  data() {
    return {
      activeName: "0",
      isShow: false,
    };
  },
  methods: {
    open() {
      this.isShow = true;
    },
    close() {
      this.isShow = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.commom {
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  width: 375px;
  height: 100vh;
  background: #000000;
  opacity: 0.9;
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }
  .mt {
    margin-top: 20px;
  }
  .mb {
    margin-bottom: 20px;
  }
  .title {
    width: 375px;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    .img1 {
      margin-left: 15px;
      width: 184px;
      height: 35px;
    }
    .img2 {
      margin-right: 20px;
      width: 13px;
      height: 13px;
    }
  }
  .wff {
    width: 100%;
    text-align: center;
    color: #ffffff;
    font-size: 18px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
}
::v-deep .van-cell {
  position: static;
  background: transparent;
  text-align: center;
  font-size: 18px;
  color: #ffffff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
::v-deep .van-collapse-item__content {
  padding: 0;
  background: transparent;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
::v-deep .van-collapse-item {
  position: static;
}
::v-deep .van-hairline--top-bottom {
  position: static;
}
::v-deep .van-cell__title {
  margin-left: 18px;
}
::v-deep .van-icon-arrow:before {
  content: "\25BC";
  color: #ffffff;
}
::v-deep .van-collapse-item__title .van-cell__right-icon::before {
  transform: rotate(0deg);
}
::v-deep .van-collapse-item__title--expanded .van-cell__right-icon::before {
  transform: rotate(180deg);
}
</style>