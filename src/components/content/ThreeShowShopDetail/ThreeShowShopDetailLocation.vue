<template>
  <div class="show-shop-detail-location-box">
    <div class="top">
      <slot name="top"></slot>
    </div>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
    <div class="advertisement">
      <slot name="advertisement"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThreeShowShopDetailLocation"
}
</script>

<style scoped>
.show-shop-detail-location-box{
  width: 97%;
  height: 100%;
  margin: auto;
}
.top{
  position: relative;
  width: 100%;
  height: 80px;
}
.bottom{
  position: relative;
  width: 100%;
  height: 630px;
}
.advertisement{
  position: relative;
  width: 100%;
  height: 160px;
}
</style>
