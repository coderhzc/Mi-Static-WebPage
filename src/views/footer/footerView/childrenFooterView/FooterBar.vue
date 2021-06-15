<template>
  <div class="footer-bar-box">
    <footer-bar-location>
      <div class="top-box" slot="top">
        <footer-bar-top-item :get-top-item-data="topItemData"/>
      </div>
      <div class="bottom-box" slot="bottom">
        <footer-bar-item :get-footer-message="FooterMessage"/>
      </div>
    </footer-bar-location>
  </div>
</template>

<script>
import FooterBarLocation from "@/components/content/footerBar/FooterBarLocation";
import FooterBarItem from "@/components/content/footerBar/FooterBarItem";
import FooterBarTopItem from "@/components/content/footerBar/FooterBarTopItem";
export default {
  name: "FooterBar",
  components:{
    FooterBarLocation,
    FooterBarItem,
    FooterBarTopItem
  },
  data(){
    return{
      topItemData:["预约维修服务","7天无理由退货","15天免费换货","满69包邮","520余家售后网点"],
      FooterMessage:{
        0:{
          th:'帮助中心',
          td:["账户管理","购物指南","订单操作"]
        },
        1:{
          th:'服务支持',
          td:["售后政策","自主服务","相关下载"]
        },
        2:{
          th:'线下门店',
          td:["小米之家","服务网点","授权体验店"]
        },
        3:{
          th:'关于小米',
          td:["了解小米","加入小米","投资者关系","企业社会责任","廉洁举报"]
        },
        4:{
            th:'关注我们',
          td:["新浪微博","官方微信","联系我们","公益基金会",]
        },
        5:{
          th:'特色服务',
          td:["F码通道","礼物码","防伪查询"]
        },

      }
    }
  }
}
</script>

<style scoped>
.footer-bar-box{
  width: 100%;
  height: 350px;
}
.top-box{
  height: 100%;
}
.bottom-box{
  height: 100%;
}
</style>
