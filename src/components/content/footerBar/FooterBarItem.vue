<template>
  <div class="footer-bar-item">
    <div class="left-bottom-box">
      <div class="table-box">
        <table class="left-table" v-for="(item,index) in getFooterMessage" :key="index">
        <tr>
          <th>{{item.th}}</th>
        </tr>
        <tr v-for="(td,index) in item.td" :key="index">
          <a href="#">
            <td>{{td}}</td>
          </a>
        </tr>
      </table>
      </div>
    </div>
    <div class="right-bottom-box">
      <div class="right-bottom-box-inside">
        <p class="iphone-number">400-100-5678</p>
        <p class="iphone-time">8:00-18:00 (仅收市话费)</p>
        <a href="#">
          <div class="iphone-box" :class="{active:isIphoneBox===true,unactive:isIphoneBox !== true}" @mouseenter="iphoneBoxEnter" @mouseleave="iphoneBoxLeave">
            <span>人工客服</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBarItem",
  props:{
    getFooterMessage:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return{
      isIphoneBox:false
    }
  },
  methods:{
    iphoneBoxEnter(){
      this.isIphoneBox = true
    },
    iphoneBoxLeave(){
      this.isIphoneBox = false
    }
  }
}
</script>

<style scoped>
.footer-bar-item{
  display: flex;
  height: 100%;
}
.left-bottom-box{
  flex: 1;
}
.right-bottom-box{
  width: 250px;
}
.right-bottom-box-inside{
  width: 100%;
  height: 45%;
  text-align: center;
  line-height: 25px;
  border-left: 1px solid rgba(194,194,194,.5);
  margin-top: 45px;
}
.iphone-number{
  font-size: 22px;
  color: #ff6700;
}
.iphone-time{
  color: #828282;
}
.iphone-box{
  width: 45%;
  height: 30px;
  margin: auto;
  line-height: 29px;
  color: #ff6709;
  border:1px solid #ff6700;
}
.active{
  background-color: #ff6709;
  color: #ffffff;
  transition: all .3s ease;
}
.unactive{
  background-color: #ffffff;
  color: #ff6709;
  transition: all .3s ease;
}
.table-box{
  display: flex;
  justify-content: flex-start;
}
.left-table{
  flex: 1;
  margin-right: 10px;
}
.left-table th{
  float: left;
  line-height: 50px;
  font-weight: 350;
  font-size: 14px;
}
.left-table td{
  line-height: 30px;
  font-weight: 300;
  font-size: 12px;
}
.left-table td:hover{
  color: #ff6709;
}
</style>
