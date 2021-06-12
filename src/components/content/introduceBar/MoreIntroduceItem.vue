<template>
  <div class="more-introduce-item-box">
    <div>
      <ul class="box-top">
        <li></li>
        <li></li>
      </ul>
    </div>
    <div>
      <ul class="box-bottom">
        <li></li>
        <li></li>
      </ul>
    </div>
      <div class="more-introduce-for" v-for="(item,index) in getMoreIntroduceItem" :key="index"
      :class="{active:saveIndex===index}" @mouseenter="introduceEnter(index)" @mouseleave="introduceLeave">
        <a :href="index">
          <div class="more-introduce-img">
            <img :src="item.img" alt="">
          </div>
          <div class="more-introduce-name">
            <span>{{item.name}}</span>
          </div>
        </a>
            <div class="line-transverse-box"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: "MoreIntroduceItem",
  data(){
    return{
      saveIndex:null
    }
  },
  props:{
    getMoreIntroduceItem:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  created() {
    console.log(this.getMoreIntroduceItem);
  },
  methods:{
    introduceEnter(index){
      this.saveIndex = index
      console.log(this.saveIndex);
    },
    introduceLeave(){
      this.saveIndex = null
    }
  }
}
</script>

<style scoped>
@import "./css/MoreIntroduceAnimation.css";
.more-introduce-item-box{
  display: flex;
  flex-wrap: wrap;
  padding: 5px 5px;
}
.more-introduce-for{
  width: 72px;
  height: 70px;
  margin:5px auto;
  padding-top: 11px;
  text-align: center;
  opacity: .5;
}
.more-introduce-img img{
  width: 25px;
  height: 25px;
}
.more-introduce-name{
  font-size: .5rem;
  line-height: 20px;
  color: #ffffff;
}
.line-transverse-box{
  position: absolute;
  top: 50%;
  margin-left: 10px;
  width:55px;
  border-top:1px solid rgba(194,194,194,.2);
}
.box-top{
  list-style-type: none;
  position: absolute;
  display: flex;
}
.box-top li {
  flex: 1;
  margin-left: 75px;
  margin-top: 18px;
  height: 50px;
  border-right: 1px solid rgba(194,194,194,.2);
}
.box-bottom{
  list-style-type: none;
  position: absolute;
  display: flex;
}
.box-bottom li {
  flex: 1;
  margin-left: 75px;
  margin-top: 90px;
  height: 50px;
  border-right: 1px solid rgba(194,194,194,.2);
}
.active{
  opacity: 1;
}
</style>
