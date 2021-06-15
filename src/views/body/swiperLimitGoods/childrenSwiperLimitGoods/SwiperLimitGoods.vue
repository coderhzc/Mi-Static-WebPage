<template>
  <div>
    <swiper-limit-goods-location>
      <div class="control-box" slot="top">
        <div class="top-box">
          <span>小米秒杀</span>
        </div>
        <div class="turn-page">
          <div class="turn-page-location">
            <div class="left-arrow" @click="reducePage" :disabled="isDisable"
            @mouseenter="isLeftEnter" @mouseleave="isLeftLeave">
              <div class="left-img">
                <img v-if="isLeftShow" src="~assets/img/MiLimitGoods/leftArrow.svg">
                <img v-else src="~assets/img/MiLimitGoods/leftArrow_active.svg">
              </div>
            </div>
            <div class="right-arrow" @click="addPage"
            @mouseenter="isRightEnter" @mouseleave="isRightLeave">
              <div class="right-img">
                <img v-if="isRightShow" src="~assets/img/MiLimitGoods/rightArrow.svg">
                <img v-else src="~assets/img/MiLimitGoods/rightArrow_active.svg">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div slot="bottom">
        <swiper-limit-goods-item :get-limit-goods-data="swiperLimitGoodsData" :get-limit-goods-page="limitGoodsPage">
          <div style="border-top: 1px solid red" slot="limit-goods-left">
            <div class="inside-layout">
              <div class="count-down">
                <span>14:00 场</span>
              </div>
              <div class="count-img">
                <img src="~assets/img/MiLimitGoods/limitGoods.png" alt="">
              </div>
              <div class="time-over">
                <span>{{timeOver}}</span>
              </div>
              <div class="count-down-location">
                <div class="hour-count-down">
                  <span class="FontSize">00</span>
                </div>
                <span class="division-style">:</span>
                <div class="minute-count-down">
                  <span class="FontSize">{{toShowMinute}}</span>
                </div>
                <span class="division-style">:</span>
                <div class="second-count-down">
                  <span class="FontSize">{{toShowSecond}}</span>
                </div>
              </div>
            </div>
          </div>
        </swiper-limit-goods-item>
      </div>
      <div slot="advertisement">
        <div class="advertisement-div">
          <img :src="this.shopAdvertisement.img" alt="">
        </div>
      </div>
    </swiper-limit-goods-location>
  </div>
</template>

<script>
import SwiperLimitGoodsLocation from "@/components/content/mSwiperLimitGoods/SwiperLimitGoodsLocation";
import SwiperLimitGoodsItem from "@/components/content/mSwiperLimitGoods/SwiperLimitGoodsItem";
export default {
  name: "SwiperLimitGoods",
  components:{
    SwiperLimitGoodsLocation,
    SwiperLimitGoodsItem
  },
  data(){
    return{
      countTime:301,
      countMinute:null,
      toShowMinute:'00',
      toShowSecond:'00',
      timeOver:'距离结束还有',
      limitGoodsPage:0,
      isDisable:true,
      isLeftShow:true,
      isRightShow:true,

      shopAdvertisement:{
        img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/431e5fd6bfd1b67d096928248be18303.jpg?thumb=1&w=2452&h=240&f=webp&q=90'
      },
      swiperLimitGoodsData:{
        0:{
          0:{
            img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1617332894.52886433.jpg',
            name:'米家声波电动牙刷T700',
            introduce:'声波电动牙刷T700',
            price:'329元',
            oldPrice:'399元',
            style:'blue'
          },
          1:{
            img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1614256943.15414023.png',
            name:'RedmiBook Pro 15 I7/MX450',
            introduce:'3.2K 90Hz 超清视网膜全面屏 | 微米级一体精雕工艺',
            price:'4849元',
            oldPrice:'4999元',
            style:'red'
          },
          2:{
            img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1585815427.29972914.jpg',
            name:'小米时尚鼠标',
            introduce:'金属材质外观/时尚纤薄便携/无线双模连接/贴心静音按键',
            price:'89元',
            oldPrice:'99元',
            style:'green'
          },
          3:{
            img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/55583ae4c345751288d174ba1a124b46.png',
            name:'PGG颈椎按摩仪 颈部按摩器 护颈仪',
            introduce:'3个按摩头 | 全身按摩| 5大模式 | 米家APP',
            price:'269元',
            oldPrice:'299元',
            style:'black'
          }
        },
        1:{
          0:{
            img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590632188.47338396.jpg',
            name:'小米净水器500G增强版',
            introduce:'RO反渗透技术，深层净水/500G大容量/厨下安装省空间/2年仅需3支滤芯/即滤即饮/增强版复合滤芯，净水阻垢/自主换芯',
            price:'999元',
            oldPrice:'1499元',
            style:'green'
          },
          1:{
            img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1588735665.5045835.jpg',
            name:'变形金刚 擎天柱',
            introduce:'正版授权 / 经典造型高度还原 / 3D立体图纸 / 全身关节可动',
            price:'299元',
            oldPrice:'399元',
            style:'black'
          },
          2:{
            img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1553484007.64174630.jpg',
            name:'米兔儿童滑板车',
            introduce:'双弹簧重力转向系统 ／ 内部动力转化自发光灯珠 ／ 软胶包裹的C型把手 ／ 模式高度可调节',
            price:'199元',
            oldPrice:'249元',
            style:'blue'
          },
          3:{
            img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1464615180.86261317.jpg',
            name:'米兔智能故事机',
            introduce:'海量优质内容，讲故事更专业 / 微信远程互动 / 智能语音交互 / 材质安全耐用',
            price:'169元',
            oldPrice:'199元',
            style:'orange'
          },
        },
        2:{
          0:{
            img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1553505133.75664205.jpg',
            name:'米家防蓝光护目镜',
            introduce:'75%蓝光阻断率 / 金塑混合镜架 / 极简双色 / 佩戴舒适',
            price:'89元',
            oldPrice:'99元',
            style:'blue'
          },
          1:{
            img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572938174.57361553.jpg',
            name:'智能积木 公路赛车',
            introduce:'3D立体搭建图纸，更直观地查阅每个搭建步骤 / 模拟真实赛车外观与结构，拼装乐趣升级 / 空气动力学车身设计，竞技更稳定 / 四轮独立悬架，提升驾驶体验 / 大扭矩电机，动力充沛 / 高精度伺服舵机，操控手感更佳 / APP 智能遥控，让积木动起来',
            price:'219元',
            oldPrice:'299元',
            style:'orange'
          },
          2:{
            img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1595408856.53451913.jpg ',
            name:'千年榫营造积木 祈年殿',
            introduce:'传统榫卯结构/ 经典中国古建筑 /1:200 比例还原/全新的搭建体验',
            price:'609元',
            oldPrice:'999元',
            style:'red'
          },
          3:{
            img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592999770.95718638.jpg',
            name:'智能遥控车',
            introduce:'智能遥控车新品上架全仿真结构设计|1:16真车比例|全比例式精准操控|整车零件升级改装',
            price:'189元',
            oldPrice:'199元',
            style:'green'
          }
        },
      }
    }
  },
  created() {
    this.getMinuteCountDown()
    this.getSecondCountDown()
    this.getUpDataPage()

  },
  methods:{
    // 分钟倒计时
    getMinuteCountDown(){
     const time = setInterval(() => {
        this.countTime--
       if (this.countTime % 60 === 0){
         if(this.countTime<=600){
           this.countMinute = (this.countTime / 60) -1
           this.toShowMinute ='0'+this.countMinute
         }else{
           this.countMinute = (this.countTime / 60) -1
           this.toShowMinute = this.countMinute
         }
       }
       if (this.countTime === 0){
         clearInterval(time)
         this.timeOver = '秒杀已结束'
         this.toShowMinute = '00'
       }
     },1000)
    },
    // 秒针倒计时
    getSecondCountDown(){
      const time = setInterval(() => {
       this.toShowSecond = this.countTime % 60
        if(this.countTime % 60 <= 9){
          this.toShowSecond = '0' + this.countTime % 60
        }
        if(this.countTime === 0){
          clearInterval(time)
        }
      })
    },
    //页面翻页，
    reducePage(){
      if(this.limitGoodsPage !== 0){
        this.limitGoodsPage--
        this.$bus.$emit('emitReducePage',this.limitGoodsPage)
      }else{
        this.isDisable = false
      }
    },
    addPage(){
      if (this.limitGoodsPage !== Object.keys(this.swiperLimitGoodsData).length-1){
        this.limitGoodsPage += 1
        this.$bus.$emit('emitAddPage',this.limitGoodsPage)
      }else{
        this.isDisable = false
      }
    },
    //将自动滚动的索引值和Control Arrow 索引值同步
    getUpDataPage(){
      this.$bus.$on('automaticAddPage',res => {
        this.limitGoodsPage = res
      })
      this.$bus.$on('ZeroPage',res => {
        this.limitGoodsPage = res
      })
    },
    //
    isLeftEnter(){
      this.isLeftShow = false
    },
    isLeftLeave(){
      this.isLeftShow = true
    },
    isRightEnter(){
      this.isRightShow = false
    },
    isRightLeave(){
      this.isRightShow = true
    },
  },
}
</script>

<style scoped>
.control-box{
  display: flex;
  width: 100%;
  height: 62px;
  background-color: #f5f5f5;
}
.top-box{
  margin: 27px;
}
.top-box span{
  line-height: 10px;
  font-weight: 340;
  color: #333;
  font-size: 22px;
}
.turn-page{
  position: absolute;
  right: 27px;
  width: 10%;
  height: 62px;
}
.turn-page-location{
  display: flex;
  position: absolute;
  right: 0;
  bottom: 10px;
}

.left-arrow{
  width: 39px;
  height: 25px;
  border: 1px solid #e0e0e0;
}
.right-arrow{
  width: 39px;
  height: 25px;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
}
.left-img{
  height: 100%;
  padding-top: 3px;
  text-align: center;
}
.left-img img{
  width: 15px;
}
.right-img{
  height: 100%;
  width: 100%;
  padding-top:3px;
  text-align: center;
}
.right-arrow img{
  width: 15px;
}

/*bottomSlot*/
.inside-layout{
  width: 90%;
  height: 250px;
  margin: 45px auto;
}
.count-down{
  font-size:21px;
  padding-top: 10px;
  text-align: center;
  color: #ef3a3b;
}
.count-img{
  width: 100%;
  text-align: center;
  margin-top: 30px;
}
.time-over{
  width: 100%;
  line-height: 62px;
  text-align: center;
  margin-top: 10px;
}
.time-over span{
  font-weight: 350;
  font-size: 15px;
  color: rgba(0,0,0,.54);
}
.count-down-location{
  display: flex;
  width: 100%;
  height: 18%;
  line-height: 45px;
  margin-top: 4px;
  padding: 0px 22px;
  text-align: center;
  color: #ffffff;
}
.hour-count-down{
  width: 29%;
  background-color: #605751;
}
.minute-count-down{
  width: 29%;
  background-color:#605751;
}
.second-count-down{
  width: 29%;
  background-color: #605751;
}
.division-style{
  margin: 0px 3px;
  line-height: 40px;
  color: #605751 ;
  font-size: 30px;
}
.FontSize{
  font-size: 25px;
}
/*advertisement*/
.advertisement-div{
  margin-top: 20px;
  text-align: center;
}
.advertisement-div img{
  width: 97%;
}
</style>
