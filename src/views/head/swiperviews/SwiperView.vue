<template>
  <div class="swiper-view">
    <div>
      <kid-swiper :get-swiper-data="SwiperImages">
      </kid-swiper>
      <swiper-drop-down/>
      <swiper-control/>
    </div>
  </div>
</template>

<script>
import KidSwiper from "@/views/head/swiperviews/childrenSwiper/KidSwiper";
import SwiperDropDown from "@/views/head/swiperviews/childrenSwiper/SwiperDropDown";
import SwiperControl from "@/views/head/swiperviews/childrenSwiper/SwiperControl";
export default {
  name: "Swiper",
  components:{
    KidSwiper,
    SwiperDropDown,
    SwiperControl
  },
  data(){
    return {
      SwiperImages: {
          0: {
            image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d7abb68ac50f82412d325f305cc62fb0.jpeg?w=2452&h=920',
            link: '#'
          },
          1: {
            image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/02b6f2a85191a4806e6fefb38a12890a.jpg?thumb=1&w=2452&h=920&f=webp&q=90',
            link: '#'
          },
          2: {
            image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7f2e0acc18c3d9b6a9c1ab9e8281fbd6.jpg?thumb=1&w=2452&h=920&f=webp&q=90',
            link: '#'
          },
          3: {
            image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c3e97686468231f3f78048d7f2b7fdc.jpg?thumb=1&w=2452&h=920&f=webp&q=90',
            link: '#'
          },
        },
    }
  }
}
</script>

<style scoped>
.swiper-view{
  position: relative;
  margin: 0px 30px;
}

</style>
