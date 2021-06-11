<template>
  <div class="nav-bar">
    <div class="left" >
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods:{
  }
}
</script>

<style scoped>
.nav-bar{
  width: 1280px;
  height: 40px;
  position: relative;
  z-index: 9;
  background-color:#363636;
  display: flex;
}
.left{
  flex: 1;
}
.center{
  width: 250px;
}
.right{
  width: 165px;
}
</style>
