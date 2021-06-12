<template>
  <div>
    <introduce-bar-location class="introduce-bar-location">
      <introduce-bar-item>
        <div slot="left">
          <more-introduce-item :get-more-introduce-item="getIntroduceBarData.moreIntroduce"/>
        </div>
        <div slot="right">
          <div class="right-box">
            <div class="right-img" v-for="(item,index) in getIntroduceBarData.img" :key="index">
              <a :href="index">
              <img :src="item" alt="">
              </a>
            </div>
          </div>
        </div>
      </introduce-bar-item>
    </introduce-bar-location>
  </div>
</template>

<script>
import IntroduceBarLocation from "@/components/content/introduceBar/IntroduceBarLocation";
import IntroduceBarItem from "@/components/content/introduceBar/IntroduceBarItem";
import MoreIntroduceItem from "@/components/content/introduceBar/MoreIntroduceItem";
export default {
  name: "MoreIntroduce",
  components:{
    IntroduceBarLocation,
    IntroduceBarItem,
    MoreIntroduceItem
  },
  props:{
    getIntroduceBarData:{
      type:Object,
      default(){
        return{}
      }
    }
  },
}
</script>

<style scoped>
.introduce-bar-location{
  position: relative;
}
.right-box{
  display: flex;
}
.right-img{
  flex: 1;
}
.right-img img{
  width: 308px;
  height: 100%;
}
</style>
