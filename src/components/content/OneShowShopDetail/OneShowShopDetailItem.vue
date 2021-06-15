<template>
  <div class="shop-detail-item">
    <div class="shop-detail-item-left">
      <a :href="this.getShopDetailItemData.left.gethref">
        <div class="left-img" :style="isLeftShopStyle" @mouseenter="isLeftShopEnter" @mouseleave="isLeftShopLeave">
          <img :src="getShopDetailItemData.left.img">
        </div>
      </a>
    </div>

    <div class="shop-detail-item-right">
      <div class="shop-detail-item-max-box">
        <div class="shop-detail-item-location" v-for="(item,index) in getShopDetailItemData.right" :key="index"
             :class="{activeEnter:index===saveRightIndex,activeLeave:index!==saveRightIndex}" @mouseenter="isRightShopEnter(index)" @mouseleave="isRightShopLeave">
          <a :href="item.gethref">
          <div class="click-box">
            <div class="item-img">
              <img :src="item.img">
            </div>
            <div>
              <p class="item-p-name">{{item.name}}</p>
              <p class="item-p-introduce">{{item.introduce}}</p>
              <p class="item-p-price">{{item.price}}</p>
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneShowShopDetailItem",
  data(){
    return{
      isLeftShopStyle:'',
      isRightShopStyle:'',
      saveRightIndex:null,
    }
  },
  props:{
    getShopDetailItemData:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    isLeftShopEnter(){
      this.isLeftShopStyle = 'animation-name:LeftShopDetailEnter;animation-duration:.5s;animation-fill-mode:forwards'
    },
    isLeftShopLeave(){
      this.isLeftShopStyle = 'animation-name:LeftShopDetailLeave;animation-duration:.5s;animation-fill-mode:forwards'
    },
    isRightShopEnter(index){
      this.saveRightIndex = index
    },
    isRightShopLeave(){
      this.saveRightIndex = null
    }
  }
}
</script>

<style scoped>
.shop-detail-item{
  display: flex;
  height: 100%;
}
.shop-detail-item-left{
  width: 20.5%;
  height: 100%;
  padding-left: 20px;
  padding-top:15px;
}
.left-img{
  width: 97%;
  height: 100%;
}
.left-img img{
  height: 100%;
}

/**/

.shop-detail-item-right{
  position: relative;
  flex: 1;
}
.shop-detail-item-max-box{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 98%;
  height: 100%;
}
.shop-detail-item-location{
  width: 23.5%;
  height: 47.5%;
  margin-top: 13px;
  margin-left: 14px;
  text-align: center;
  background-color: #ffffff;
}
.click-box{
  width: 100%;
  height: 100%;
}
.item-img{
  width: 100%;
  margin-top: 20px;
}
.item-img img{
  width: 160px;
}
.item-p-name{
  margin-top: 15px;
  font-size: 14px;
  line-height: 20px;
}
.item-p-introduce{
  margin-top: 5px;
  font-size: 12px;
  color: #b0b0b0;
}
.item-p-price{
  margin-top: 15px;
  font-size: 14px;
  color: #ff6700;
}
.activeEnter{
  box-shadow:0 8px 8px rgb(194,194,194);
  transform: translateY(-10px);
  transition: all .3s ease;
}
.activeLeave{
  transform: translateY(0);
  transition: all .3s ease;
}
</style>
