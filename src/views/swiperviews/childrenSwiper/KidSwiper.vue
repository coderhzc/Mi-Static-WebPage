<template>
  <m-swiper>
    <m-swiper-item v-for="(item,index) in getSwiperData" :key="index">
      <a href="">
        <img :src="item.image" alt="">
      </a>
    </m-swiper-item>
  </m-swiper>
</template>

<script>
import {mSwiper,mSwiperItem} from "@/components/common/mSwiper/index";
export default {
  name: "Swiper",
  components:{
    mSwiper,
    mSwiperItem
  },
  props:{
    getSwiperData:{
      type:Object,
      default(){
        return {}
      }
    }
  },
}
</script>

<style scoped>

</style>
