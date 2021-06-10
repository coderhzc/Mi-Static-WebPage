<template>
  <div class="swiper-drop-down-location">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SwiperDropDownLocation"
}
</script>

<style scoped>
.swiper-drop-down-location{
  position: absolute;
  z-index: 20;
  top: 0;
  width: 19%;
  height: 100%;
  background-color: red;
}
</style>
