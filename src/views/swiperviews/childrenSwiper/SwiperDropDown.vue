<template>
  <swiper-drop-down-location>
    <swiper-drop-down-item :swiper-data="dropDown" :swiper-images="swiperNavItem"/>
  </swiper-drop-down-location>
</template>

<script>
import SwiperDropDownLocation from "@/components/common/mSwiperDropDown/SwiperDropDownLocation";
import SwiperDropDownItem from "@/components/common/mSwiperDropDown/SwiperDropDownItem";
export default {
  name: "SwiperDropDown",
  components:{
    SwiperDropDownLocation,
    SwiperDropDownItem,
  },
  data(){
    return{
      dropDown:{
        0:{
          swiperNavName:'手机 电话卡',
        },
        1:{
          swiperNavName:'电视 盒子',
        },
        2:{
          swiperNavName:'笔记本 显示器',
        },
        3:{
          swiperNavName:'家电 插线板',
        },
        4:{
          swiperNavName:'出行，穿戴',
        },
        5:{
          swiperNavName:'智能 路由器',
        },
        6:{
          swiperNavName:'电源 配件',
        },
        7:{
          swiperNavName:'健康 儿童',
        },
        8:{
          swiperNavName:'耳机 音箱',
        },
        9:{
          swiperNavName:'生活 箱包',
        },
      },
      swiperNavItem: {
        0: {
          0: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          1: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          2: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          3: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          4: {
            name: '小米 11 Ultra',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1241b5a94ba1739e85f72d46592af0e.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          5: {
            name: '黑鲨4 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0dfda044e0ddcfb3ef63e7e2b87daea3.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          6: {
            name: 'Note 10 5G',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/79e2935264bf9247aa7512e330112820.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          7: {
              name: 'Redmi Note 9 5G',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/970c6b287eb89620f5ee8e2b347f6f3d.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          8: {
            name: '小米11 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6cf44dfe89111cb35e1a2211481ff546.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          9: {
            name: '黑鲨4',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          10: {
            name: 'K40 增强版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab956ee82c24bdd83d21bc212aad3eb5.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          11: {
            name: 'Redmi note 9 4G',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/947721c8bc4a4ecc3bca17237ee64dea.png?thumb=1&w=80&h=80&f=webp&q=90 ',
          },
          12: {
            name: '小米 11 青春',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/72bd70039670d29610569421f753fcb6.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          13: {
            name: 'Redmi K30S 至尊版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69a0df49cff71107977bbe3b48af15fa.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          14: {
            name: 'K40 系列',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e5aa3cab478f5eeba1c7d4cf25cba9a.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          15: {
            name: 'Redmi note 8 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cba27e53367b74271a38a4515a692816.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          16: {
            name: '小米 10S',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c89e7b3a3495acaa0a4df271d9da59ea.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          17: {
            name: '小米云服务',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ade0163e9fdbd92a4b7d7ee3aeab905.jpg?thumb=1&w=80&h=80',
          },
          18: {
            name: 'Redmi K40',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92fdd051100722d25323e9bd188befc5.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          19: {
            name: '手机上门维修',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/84e19ece0125992449a6276e2ba333e9.png?thumb=1&w=80&h=80',
          },
          20: {
            name: '小米11',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          21: {
            name: 'Redmi K30 至尊版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0803dc7125ffa3447b04b1ae60f57a2b.jpg?thumb=1&w=80&h=80&f=webp&q=90',
          },
          22: {
              name: 'Redmi 10x 5G',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f774ef8332f2204a7c8fbf1b92f29e8a.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          23: {
            name: 'Redmi 9',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=80&h=80&f=webp&q=90',
          }
        },
        1: {
          0: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          1: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          2: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          3: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          4: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          5: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          6: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          7: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          8: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          9: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          10: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          11: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          12: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          13: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          14: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          15: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          16: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          17: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          18: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          19: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          20: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          21: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          22: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          23: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          }
        },
        2: {
          0: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          1: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          2: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          3: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          4: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          5: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          6: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          7: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          8: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          9: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          10: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          11: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          12: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          13: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
        },
        3: {
          0: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          1: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          2: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          3: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          4: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          5: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          6: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          7: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          8: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          9: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          10: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          11: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          12: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          13: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          14: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          15: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          16: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          17: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          18: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          19: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          20: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          21: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          22: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },

        },
        4: {
          0: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          1: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          2: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          3: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          4: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          5: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          6: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          7: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          8: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          9: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          10: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          11: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          12: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          13: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          14: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
        },
        5: {
          0: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          1: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          2: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          3: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          4: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          5: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          6: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          7: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          8: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          9: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          10: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          11: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          12: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          13: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          14: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
        },
        6: {
          0: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          1: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          2: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          3: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          4: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          5: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          6: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          7: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          8: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          9: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          10: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          11: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
        },
        7: {
          0: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          1: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          2: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          3: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          4: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          5: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          6: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          7: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          8: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          9: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          10: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          11: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          12: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          13: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
        },
        8: {
          0: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          1: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          2: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          3: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          4: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          5: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          6: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          7: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          8: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          9: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          10: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          11: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          12: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          13: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          14: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          15: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          16: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          17: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          18: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          19: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          20: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          21: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          22: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
        },
        9: {
          0: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          1: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          2: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          3: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          4: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          5: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          6: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          7: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          8: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          9: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          10: {
            name: 'Note 10 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          11: {
            name: 'Redmi Not9 Pro',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          12: {
            name: '小米MIX FOLD',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          13: {
            name: '小米 10',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
        },
      }
    }
  }
}
</script>

<style scoped>
</style>
