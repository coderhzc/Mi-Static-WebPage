<template>
  <div>
    <one-show-shop-detail-location>
      <div class="control-box" slot="top">
        <div class="top-box">
          <span>手机</span>
        </div>
        <div class="top-right-box">
          <one-show-shop-detail-control/>
        </div>
      </div>
      <div class="bottom-shop-item" slot="bottom">
        <div class="shop-item-box">
          <one-show-shop-detail-item :get-shop-detail-item-data="ShopDetailItemData"/>
        </div>
      </div>
      <div class="advertisement-box" slot="advertisement">
        <div class="inside-advertisement-box">
          <a :href="this.ShopDetailItemData.advertisement.gethref">
          <div class="advertisement-img">
            <img :src="this.ShopDetailItemData.advertisement.img" alt="">
          </div>
          </a>
        </div>
      </div>
    </one-show-shop-detail-location>
  </div>
</template>

<script>
import OneShowShopDetailLocation from "@/components/content/OneShowShopDetail/OneShowShopDetailLocation";
import OneShowShopDetailControl from "@/components/content/OneShowShopDetail/OneShowShopDetailControl";
import OneShowShopDetailItem from "@/components/content/OneShowShopDetail/OneShowShopDetailItem";
export default {
  name: "ShopDetail",
  components:{
    OneShowShopDetailLocation,
    OneShowShopDetailControl,
    OneShowShopDetailItem
  },
  data(){
    return{
      ShopDetailItemData:{
        left:{
          img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c583f2edc613f1be20fa415910b13ce3.jpg?thumb=1&w=468&h=1228&f=webp&q=90',
          gethref:'https://www.mi.com/mixfold'
        },
        right:{
          0:{
            img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg?thumb=1&w=400&h=400&f=webp&q=90',
            name:'Not 10 Pro',
            introduce:'天玑1100年度旗舰芯，VC液冷散热',
            price:'1699元起',
            gethref:'https://www.mi.com/buy?product_id=14206'
          },
          1:{
            img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8909080ddb0851af0b87530e2927844f.jpg?thumb=1&w=400&h=400&f=webp&q=90',
            name:'Note 10 5G',
            introduce:'5G小金刚，旗舰长续航',
            price:'1099元起',
            gethref:'https://www.mi.com/buy?product_id=14210'
          },
          2:{
            img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dc32ec73299ff79556dcd1cf0f0ac11.png?thumb=1&w=400&h=400&f=webp&q=90',
            name:'小米MIX FOLD',
            introduce:'折叠大屏｜自研芯片',
            price:'9999元起',
            gethref:'https://www.mi.com/mixfold'
          },
          3:{
            img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eb69512d9d6430d865d457ec52eebb51.png?thumb=1&w=400&h=400&f=webp&q=90',
            name:'小米11 Ultra',
            introduce:'1/1.12"GN2|2k四微曲面屏',
            price:'5999元起',
            gethref:'https://www.mi.com/mi11ultra'
          },
          4:{
            img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/34caee2c867bfd8c5e0dc2d8c663e121.jpg?thumb=1&w=400&h=400&f=webp&q=90',
            name:'小米11 Pro',
            introduce:'1/1.12"GN2|晓龙888',
            price:'4999元起',
            gethref:'https://www.mi.com/mi11Pro'
          },
          5:{
            img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb554f30eaa0316b0a736c3d59f21584.png?thumb=1&w=400&h=400&f=webp&q=90',
            name:'小米11 青春版',
            introduce:'小米11 青春版 轻薄',
            price:'2299元起',
            gethref:'https://www.mi.com/mi11youth'
          },
          6:{
            img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b7fbb6fe07907c60f08358adab5adfe.png?thumb=1&w=400&h=400&f=webp&q=90',
            name:'K40 游戏增强版',
            introduce:'轻薄电竞设计款',
            price:'1999元起',
            gethref:'https://www.mi.com/buy?product_id=14031'
          },
          7:{
            img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d47f7ecaa04d92bf2790d4a5d53d9099.png?thumb=1&w=400&h=400&f=webp&q=90',
            name:'黑鲨4 Pro',
            introduce:'黑鲨4 Pro',
            price:'3999元起',
            gethref:'https://www.mi.com/buy?product_id=13812'
          },
        },
        advertisement:{
          img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41d16e66381cfeda7b6b39ab67678d5e.jpg?thumb=1&w=2452&h=240&f=webp&q=90',
          gethref:'https://www.mi.com/a/h/15707.html'
        }
      }
    }
  }
}
</script>

<style scoped>
.control-box{
  display: flex;
}
.top-box{
  padding: 20px 26px;
}
.top-box span{
  line-height: 10px;
  font-weight: 340;
  color: #333;
  font-size: 22px;
}
.top-right-box{
  position: absolute;
  bottom: 0;
  right: 20px;
}
/**/
.bottom-shop-item{
  height: 100%;
}
.shop-item-box{
  height: 100%;
}

/**/

.advertisement-box{
  margin-top: 29px;
  height: 100%;
}
.inside-advertisement-box{
  width: 97%;
  height: 100%;
  margin: auto;
}
.advertisement-img img{
  width: 100%;
}
</style>
