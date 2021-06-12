<template>
  <div>
    <m-swiper>
      <m-swiper-item v-for="(item,index) in getSwiperData" :key="index">
        <img :src="item.image" alt="">
      </m-swiper-item>
    </m-swiper>
  </div>
</template>

<script>
import SwiperDropDownLocation from "@/components/common/mSwiperDropDown/SwiperDropDownLocation";
import {mSwiper,mSwiperItem} from "@/components/common/mSwiper";
export default {
  name: "Swiper",
  components:{
    mSwiper,
    mSwiperItem,
    SwiperDropDownLocation
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
