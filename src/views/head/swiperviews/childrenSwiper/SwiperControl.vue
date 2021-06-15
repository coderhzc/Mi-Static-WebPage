<template>
  <div class="control-location">
    <div class="left-control-location">
      <div class="left-img-box" :style="isLeftArrowStyle">
        <img v-if="isLeftArrow" src="~assets/img/MiswiperArrow/leftArrow.svg" alt="">
        <img v-else src="~assets/img/MiswiperArrow/leftArrow_active.svg" alt="">
      </div>
    </div>
    <div class="right-control-location">
      <img v-if="isRightArrow" src="~assets/img/MiswiperArrow/rightArrow.svg" alt="">
      <img v-else src="~assets/img/MiswiperArrow/rightArrow_active.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "SwiperControl",
  data(){
    return{
      isLeftArrow:true,
      isRightArrow:true,
      isLeftArrowStyle:'',
      isRightArrowStyle:''
    }
  },
  methods:{
    LeftArrowEnter(){
      this.isLeftArrowStyle = "background-color:red"
      this.isLeftArrow = false
      console.log(111);
    },
  }
}
</script>

<style scoped>
.control-location{
  position: absolute;
  top: 0;
  right: 0;
  width: 81%;
  height: 15%;
  margin-top: 175px;
}
.left-control-location{
  width: 4%;
  height: 100%;
}
.left-img-box{
  width: 100%;
  height: 100%;
  padding-top: 15px;
}
.left-img-box img{
  width: 35px;
}
.right-control-location{
  position: absolute;
  top: 0;
  right: 0;
  width: 4%;
  height: 100%;
  padding-top: 15px;
  padding-left: 4px;

}
.right-control-location img{
  width: 35px;
}
</style>
