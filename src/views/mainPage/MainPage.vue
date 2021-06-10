<template>
  <div>
    <head-view/>
    <swiper-view/>
  </div>
</template>

<script>
import HeadView from "@/views/headdviews/HeadView";
import SwiperView from "@/views/swiperviews/SwiperView";
export default {
  name: "MainPage",
  components:{
    HeadView,
    SwiperView
  }
}
</script>

<style scoped>

</style>
