<template>
  <swiper-drop-down-location>
    <swiper-drop-down-item/>
  </swiper-drop-down-location>
</template>

<script>
import SwiperDropDownLocation from "@/components/common/mSwiperDropDown/SwiperDropDownLocation";
import SwiperDropDownItem from "@/components/common/mSwiperDropDown/SwiperDropDownItem";
export default {
  name: "SwiperDropDown",
  components:{
    SwiperDropDownLocation,
    SwiperDropDownItem,
  }
}
</script>

<style scoped>
.drop-down-location{
  position: absolute;
}
</style>
