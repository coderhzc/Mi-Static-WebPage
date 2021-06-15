<template>
  <div class="shop-detail-item-box">
    <div class="left-shop-detail-item">
      <div class="left-shop-detail-item-img" v-for="(item,index) in getTwoShopDetailItemData.left" :key="index"
      :class="{active:index === saveLeftTwoItemIndex,unactive:index !== saveLeftTwoItemIndex}" @mouseenter="LeftTwoShopDetailItemEnter(index)" @mouseleave="LeftTwoShopDetailItemLeave" >
        <img :src="item.img" alt="">
      </div>
    </div>
    <div class="right-shop-detail-item">
      <div class="right-shop-detail-item-box" v-for="(item,index) in getTwoShopDetailItemData.right[saveTwoPage]" :key="index"
      :class="{active:index === saveRightTwoItemIndex,unactive:index !== saveRightTwoItemIndex}" @mouseenter="RightTwoShopDetailItemEnter(index)" @mouseleave="RightTwoShopDetailItemLeave">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwoShowShopDetailItem",
  props:{
    getTwoShopDetailItemData:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return{
      saveTwoPage:0,
      saveLeftTwoItemIndex:null,
      saveRightTwoItemIndex:null,
    }
  },
  created() {
    this.getHotClick()
  },
  methods:{
    getHotClick(){
      this.$bus.$on('hotClick',res=>{
        this.saveTwoPage = res
      })
      this.$bus.$on('moviesClick',res=>{
        this.saveTwoPage = res
      })
    },
    LeftTwoShopDetailItemEnter(index){
      this.saveLeftTwoItemIndex = index
    },
    LeftTwoShopDetailItemLeave(){
      this.saveLeftTwoItemIndex = null
    },
    RightTwoShopDetailItemEnter(index){
      this.saveRightTwoItemIndex = index
    },
    RightTwoShopDetailItemLeave(){
      this.saveRightTwoItemIndex = null
    }
  }
}
</script>

<style scoped>
@import "./css/TwoShowShopDetailAnimation.css";
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
  transform: translateY(-10px);
  box-shadow: 0 8px 8px rgb(194,194,194);
}
.unactive{
  transition: all .3s ease;
  transform: translateY(0);
}

</style>
