<template>
  <div class="shop-detail-box">
    <three-show-shop-detail-location>
      <div slot="top">
        <div class="top-left-span">
          <span>智能</span>
        </div>
        <div class="top-right-span">
          <div class="hot-span">
            <span  :class="{activeEnter:isChoose === 0,activeLeave:isChoose !==0}" @mouseenter="hotClickenter">热门</span>
          </div>
          <div class="defense-span" >
            <span :class="{activeEnter:isChoose === 1,activeLeave:isChoose !==1}" @mouseenter="defenseClickenter">安防</span>
          </div>
          <div class="move-span" >
            <span :class="{activeEnter:isChoose === 2,activeLeave:isChoose !==2}" @mouseenter="moveClickenter">出行</span>
          </div>
        </div>
      </div>
      <div slot="bottom">
        <three-show-shop-detail-item :get-shop-detail-item-data="threeShopDetailItemData"/>
      </div>
      <div slot="advertisement">
        <div class="advertisement-box-img">
          <a href="#">
            <img :src="threeShopDetailItemData.advertisement.img" alt="">
          </a>
        </div>
      </div>
    </three-show-shop-detail-location>
  </div>
</template>

<script>
import ThreeShowShopDetailItem from "@/components/content/ThreeShowShopDetail/ThreeShowShopDetailItem";
import ThreeShowShopDetailLocation from "@/components/content/ThreeShowShopDetail/ThreeShowShopDetailLocation";
export default {
  name: "ThreeShopDetail",
  components: {
    ThreeShowShopDetailLocation,
    ThreeShowShopDetailItem
  },
  data() {
    return {
      isChoose: 0,
      threeShopDetailItemData: {
        left: {
          0: {
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ffe114f73fac3a45e5622c3eff56106b.jpg?thumb=1&w=468&h=600&f=webp&q=90'
          },
          1: {
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a660ce095e8f553a9ed1515265f4e9fc.jpg?thumb=1&w=468&h=600&f=webp&q=90'
          }
        },
        right: {
          0: {
            0: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7c6e79433c883e1a022ec21402c1679.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name: '小米小爱音箱',
              introduce: '听音乐，语音遥控家电',
              price: '109元',
              oldprice: '169元'
            },
            1: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3accd497afc0047cfbd40f442e3b17df.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name: '米家智能窗帘',
              introduce: '窗帘随心开',
              price: '799元',
            },
            2: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/550177d2e54387521bce9e78cb2949dd.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name: '小米体脂秤2',
              introduce: '轻松掌握身体脂肪率',
              price: '99元',
            },
            3: {
              img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg?thumb=1&w=400&h=400',
              name: '平衡车',
              introduce: '年轻人的玩具',
              price: '1999元',
            },
            4: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a312d69c1a5447c9e3d14d42d01a8fb.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name: '小米智能门锁，推拉式',
              introduce: '一步推拉，高端智能门锁',
              price: '1699元',
            },
            5: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/49f30069c778b494257320d9da5a1a60.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name: 'Redmi小爱触屏音箱 8英寸',
              introduce: '超大屏 让智能更多可能',
              price: '349元',
            },
            6: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec0ec7692ba005710d1887262559609c.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name: '小米手环5',
              introduce: '11种运动模式，磁吸充电',
              price: '179元',
              oldprice: '189元',
            },
            7: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0245498a0e08b87ba8c323871c5d48bc.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name: '米家智能门锁 推拉式 通用',
              introduce: '一步推拉 高端智能门锁',
              price: '1699元',
            },
          },
          1: {
            0: {
              img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7e2127506fd2209f3115828404269d45.jpg?thumb=1&w=400&h=400',
              name: '小米电视4S 75英寸',
              introduce: '4K HDR 人工智能语音',
              price: '4399元',
              oldprice: '5999元'
            },
            1: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              name: '小米全面屏电视65英寸 E65X',
              introduce: '全面屏设计',
              price: '2999元',
              oldprice: '3299元'
            },
            2: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/20d36fbaa18625e4fe507af31e4e9f83.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              name: '全面屏电视E43K',
              introduce: '全面屏设计，海量内容',
              price: '1399元',
              oldprice: '1599元'
            },
            3: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              name: '小米电视4A 70英寸',
              introduce: '大屏更享受',
              price: '3499元',
              oldprice: '3999元'
            },
            4: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f674ced205c2e81125dfd2d6659aabfc.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name: 'Redmi智能电视A55',
              introduce: '澎湃音效影院级体验',
              price: '2199元',
            },
            5: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b3fe3a07ef69fb4c959e39c768c7525.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name: '小米全面屏电视E32C',
              introduce: '全面屏幕设计，人工智能系统',
              price: '899元',
              oldprice: '1099元'
            },
            6: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f193daba3989eadac5e13ae102b91582.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name: '全面屏电视 55英寸 E55X',
              introduce: '潮流全面屏设计',
              price: '2299元',
              oldprice: '2599元'
            },
            7: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              name: '小米全面屏电视65英寸 E65X',
              introduce: '全面屏设计',
              price: '2999元',
              oldprice: '3299元'
            },
          },
          2: {
            0: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7c6e79433c883e1a022ec21402c1679.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name: '小米小爱音箱',
              introduce: '听音乐，语音遥控家电',
              price: '109元',
              oldprice: '169元'
            },
            1: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3accd497afc0047cfbd40f442e3b17df.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name: '米家智能窗帘',
              introduce: '窗帘随心开',
              price: '799元',
            },
            2: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/550177d2e54387521bce9e78cb2949dd.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name: '小米体脂秤2',
              introduce: '轻松掌握身体脂肪率',
              price: '99元',
            },
            3: {
              img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg?thumb=1&w=400&h=400',
              name: '平衡车',
              introduce: '年轻人的玩具',
              price: '1999元',
            },
            4: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a312d69c1a5447c9e3d14d42d01a8fb.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name: '小米智能门锁，推拉式',
              introduce: '一步推拉，高端智能门锁',
              price: '1699元',
            },
            5: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/49f30069c778b494257320d9da5a1a60.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name: 'Redmi小爱触屏音箱 8英寸',
              introduce: '超大屏 让智能更多可能',
              price: '349元',
            },
            6: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec0ec7692ba005710d1887262559609c.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name: '小米手环5',
              introduce: '11种运动模式，磁吸充电',
              price: '179元',
              oldprice: '189元',
            },
            7: {
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0245498a0e08b87ba8c323871c5d48bc.jpg?thumb=1&w=400&h=400&f=webp&q=90',
              name: '米家智能门锁 推拉式 通用',
              introduce: '一步推拉 高端智能门锁',
              price: '1699元',
            },
          },

        },
        advertisement: {
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/01cc6a570d32a2ee09a2d5c2009a9968.jpg?thumb=1&w=2452&h=240&f=webp&q=90'
        }
      }
    }
  },
  methods:{
    hotClickenter(){
      this.isChoose = 0
      this.$bus.$emit('hotClick',this.isChoose)
    },
    defenseClickenter(){
      this.isChoose = 1
      this.$bus.$emit('defenseClick',this.isChoose)
    },
    moveClickenter(){
      this.isChoose = 2
      this.$bus.$emit('moveClick',this.isChoose)
    }
  }
}
</script>

<style scoped>
@import "~components/content/ThreeShowShopDetail/css/ThreeShowShopDetailAnimation.css";
.shop-detail-box{
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
  width: 200px;
  height: 100%;
  font-size: 17px;
  font-weight: 300;
}
.top-right-span span{
  height: 100%;
}
.hot-span{
  width: 40%;
  height: 40px;
  padding-left: 40px;
}
.hot-span span{
  padding-bottom: 5px;
}
.defense-span{
  width: 30%;
  height: 40px;
  padding-left: 15px;
}
.defense-span span{
  padding-bottom: 5px;
}
.move-span{
  height: 40px;
  padding-left: 10px;
}
.move-span span{
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
