<template>
 <div class="main">
   <nav-bar class="main-nav-bar">
       <div slot="left" class="left">
         <div v-for="(item,index) in leftItem" :key="index" class="left-div" @mouseenter="centerHover(index)" @mouseleave="centerLeave(index)">
           <span>{{item}}</span>
         </div>
       </div>
       <div slot="center" class="center">
         <div v-for="(item,index) in rightItem" :key="index" class="center-div" >
           <span>{{item}}</span>
         </div>
       </div>
       <div slot="right" class="right">
         <div class="right-div" :style="ShopCartStyle" @mouseenter="enterShopCart" @mouseleave="leaveShopCart" >
           <img v-if="isShopCart" src="~assets/img/Mishopcar/shopcar_active.svg" alt="">
           <img v-else src="~assets/img/Mishopcar/shopcar.svg" alt="">
           <span>购物车（0）</span>
         </div>
       </div>
   </nav-bar>
   <transition name="transitionPullDown">
     <div class="app">
       <div class="app-div" v-show="isApp">
         <img src="~assets/img/Mishopcar/app.png" >
       </div>
     </div>
   </transition>
   <transition name="transitionPullDown">
     <div class="shop-cart" v-show="isShopCart">
       <div class="shop-cart-div">
         <span>暂无商品，请添加商品</span>
       </div>
     </div>
   </transition>
 </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
export default {
  name: "MainNavBar",
  components:{
    NavBar,
  },
  data(){
    return{
      leftItem:["小米商城","MIUI","loT","云服务","天星数科","有品","小爱开放平台","企业团购","资质证照","协议规则","下载app","智能生活",],
      rightItem:["登录","注册","消息通知"],
      isApp:false,
      currentIndex:10,
      isShopCart:false,
      ShopCartStyle:''
    }
  },
  methods:{
    centerHover(index){
      if (this.currentIndex === index){
        this.isApp = true
      }else{
        this.isApp = false
      }
    },
    centerLeave(){
      this.isApp = false
    },
    enterShopCart(){
      this.ShopCartStyle = 'color:rgb(248, 113, 7);background-color:#fff';
      this.isShopCart = true;
    },
    leaveShopCart(){
      this.ShopCartStyle = '';
      this.isShopCart = false;
    }
  }
}
</script>

<style scoped>
@import "~assets/css/navBar/NavBarStyle.css";
.main{
  position: relative;
}
.main-nav-bar{
  color: #ababab;
}
.left{
  display: flex;
  height: 20px;
  margin-left: 30px;
  margin-top: 10px;
}
.left-div{
  padding: 0 10px;
  line-height: 20px;
  border-right: 1px solid rgba(194,194,194,.1);
}
.center{
  display: flex;
  justify-content: flex-end;
  height: 20px;
  margin-top: 10px;
  margin-right: 20px;
}
.center-div{
  line-height: 20px;
  padding: 0 10px;
  border-left: 1px solid rgba(194,194,194,.1);
}
.right{
}
.right-div{
  position: relative;
  width: 120px;
  margin-left: 25px;
  height: 40px;
  background-color: rgba(194,194,194,.1);
}
.right-div img {
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translateX(-50%);
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
}
.right-div span{
  position: absolute;
  left: 35%;
  top: 50%;
  transform: translateY(-50%);
}
.app{
  position: absolute;
  top: 40px;
  left: 625px;
  z-index: 8;
}
.app-div{
  width: 130px;
  height: 150px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 1px 5px rgb(194,194,194);
}
.app-div img{
  width: 120px;
  height: 140px;
}
.shop-cart{
  position: absolute;
  right: 45px;
  width: 340px;
  height: 100px;
  background-color: #fff;
  line-height: 100px;
  z-index: 8;
}
.shop-cart-div{
  text-align: center;
  box-shadow: 0px 1px 1px rgb(194,194,194);
}

/*//*/
.left :hover{
  animation-name: HoverColor;
  animation-duration: .1s;
  animation-fill-mode: forwards;
}
.center :hover{
  animation-name: HoverColor;
  animation-duration: .1s;
  animation-fill-mode: forwards;
}
@keyframes HoverColor {
  to{
    color: #fff;
  }
}
</style>
