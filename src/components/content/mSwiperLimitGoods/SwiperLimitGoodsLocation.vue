<template>
  <div class="limit-goods-location">
    <slot name="top"></slot>
    <slot name="bottom"></slot>
    <slot name="advertisement"></slot>
  </div>
</template>

<script>
export default {
  name: "SwiperLimitGoodsLocation"
}
</script>

<style scoped>
.limit-goods-location{
  position: relative;
  width: 100%;
  height: 570px;
  background-color: #f5f5f5;
}
</style>
