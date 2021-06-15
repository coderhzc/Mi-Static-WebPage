<template>
  <div class="location">
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
  name: "ShowShopDetailLocation"
}
</script>

<style scoped>
.location{
  position: relative;
  width: 100%;
  height: 820px;
}
.top{
  position: relative;
  width: 100%;
  height: 40px;
}
.bottom{
  position: relative;
  width: 100%;
  height: 77%;
}
.advertisement{
  position: relative;
  width: 100%;
  height: 14.5%;
}
</style>
