<template>
  <div class="footer-bar-location">
    <div class="top">
      <slot name="top"></slot>
    </div>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBarLocation"
}
</script>

<style scoped>
.footer-bar-location{
  display: flex;
  flex-direction: column;
  width: 97%;
  margin: auto;
}
.top{
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgba(194,194,194,.5);
}
.bottom{
  width: 100%;
  height: 270px;
}
</style>
