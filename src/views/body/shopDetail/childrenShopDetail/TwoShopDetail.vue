<template>
  <div class="two-shop-detail-box">
    <two-show-shop-detail-location>
      <div slot="top">
        <div class="top-left-span">
          <span>家电</span>
        </div>
        <div class="top-right-span">
          <div class="hot-span">
            <span  :class="{activeEnter:isChoose === 0,activeLeave:isChoose !==0}" @mouseenter="hotClickenter">热门</span>
          </div>
          <div class="movies-span" >
            <span :class="{activeEnter:isChoose === 1,activeLeave:isChoose !==1}" @mouseenter="moviesClickenter">电视影音</span>
          </div>
        </div>
      </div>
      <div slot="bottom">
        <two-show-shop-detail-item :get-two-shop-detail-item-data="twoShopDetailItemData"/>
      </div>
      <div slot="advertisement">
          <div class="advertisement-box-img">
            <a href="#">
            <img :src="twoShopDetailItemData.advertisement.img" alt="">
            </a>
          </div>
      </div>
    </two-show-shop-detail-location>
  </div>
</template>

<script>
import TwoShowShopDetailLocation from "@/components/content/TwoShowShopDetail/TwoShowShopDetailLocation";
import TwoShowShopDetailItem from "@/components/content/TwoShowShopDetail/TwoShowShopDetailItem";
export default {
  name: "TwoShopDetail",
  components:{
    TwoShowShopDetailLocation,
    TwoShowShopDetailItem
  },
  data(){
    return{
      isChoose:0,
      twoShopDetailItemData:{
        left:{
          0:{
            img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/116fc43816b87192be4e67cf762e8da5.jpeg?thumb=1&w=234&h=300&f=webp&q=90'
          },
          1:{
            img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dfbdabe36b2d630d57a015e6fb5eb3ea.jpg?thumb=1&w=234&h=300&f=webp&q=90'
          }
        },
        right:{
          0:{
            0:{
              img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              name:'小米全面屏电视65英寸 E65X',
              introduce:'全面屏设计',
              price:'2999元',
              oldprice:'3299元'
            },
            1:{
              img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1612c93ad4756215774a0dbec7a81bb2.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name:'米家电烤箱',
              introduce:'全能烘焙体验',
              price:'279元',
              oldprice:'299元'
            },
            2:{
              img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/20d36fbaa18625e4fe507af31e4e9f83.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              name:'全面屏电视E43K',
              introduce:'全面屏设计，海量内容',
              price:'1399元',
              oldprice:'1599元'
            },
            3:{
              img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              name:'小米电视4A 70英寸',
              introduce:'大屏更享受',
              price:'3499元',
              oldprice:'3999元'
            },
            4:{
              img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6bed167fc905bab57dee478bcf1e5e0d.JPG?thumb=1&w=200&h=200&f=webp&q=90',
              name:'米家互联网对开门冰箱 540L',
              introduce:'重磅新品福利特惠',
              price:'2999元',
              oldprice:'3699元'
            },
            5:{
              img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              name:'Redmi全自动波轮洗衣机1A 8kg',
              introduce:'一键操作，父母都爱用',
              price:'899元',
            },
            6:{
              img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e5f89adf98ab3fccb34012b5209cd58.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              name:'米家互联网烟灶套装（天然气）',
                introduce:'点火排烟，风随火动',
              price:'2298元',
            },
            7:{
              img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              name:'小米全面屏电视65英寸 E65X',
              introduce:'全面屏设计',
              price:'2999元',
              oldprice:'3299元'
            },
          },
          1:{
            0:{
              img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7e2127506fd2209f3115828404269d45.jpg?thumb=1&w=400&h=400',
              name:'小米电视4S 75英寸',
              introduce:'4K HDR 人工智能语音',
              price:'4399元',
              oldprice:'5999元'
            },
            1:{
              img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              name:'小米全面屏电视65英寸 E65X',
              introduce:'全面屏设计',
              price:'2999元',
              oldprice:'3299元'
            },
            2:{
              img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/20d36fbaa18625e4fe507af31e4e9f83.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              name:'全面屏电视E43K',
              introduce:'全面屏设计，海量内容',
              price:'1399元',
              oldprice:'1599元'
            },
            3:{
              img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              name:'小米电视4A 70英寸',
              introduce:'大屏更享受',
              price:'3499元',
              oldprice:'3999元'
            },
            4:{
              img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f674ced205c2e81125dfd2d6659aabfc.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name:'Redmi智能电视A55',
              introduce:'澎湃音效影院级体验',
              price:'2199元',
            },
            5:{
              img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b3fe3a07ef69fb4c959e39c768c7525.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name:'小米全面屏电视E32C',
              introduce:'全面屏幕设计，人工智能系统',
              price:'899元',
              oldprice:'1099元'
            },
            6:{
              img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f193daba3989eadac5e13ae102b91582.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name:'全面屏电视 55英寸 E55X',
              introduce:'潮流全面屏设计',
              price:'2299元',
              oldprice:'2599元'
            },
            7:{
              img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              name:'小米全面屏电视65英寸 E65X',
              introduce:'全面屏设计',
              price:'2999元',
              oldprice:'3299元'
            },
          },
        },
        advertisement: {
          img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e8fc8ba9718c266882719fb4bbcedd.jpg?thumb=1&w=2452&h=240&f=webp&q=90'
        }
      }
    }
  },
  methods:{
    hotClickenter(){
      this.isChoose = 0
      this.$bus.$emit('hotClick',this.isChoose)
    },
    moviesClickenter(){
      this.isChoose = 1
      this.$bus.$emit('moviesClick',this.isChoose)
    }
  }
}
</script>

<style scoped>
@import "~components/content/TwoShowShopDetail/css/TwoShowShopDetailAnimation.css";
.two-shop-detail-box{
  width: 100%;
  height: 890px;
}
.top-left-span{
  position: absolute;
  display: flex;
  align-items: flex-end;
  width: 100px;
  height: 100%;
  padding-bottom: 18px;
}
.top-left-span span{
  font-size: 22px;
  font-weight: 300;
}
.top-right-span{
  position: absolute;
  display: flex;
  align-items: flex-end;
  right: 0px;
  width: 150px;
  height: 100%;
}
.top-right-span span{
  height: 100%;
  font-size: 18px;
  font-weight: 350;
}
.hot-span{
  width: 50%;
  height: 40px;
  padding-left: 20px;
}
.hot-span span{
  padding-bottom: 5px;
}
.movies-span{
  height: 40px;
}
.movies-span span{
  padding-bottom: 5px;
}
.activeEnter{
  color: #ff6700;
  border-bottom: 3px solid #ff6700;
  transition: all .3s linear;
}
.activeLeave{
  transition: all .3s linear;
  color: #010101;
  border-bottom: 3px solid #f5f5f5;
}
.advertisement-box-img{
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 40px;
}
.advertisement-box-img img{
  width: 100%;
}
</style>
