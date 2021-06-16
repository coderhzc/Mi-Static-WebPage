<template>
  <div>
    <more-introduce :get-introduce-bar-data="IntroduceBarData"/>
  </div>
</template>

<script>
import MoreIntroduce from "@/views/body/introduceBar/childrenMoreIntroduce/MoreIntroduce";
export default {
  name: "BodyView",
  components:{
    MoreIntroduce
  },
  data(){
    return{
      IntroduceBarData:{
        moreIntroduce:{
          0:{
            name:"小米秒杀",
            img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48"
          },
          1:{
            name:"企业团购",
            img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48"
          },
          2:{
            name:"F码通道",
            img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48"
          },
          3:{
            name:"米粉卡",
            img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48"
          },
          4:{
            name:"以旧换新",
            img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48"
          },
          5:{
            name:"花费充值",
            img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48"
          },

        },
        img:{
          0:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340',
          1:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b30177d629bfbe2fb42251c1b8538f7b.jpg?w=632&h=340',
          2:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f18ac756fa2cedb16ea429b9c0001af.png?w=632&h=340',
        }
      } //MoreIntroduce数据
    }
  }
}
</script>

<style scoped>

</style>
