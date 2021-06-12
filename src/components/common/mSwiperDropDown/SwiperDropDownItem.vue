<template>
  <div class="box-layout">
    <div class="item-div">
      <div class="item-location" v-for="(item,index) in swiperData" :key="index"
      @mouseenter="itemEnter(index)" @mouseleave="itemLeave">
          <div class="content-item" :class="{active:isBoxColor(index)}">
            <span>{{item.swiperNavName}}</span>
            <img src="~assets/img/Miarrow/rightArrow.svg" alt="">
          </div>
      </div>
    </div>
      <div class="drop-down-div" v-show="isShowDropDown" :style="dropDownBox" @mouseenter="dropDownEnter" @mouseleave="dropDownLeave">
        <div class="flex-layout">
          <div class="drop-down-item" v-for="(item,index) in swiperImages[this.itemIndex]" :key="index">
            <a href="#">
              <div class="drop-down-content">
                <img :src="item.img">
                <span>{{item.name}}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "SwiperDropDownItem",
  data() {
    return {
      isShowDropDown: false,
      itemIndex: 0,
      dropDownBox:'',
      n:0,
    }
  },
  props: {
    swiperData: {
      type: Object,
      default() {
        return {}
      }
    },
    swiperImages: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
  },
  methods: {
    itemEnter(index) {
      //获取SwiperNavBar的index
      this.itemIndex = index
      this.isShowDropDown = true
      //设置个数应展示的背景宽度
      this.n = Object.keys(this.swiperImages[index]).length
      if(this.n>18){
        this.dropDownBox = 'width:81%'
      }
      else if(this.n>12){
        this.dropDownBox = 'width:63%'
      }else {
        this.dropDownBox = 'width:40%'
      }
      },
    itemLeave() {
      this.isShowDropDown = false
      this.dropDownBox = ''
    },
    dropDownEnter(){
      this.isShowDropDown = true
      if(this.n>18){
        this.dropDownBox = 'width:81%'
      }
      else if(this.n>12){
        this.dropDownBox = 'width:63%'
      }else {
        this.dropDownBox = 'width:40%'
      }
    },
    dropDownLeave(){
      //移除盒子时将itemIndex赋值null
      this.dropDownBox = ''
      this.isShowDropDown = false
      this.itemIndex = null
    },
    isBoxColor(index){
      //判定动态style展示的条件，当鼠标移动到盒子时返回true
      // 如果未把鼠标移至DropDown盒子时返回false
      if (this.isShowDropDown === false){
        return false
      }else{
        return index === this.itemIndex
      }
    }
  }
}
</script>

<style scoped>
@import "./css/SwiperAnimation.css";
.box-layout{
  position: absolute;
  top: 0;
  width: 100%;
  height: 99.5%;
}
.item-div{
  position: absolute;
  top: 0;
  width: 19%;
  height: 100%;
  padding:20px 0;
  background-color: rgba(57, 57, 57, 0.5);
}
.item-location{
  width: 100%;
  height: 10%;
  line-height: 42px;
}
.content-item{
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  margin: auto;
}
.content-item span{
  font-size: 1.3rem;
  color: #fff;
}
.content-item img{
  float: right;
  margin-top: 12px;
  right: 0px;
  width: 17px;
  height: 17px;
}
.active{
  background-color: rgb(248, 113, 7);
}
/*//*/
.drop-down-div{
  position: absolute;
  top:0;
  left: 19%;
  height: 100%;
  border: 1px solid rgb(227, 227, 226);
  box-shadow: 10px 10px 17px rgba(194,194,194,.5);
}
.flex-layout{
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #fff;
  align-content: flex-start;
}
.drop-down-item{
  width: 245px;
  height: 16.5%;
  padding: 20px 15px;
}
.drop-down-content{
  position: relative;
}
.drop-down-content img{
  width: 45px;
  height: 45px;
}
.drop-down-content span{
  position: absolute;
  font-size: 1.2rem;
  line-height: 45px;
  margin-left: 10px;
}
</style>
