<template>
  <div>
    <!-- head -->
    <head-view/>
    <swiper-view/>
    <body-view/>
    <!--  body  -->
    <div class="body-base-style">
      <swiper-limit-goods-view/>
      <shop-detail-view/>
    </div>
    <!-- footer -->
    <div>
      <footer-view/>
    </div>
    <div class="abc"></div>
  </div>
</template>

<script>
import HeadView from "@/views/head/headdviews/HeadView";
import SwiperView from "@/views/head/swiperviews/SwiperView";
import BodyView from "@/views/body/introduceBar/MoreIntroduceView";
import SwiperLimitGoodsView from "@/views/body/swiperLimitGoods/SwiperLimitGoodsView";
import ShopDetailView from "@/views/body/shopDetail/ShopDetailView";
import FooterView from "@/views/footer/footerView/FooterView";
export default {
  name: "MainPage",
  components:{
    BodyView,
    HeadView,
    SwiperView,
    SwiperLimitGoodsView,
    ShopDetailView,
    FooterView,
  }
}
</script>

<style scoped>
.body-base-style{
  width: 100%;
  height: 3180px;
  margin-top: 20px;
  background-color: #f5f5f5;
}
.abc{
  width: 100%;
  height: 100px;
  background-color: #f5f5f5;
}
</style>
