<template>
  <transition name="fade">
    <div class="drop-down" v-show="isBoolean" @mouseenter="isBooleanEnter" @mouseleave="isBooleanLeave">
    <div class="drop-down-layout" v-for="(item,index) in dropDownShop[this.currentIndex]" :key="index">
      <div><a href="#"><img :src="item.shopImage" alt=""></a></div>
      <div class="drop-down-message">
        <div><span>{{item.shopName}}</span></div>
        <div style="color:rgb(248, 113, 7)"><span>{{item.shopPrice}}</span></div>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: "TopBarDropDown",
  data(){
    return{
      currentIndex:0,
      isBoolean:false,
    }
  },
  props:{
    dropDownShop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    isBooleanEnter(){
      this.isBoolean = true
    },
    isBooleanLeave(){
      this.isBoolean = false
    }
  },
  created() {
      //通过事件总线接收TopBarWord的index
     this.$bus.$on("topBarEmit",(msg)=>{
      this.currentIndex = msg
       console.log(this.currentIndex);
     })//返回Boolean是否展示
    this.$bus.$on('topBarBooleanTrue',(msg)=>{
      if(this.currentIndex<7){       //只有小于7的内容才会被展示
        this.isBoolean = msg
      }else{
        this.isBoolean = !msg       //大于7的值返回false
      }
    })
    this.$bus.$on("topBarBooleanFalse",(msg)=>{
      this.isBoolean = msg
    })
  }
}
</script>

<style scoped>
@import "~assets/css/topBar/TopBarStyle.css";
.drop-down{
  height: 200px;
  display: flex;
  background-color: #fff;
  box-shadow: 0px 5px 4px rgba(194,194,194,.3);
  border-top: 1px solid rgba(194,194,194,.5);
}
.drop-down-layout{
  flex: 1;
  height: 110px;
  margin-top: 30px;
  /*border: 1px solid black;*/
  text-align: center;
}
.drop-down-layout:not(:last-child){
  border-right: 1px solid rgba(194,194,149,.3);
}
.drop-down-layout img{
  width: 160px;
}
.drop-down-message{
  line-height: 25px;
}
</style>
