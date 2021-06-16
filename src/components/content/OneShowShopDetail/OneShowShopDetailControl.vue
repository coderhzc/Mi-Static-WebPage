<template>
  <div class="one-shop-detail-control" @mouseenter="isArrowEnter" @mouseleave="isArrowLeave">
    <a href="#">
      <div class="shop-detail-control-span">
        <span>查看更多</span>
      </div>
      <div class="shop-detail-control-img">
        <img v-if="isArrow" src="~assets/img/OneShopDetailControl/rightArrow_active.svg" alt="">
        <img v-else src="~assets/img/OneShopDetailControl/rightArrow.svg" alt="">
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "OneShowShopDetailControl",
  data(){
    return{
      isArrow:false
    }
  },
  methods:{
    isArrowEnter(){
      this.isArrow = true
    },
    isArrowLeave(){
      this.isArrow = false
    }
  }
}
</script>

<style scoped>
@import "./css/ShopDetailAnimation.css";
.one-shop-detail-control{
  position: relative;
  width: 90px;
}
.shop-detail-control-span{
  line-height: 35px;
  margin-right: 25px;
}
.shop-detail-control-span span{
  font-size: 16px;
  font-weight: 300;
}
.shop-detail-control-img{
  position: absolute;
  right: 4px;
  top: 9px;
}
.shop-detail-control-img img{
  width: 18px;
  height: 18px;
}
/**/
</style>
