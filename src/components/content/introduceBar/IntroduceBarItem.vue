<template>
  <div class="box">
    <div class="left"><slot name="left"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "IntroduceBarItem"
}
</script>

<style scoped>
.box{
  height: 100%;
  display: flex;
}
.left{
  position: relative;
  width: 234px;
  height: 91%;
  margin: 8px;
  background-color: #5e5752;
}
.right{
  flex: 1;
  height: 91%;
  margin: 8px;
}
/**/
</style>
