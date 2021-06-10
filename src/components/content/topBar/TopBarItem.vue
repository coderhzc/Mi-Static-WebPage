<template>
  <div class="top-bar-item">
    <!--小米图标-->
    <div class="left">
      <div class="left-img">
        <img :src="shopMessage.image" alt="">
      </div>
    </div>
    <!--导航栏的文字-->
    <div class="center"  @mouseleave="itemLeave">
      <div class="center-item">
        <div class="center-item-div" v-for="(item,index) in shopMessage.item" :key="index" @mouseenter="itemEnter(index)">
          <ul style="list-style-type: none">
            <li>{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 搜索框 -->
    <div class="right">
      <div class="right-search-div">
        <div class="search-inside">
          <input class="search-input" type="text" :placeholder="saveSearchMessage">
        </div>
        <div class="search-img" :style="searchImage" @mouseenter="searchEnter" @mouseleave="searchLeave">
          <img v-if="isSearchImage" class="search-img-img" src="~assets/img/Misearch/search_active.svg" alt="">
          <img v-else class="search-img-img" src="~assets/img/Misearch/search.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopBarItem",
  props:{ //封装在HeadTopBar的数据
    shopMessage:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return{
      saveSearchMessage:'',
      searchImage:'',
      isSearchImage:false,
      animationColor:'',
    }
  },
  created() {
  },
  methods:{
    searchEnter(){  //搜索框的动画以及v-show
      this.searchImage='animation-name: animationSearchEnter;animation-duration: .5s;animation-fill-mode: forwards;'
      this.isSearchImage = true
    },
    searchLeave(){
      this.searchImage='animation-name: animationSearchLeave;animation-duration: .5s;animation-fill-mode: forwards;'
      this.isSearchImage = false
    },
    itemEnter(index){ //将导航栏的index传至HeadTopBar
      this.$bus.$emit('topBarEmit',index)
      this.$bus.$emit('topBarBooleanTrue',true)
    },
    itemLeave(){
      this.$bus.$emit('topBarBooleanFalse',false)
    }
  }
}
</script>

<style scoped>
@import "~assets/css/topBar/TopBarStyle.css";
.top-bar-item{
  display: flex;
  background-color: #fff;
  height: 100px;

}
.left{
  position: relative;
  width: 20%;
}
.center{
  flex: 1;
}
.right{
  position: relative;
  width: 30%;
}
.left-img{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -40.5%;
  margin-top: -27.5px;

}
.left-img img{
  width: 55px;
  height: 55px;
}
.center-item{
  display: flex;
  justify-content: center;
  margin-top: 25px;;
  line-height: 60px;
  font-size: 1.7rem;
}
.center-item-div{
  padding: 0px 8px;
}
.right-search-div{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -39%;
  width: 80%;
  height: 50%;
}
.search-inside{
  height: 100%;
  width: 80%;
  border: 1px solid rgba(194,194,194,.3);
}
.search-img{
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid rgba(194,194,194,.3);
  border-top: 1px solid rgba(194,194,194,.3);
  border-bottom: 1px solid rgba(194,194,194,.3);
}
.search-img-img {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -10px;
  margin-left: -10px;
  width: 20px;
  height: 20px;
}
.search-input{
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
}

</style>
