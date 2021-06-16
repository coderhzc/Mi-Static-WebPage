<template>
  <div class="footer-top-bar-item-div">
    <div class="footer-top-bar-item-for" v-for="(item,index) in getTopItemData" :key="index">
        <a href="#" :class="{active:index === saveFooterBarItemIndex,unactive:index !== saveFooterBarItemIndex}"
        @mouseenter="itemHoverEnter(index)" @mouseleave="itemHoverLeave">
          <span>{{item}}</span>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBarTopItem",
  props:{
    getTopItemData:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return{
      saveFooterBarItemIndex:null
    }
  },
  created() {
    console.log(this.getTopItemData);
  },
  methods:{
    itemHoverEnter(index){
      this.saveFooterBarItemIndex = index
    },
    itemHoverLeave(){
      this.saveFooterBarItemIndex = null
    }
  }
}
</script>

<style scoped>
.footer-top-bar-item-div{
  display: flex;
  width: 100%;
  margin-top: 20px;
}
.footer-top-bar-item-for{
  flex: 1;
  width: 100px;
  line-height: 40px;
  text-align: center;
  font-size: 17px;
}
.footer-top-bar-item-for:not(:last-child){
  border-right: 1px solid rgba(194,194,194,.5);
}
.active{
  transition: all .3s ease;
  color: #ff6709;
}
.unactive{
  transition: all .3s ease;
  color: #010101;
}
/**/
</style>
