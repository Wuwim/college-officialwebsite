<template>
  <div class="page">
    <titlebar ref="navbar"> </titlebar>
    <div class="nav flex-row">
      <img class="logo" src="../images/logo.png" alt="" @click="show()" />
      <img class="more" src="../images/more.png" alt="" @click="showBar" />
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
      <div class="rotation">
        <van-swipe class="my-swipe" :autoplay="3000" @change="onChange">
          <van-swipe-item
            class="van-swipe-item"
            v-for="(item, index) in arr"
            :key="index"
          >
            <img class="img" :src="item.img" alt="" />
          </van-swipe-item>
          <template #indicator="{ active }">
            <div class="custom-indicator">
              <div
                class="custom-indicator-item"
                :class="active == index ? 'custom-indicator-item-active' : ''"
                v-for="(item, index) in arr"
                :key="item + index"
              ></div>
            </div>
          </template>
        </van-swipe>
      </div>
      <div class="article">
        <div class="title">
          {{ arr[num].title }}
        </div>
        <div class="content">
          {{ arr[num].content }}
        </div>
      </div>
      <!-- <div class="splitline"></div> -->
      <hr class="splitline" />
      <div class="nav_school flex-row">
        <div class="block1 flex-row">
          <span class="checked w">通知</span>
          <span class="w">公告</span>
          <span class="w">活动</span>
        </div>
        <div class="block2 flex-row">
          <span>更多</span>
          <img class="right" src="../images/right.png" alt="" />
        </div>
      </div>
      <div class="notice">
        <div
          class="notice_box flex-row"
          v-for="(item, index) in notice"
          :key="index + 1"
        >
          <div class="notice_circle"></div>
          <div class="notice_title">{{ item.title }}</div>
          <div class="notice_date">{{ item.time }}</div>
        </div>
      </div>
      <img class="coloured_ribbon" src="../images/2.png" alt="" />
      <div class="nav_school flex-row">
        <div class="block1 flex-row">
          <span class="checked w">常用链接</span>
        </div>
      </div>
      <div class="common_links flex-row">
        <div
          class="common_links_items"
          v-for="(item, index) in linkList"
          :key="index + 2"
        >
          {{ item.title }}
        </div>
      </div>
      <div class="footer flex-col">
        <img class="img_qrcode" src="../images/er.png" alt="" />
        <span class="w1">欢迎关注纺院公众号</span>
        <img class="img_logo mt" src="../images/logo2.png" alt="" />
        <div class="flex-row mt">
          <van-icon name="phone" color="#fff" size="15" />
          <span class="w2">0574-86328000</span>
        </div>
        <div class="flex-row mt">
          <van-icon name="location" color="#fff" size="15" />
          <span class="w2">浙江省宁波市镇海区风华路495号</span>
        </div>
        <hr class="splitline mt" />
        <span class="w3 mt">版权所有 © 浙江纺织服装职业技术学院</span>
        <div class="flex-row mt">
          <span class="w3">浙ICP备12014096号</span>
          <span class="w3 w4">浙公网安备 33020502000018号</span>
        </div>
        <img class="img_blue" src="../images/blue.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { Swipe, SwipeItem, Icon } from "vant";

import TitleBar from "@/components/navbar.vue";
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Icon.name]: Icon,

    titlebar: TitleBar,
  },
  data() {
    return {
      num: 0,
      linkList: [
        { title: "校报" },
        { title: "学报" },
        { title: "图书馆" },
        { title: "优质校" },
        { title: "信息公开" },
        { title: "文明校园" },
        { title: "内网平台" },
        { title: "三全育人" },
        { title: "电子邮局" },
        { title: "匠艺课堂" },
        { title: "监督与投诉" },
        { title: "书记校长信箱" },
        { title: "党史学习教育" },
        { title: "人才培养质量报告" },
        { title: "成长成才成功红帮大讲堂" },
        { title: "高校科研经费使用信息公开" },
        { title: "庆祝改革开放40周年大型展览" },
      ],
      arr: [
        {
          title:
            "传统文化与国际时尚相碰撞 宁波发布“海丝、海瓷、海甬”主题动态秀",
          content:
            "　10月21日，2021宁波时尚节暨第25届宁波国际服装节正式开幕。当天，来自我校中英时尚设计学院服装与服饰设计（中英）专业学生，发布了一场以宁波文化印记——“海丝”“海瓷”“海甬”为设计主题的动态秀。",
          img: "http://news.zjff.edu.cn/xyyw/202110/W020211021810811602260.jpg",
        },
        {
          title: "数字化、时尚感、环保范…学校全面亮相2021宁波时尚节",
          content:
            "10月21日上午，2021宁波时尚节正式拉开帷幕，开幕式前，原国家质量监督检验检疫总局副局长、中国品牌建设促进会理事长刘平均，宁波市委副书记、市长裘东耀，中国纺织工业联合会副会长、中国服装协会会长陈大鹏，中国纺织商业联合会副会长曹立，宁波市副市长陈炳荣等领导巡视了我校展厅。学校郑卫东校长陪同巡视。",
          img: "http://news.zjff.edu.cn/xyyw/202110/W020211021807825669123.jpg",
        },
        {
          title: "我校举行2021级新生开学典礼、军训闭训仪式暨迎新晚会",
          content:
            "9月28日晚，学校田径场流光溢彩、热闹非凡，2021级新生开学典礼、军训闭训仪式暨迎新晚会在这里举行。全体校领导、中层干部、全体班主任、辅导员、2021级新生、军训教官等参加活动。开学典礼、军训闭训仪式由学校党委副书记王旭峰主持。",
          img: "http://news.zjff.edu.cn/xyyw/202109/W020210929727378956027.jpg",
        },
        {
          title:
            "我校举行2021届学生毕业典礼，郑卫东校长寄语毕业生：健康乐观，担当有爱！",
          content:
            "“步入社会，希望你们健康乐观，担当有爱。走进职场，担当有爱就是从尊重你的单位和工作开始，就是以工匠精神干一行爱一行、钻一行精一行，就是要不断学习、敢于并善于破解各种工作难题；担当有爱就是明白工作和家庭是相辅相成、同等重要，在努力中收获成长与爱情，做到经济独立、精神充实，勿忘父母养育之恩！”",
          img: "http://news.zjff.edu.cn/xyyw/202106/W020210606413402665378.jpg",
        },
        {
          title: "融入红色元素 献礼建党百年 第四届KFIP全国儿童时尚文化周开幕",
          content:
            "5月28日，第四届KFIP全国儿童时尚文化周在宁波老外滩开幕。开幕式首场发布秀为我校华羽金顶现代学徒制班“中国红”童装创意作品发布会。",
          img: "http://news.zjff.edu.cn/xyyw/202105/W020210531479334387286.jpg",
        },
      ],
      notice: [
        {
          title: "关于举办第二期“辅导员沙龙”活动的通知",
          time: "10-28",
        },
        {
          title: "关于加强以党史学习教育为重点的“四史”教育的通知",
          time: "10-28",
        },
        {
          title:
            "关于印发《浙江纺织服装职业技术学院兼职教师队伍建设管理暂行办法（修订）》的通知",
          time: "10-27",
        },
        {
          title: "商学院“企业专家进校园”活动通知",
          time: "10-27",
        },
        {
          title:
            "浙江纺织服装职业技术学院关于同意麦淇等二百五十六位同学学籍异动的决定",
          time: "10-26",
        },
      ],
    };
  },

  methods: {
    show() {
      Toast("提示内容");
    },
    showBar() {
      console.log(11);
      this.$refs.navbar.open();
    },
    onChange(index) {
      this.num = index;
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
  box-shadow: none;
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
  .rotation {
    margin-left: 15px;
    width: 345px;
    .my-swipe {
      position: relative;
      .van-swipe-item {
        width: 345px;
        height: 210px;
        .img {
          width: 345px;
          height: 210px;
        }
      }
      .custom-indicator {
        position: relative;
        top: -15px;
        left: 33%;
        display: flex;
        flex-direction: row;
        .custom-indicator-item {
          width: 23px;
          height: 3px;
          background: #d8d8d8;
        }
        .custom-indicator-item-active {
          background: #ffffff;
        }
      }
    }
  }
  .article {
    margin: 8px 15px 20px 15px;
    width: 345px;
    .title {
      font-size: 14px;
      font-weight: 600;
      color: #111111;
    }
    .content {
      margin-top: 10px;
      font-size: 12px;
      color: #999999;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
  .splitline {
    width: 80%;
    margin: 0 auto;
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    );
  }
  .notice {
    margin: 0 15px;
    width: 345px;
    .notice_box {
      margin-top: 5px;
      font-size: 12px;
      align-items: center;
      justify-content: space-between;
      .notice_circle {
        width: 5px;
        height: 5px;
        border: 1px solid #999999;
        border-radius: 50%;
      }
      .notice_title {
        width: 83%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        color: #111111;
      }
      .notice_date {
        color: #999999;
      }
    }
  }
  .coloured_ribbon {
    margin-top: 15px;
    width: 100%;
  }
  .common_links {
    width: 345px;
    margin-left: 15px;
    flex-wrap: wrap;
    .common_links_items {
      margin-top: 10px;
      margin-right: 7px;
      padding: 3px 10px;
      font-size: 10px;
      color: #111111;
      background: #efeded;
      border-radius: 15px;
    }
  }
  .footer {
    margin-top: 80px;
    font-size: 10px;
    align-items: center;
    background: #bf161d;
    .mt {
      margin-top: 15px;
    }
    .img_qrcode {
      position: relative;
      top: -50px;
      padding: 5px;
      width: 89px;
      height: 87px;
      background: #fffdfa;
    }
    .w1 {
      margin-top: -30px;
      color: #ffffff;
    }
    .img_logo {
      width: 184px;
      height: 35px;
    }
    .w2 {
      color: #ffffff;
    }
    .splitline {
      width: 80%;
      border: 0;
      height: 1px;
      background: #ef7575;
    }
    .w3 {
      color: #ef7575;
    }
    .w4 {
      margin-left: 20px;
    }
    .img_blue {
      margin: 15px auto;
      width: 20px;
      height: 20px;
    }
  }
}
</style>