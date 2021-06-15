<template>
  <div class="shop-detail-item-box">
    <div class="left-shop-detail-item">
      <div class="left-shop-detail-item-img" v-for="(item,index) in getShopDetailItemData.left" :key="index"
      :class="{active:index === saveLeftItemIndex,unactive:index !== saveLeftItemIndex}" @mouseenter="LeftShopDetailItemEnter(index)" @mouseleave="LeftShopDetailItemLeave" >
        <a href="#">
          <img :src="item.img" alt="">
        </a>
      </div>
    </div>
    <div class="right-shop-detail-item">
      <div class="right-shop-detail-item-box" v-for="(item,index) in getShopDetailItemData.right[savePage]" :key="index"
      :class="{active:index === saveRightItemIndex,unactive:index !== saveRightItemIndex}" @mouseenter="RightShopDetailItemEnter(index)" @mouseleave="RightShopDetailItemLeave">
        <a href="#">
          <div class="right-touch-box">
            <div class="right-shop-detail-img">
              <img :src="item.img" alt="">
            </div>
            <div class="right-shop-detail-item-span">
              <span>{{item.name}}</span>
            </div>
            <div class="right-shop-detail-item-introduce">
              <span>{{item.introduce}}</span>
            </div>
            <div class="right-shop-detail-item-price">
              <span class="newprice">{{item.price}}</span>
              <span class="oldprice">{{item.oldprice}}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThreeShowShopDetailItem",
  props:{
    getShopDetailItemData:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return{
      savePage:0,
      saveLeftItemIndex:null,
      saveRightItemIndex:null,
    }
  },
  created() {
    this.getHotClick()
  },
  methods:{
    getHotClick(){
      this.$bus.$on('hotClick',res=>{
        this.savePage = res
      })
      this.$bus.$on('defenseClick',res=>{
        this.savePage = res
      })
      this.$bus.$on('moveClick',res => {
        this.savePage = res
      })
    },
    LeftShopDetailItemEnter(index){
      this.saveLeftItemIndex = index
    },
    LeftShopDetailItemLeave(){
      this.saveLeftItemIndex = null
    },
    RightShopDetailItemEnter(index){
      this.saveRightItemIndex = index
    },
    RightShopDetailItemLeave(){
      this.saveRightItemIndex = null
    }
  }
}
</script>

<style scoped>
@import "./css/ThreeShowShopDetailAnimation.css";
.shop-detail-item-box{
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
}
.left-shop-detail-item{
  display: flex;
  flex-direction: column;
  width: 19.3%;
}
.right-shop-detail-item{
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}
.left-shop-detail-item-img{
  width: 100%;
  margin-top: 10px;
}
.left-shop-detail-item-img img{
  width: 100%;
  height: 100%;
}
.right-shop-detail-item-box{
  width: 24%;
  height: 49%;
  margin-left: 9px;
  margin-top: 10px;
  text-align: center;
  background-color: #ffffff;
}
.right-touch-box{
  width: 85%;
  margin: auto;
  height: 99%;
}
.right-shop-detail-img{
  padding-top: 20px;
}
.right-shop-detail-img img{
  width: 165px;
}
.right-shop-detail-item-span{
  overflow: hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  margin-top: 5px;
  line-height: 35px;
}
.right-shop-detail-item-span span{
  font-size: 14px;
}
.right-shop-detail-item-introduce{
  overflow: hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  font-size: 12px;
  color:#b0b0b0;
}
.right-shop-detail-item-price{
  margin-top: 10px;
 font-size: 15px;
}
.newprice{
  color: #ff6700;
}
.oldprice{
  padding-left: 10px;
  color: #b0b0b0;
  text-decoration: line-through;
}
.active{
  transition: all .3s ease;
  transform: translateY(-5px);
  box-shadow: 0 8px 8px rgb(194,194,194);
}
.unactive{
  transition: all .3s ease;
  transform: translateY(0);
}

</style>
