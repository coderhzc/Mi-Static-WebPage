<template>
  <div class="swiper-goods-layout">
    <div class="goods-left">
      <slot name="limit-goods-left"></slot>
    </div>
    <div class="goods-right">
      <div class="goods-right-div">
        <div class="goods-item-box" :style="'border-top:1px solid '+item.style"
             v-for="(item,index) in getLimitGoodsData[this.getGoodsPage]" :key="index">
          <a :href="index">
            <div class="goods-item-img">
              <img :src="item.img">
            </div>
            <div class="goods-item-message">
              <span>{{item.name}}</span>
              <p>{{item.introduce}}</p>
            </div>
            <div class="goods-item-price">
              <span class="real-price">{{item.price}}</span>
              <span class="old-price">{{item.oldPrice}}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwiperLimitGoodsItem",
  props: {
    getLimitGoodsData: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  data(){
    return{
      getGoodsPage:0
    }
  },
  created(){
    this.getReduce()
    this.getAdd()
    this.goodsAutomatic()
  },
  methods:{
    getReduce() {
      this.$bus.$on('emitReducePage', res => {
        this.getGoodsPage = res
      })
    },
    getAdd(){
      this.$bus.$on('emitAddPage',res => {
        this.getGoodsPage = res
      })
    },
    //自动滚动，并将索引值传到Control Arrow 同步Page
    goodsAutomatic(){
      setInterval(() => {
        if (this.getGoodsPage < Object.keys(this.getLimitGoodsData).length-1){
          this.getGoodsPage++
          this.$bus.$emit('automaticAddPage',this.getGoodsPage)
        }else{
          this.getGoodsPage = 0
          this.$bus.$emit('ZeroPage',this.getGoodsPage)
        }
      },6000)
    }
  },

}
</script>

<style scoped>
@import "./css/AutomaticAnimation.css";
.swiper-goods-layout{
  display: flex;
  width: 100%;
  height: 340px;
  margin: auto;
}
.goods-left{
  width: 18.4%;
  margin-left: 25px;
  margin-right: 5px;
  background-color: #f1eded;
}
.goods-right{
  margin-right: 20px;
  flex: 1;
}
.goods-right-div{
  display: flex;
}

.goods-item-box{
  width: 23.5%;
  height: 340px;
  margin-left:14px;
  background-color: #fff;
}
.goods-item-img{
  padding-top: 50px;
  text-align: center;
}
.goods-item-img img{
  width: 175px;
  height: 175px;
}
.goods-item-message{
  width: 82%;
  margin: auto;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-item-message span{
  color: #212121;
  font-size: 14px;
}
.goods-item-message p{
  width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #b0b0b0;
  line-height: 35px;
}
.goods-item-price{
  text-align: center;
  font-size: 14px;
}
.real-price{
  color: #ff6709;
  margin-right: 5px;
}
.old-price{
  text-decoration:line-through;
  color: #b0b0b0;
}
/**/
</style>
