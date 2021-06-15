<template>
  <div>
    <swiper-drop-down-location>
    <swiper-drop-down-item :swiper-data="dropDown" :swiper-images="swiperNavItem"/>
  </swiper-drop-down-location>
  </div>
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
            name: 'Redmi MAX 超大屏',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9074723edc522839834f7fcd12b6f558.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          1: {
            name: 'Redmi 智能电视 X 系列',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/070b329c18c1ab167df2a42564a67813.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          2: {
            name: '小米全面屏电视',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8aeae36f5d088f22c84b8953bd0d08b4.jpg?thumb=1&w=80&h=80',
          },
          3: {
            name: '小米盒子',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/554a4f8ea0c2c3ed19d843bea7321203.jpg?thumb=1&w=80&h=80',
          },
          4: {
            name: '电视音箱',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/381acfeddeebcce4720ea7b8e481252f.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          5: {
            name: '小米透明电视',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          6: {
            name: '小米电视大师 82英寸',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8f12c8d20878e88b66047ef32566e48.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          7: {
            name: '大师电视 65英寸 OLED',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7da49e7ada2229c963c9c7353a58d49b.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          8: {
            name: 'Redmi 智能电视 MAX 98"',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&w=80&h=80&f=webp&q=90',
          },
          9: {
            name: 'Redmi MAX 超大屏',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9074723edc522839834f7fcd12b6f558.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          10: {
            name: 'Redmi 智能电视 X 系列',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/070b329c18c1ab167df2a42564a67813.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          11: {
            name: '小米全面屏电视',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8aeae36f5d088f22c84b8953bd0d08b4.jpg?thumb=1&w=80&h=80',
          },
          12: {
            name: '小米盒子',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/554a4f8ea0c2c3ed19d843bea7321203.jpg?thumb=1&w=80&h=80',
          },
          13: {
            name: '电视音箱',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/381acfeddeebcce4720ea7b8e481252f.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          14: {
            name: '小米透明电视',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          15: {
            name: '小米电视大师 82英寸',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8f12c8d20878e88b66047ef32566e48.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          16: {
            name: '大师电视 65英寸 OLED',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7da49e7ada2229c963c9c7353a58d49b.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          17: {
            name: 'Redmi 智能电视 MAX 98"',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&w=80&h=80&f=webp&q=90',
          },
          18: {
            name: 'Redmi MAX 超大屏',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9074723edc522839834f7fcd12b6f558.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          19: {
            name: 'Redmi 智能电视 X 系列',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/070b329c18c1ab167df2a42564a67813.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          20: {
            name: '小米全面屏电视',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8aeae36f5d088f22c84b8953bd0d08b4.jpg?thumb=1&w=80&h=80',
          },
          21: {
            name: '小米盒子',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/554a4f8ea0c2c3ed19d843bea7321203.jpg?thumb=1&w=80&h=80',
          },
          22: {
            name: '电视音箱',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/381acfeddeebcce4720ea7b8e481252f.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          23: {
            name: '小米透明电视',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
        },
        2: {
          0: {
            name: 'RedmiBook Pro 14 锐龙版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          1: {
            name: 'RedmiBook Pro 15 锐龙版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/70e30a90120626588b8ec6b96173776f.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          2: {
            name: '小米笔记本Pro 15 锐龙版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53ac63f76d43a47fadb8eae6f43d6b04.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          3: {
            name: '小米笔记本Pro 15',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          4: {
            name: '小米笔记本Pro 14',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/32c652aa0d2da1d043b837eba6098541.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          5: {
            name: 'RedmiBook Pro 14',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76ab759c291b0741c4f267b5dbf05a91.jpg?thumb=1&w=80&h=80&f=webp&q=90',
          },
          6: {
            name: 'RedmiBook Pro 14 锐龙版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          7: {
            name: 'RedmiBook Pro 15 锐龙版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/70e30a90120626588b8ec6b96173776f.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          8: {
            name: '小米笔记本Pro 15 锐龙版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53ac63f76d43a47fadb8eae6f43d6b04.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          9: {
            name: '小米笔记本Pro 15',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          10: {
            name: '小米笔记本Pro 14',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/32c652aa0d2da1d043b837eba6098541.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          11: {
            name: 'RedmiBook Pro 14',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76ab759c291b0741c4f267b5dbf05a91.jpg?thumb=1&w=80&h=80&f=webp&q=90',
          },
          12: {
            name: 'RedmiBook Pro 14 锐龙版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          13: {
            name: 'RedmiBook Pro 15 锐龙版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/70e30a90120626588b8ec6b96173776f.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          14: {
            name: '小米笔记本Pro 15 锐龙版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53ac63f76d43a47fadb8eae6f43d6b04.png?thumb=1&w=80&h=80&f=webp&q=90',
          },

        },
        3: {
          0: {
            name: '冰箱',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=80&h=80&f=webp&q=90',
          },
          1: {
            name: '立式空调',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96de94415b860f3de95b2d6294f0d0fd.png?thumb=1&w=80&h=80',
          },
          2: {
              name: '壁挂空调',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png?thumb=1&w=80&h=80',
          },
          3: {
            name: '滚筒洗衣机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18723c3561252ce76c9a1b1eebc4c01c.png?thumb=1&w=80&h=80',
          },
          4: {
            name: 'Redmi全自动波轮洗衣机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d3bace6e62cecb7901e306b05502535f.jpg?thumb=1&w=80&h=80',
          },
          5: {
            name: '净水器',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg?thumb=1&w=80&h=80',
          },
          6: {
            name: '冰箱',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=80&h=80&f=webp&q=90',
          },
          7: {
            name: '立式空调',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96de94415b860f3de95b2d6294f0d0fd.png?thumb=1&w=80&h=80',
          },
          8: {
            name: '壁挂空调',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png?thumb=1&w=80&h=80',
          },
          9: {
            name: '滚筒洗衣机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18723c3561252ce76c9a1b1eebc4c01c.png?thumb=1&w=80&h=80',
          },
          10: {
            name: 'Redmi全自动波轮洗衣机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d3bace6e62cecb7901e306b05502535f.jpg?thumb=1&w=80&h=80',
          },
          11: {
            name: '净水器',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg?thumb=1&w=80&h=80',
          },
          12: {
            name: '冰箱',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=80&h=80&f=webp&q=90',
          },
          13: {
            name: '立式空调',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96de94415b860f3de95b2d6294f0d0fd.png?thumb=1&w=80&h=80',
          },
          14: {
            name: '壁挂空调',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png?thumb=1&w=80&h=80',
          },
          15: {
            name: '滚筒洗衣机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18723c3561252ce76c9a1b1eebc4c01c.png?thumb=1&w=80&h=80',
          },
          16: {
            name: 'Redmi全自动波轮洗衣机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d3bace6e62cecb7901e306b05502535f.jpg?thumb=1&w=80&h=80',
          },
          17: {
            name: '净水器',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg?thumb=1&w=80&h=80',
          },
          18: {
            name: '冰箱',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=80&h=80&f=webp&q=90',
          },
          19: {
            name: '立式空调',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96de94415b860f3de95b2d6294f0d0fd.png?thumb=1&w=80&h=80',
          },
          20: {
            name: '壁挂空调',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png?thumb=1&w=80&h=80',
          },
          21: {
            name: '滚筒洗衣机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18723c3561252ce76c9a1b1eebc4c01c.png?thumb=1&w=80&h=80',
          },
          22: {
            name: 'Redmi全自动波轮洗衣机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d3bace6e62cecb7901e306b05502535f.jpg?thumb=1&w=80&h=80',
          },
        },
        4: {
          0: {
            name: '小米手环6 NFC版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/baba53e0cfd7bf0958edd84f8c5fcbbb.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          1: {
            name: '小米手环6 标准版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/baba53e0cfd7bf0958edd84f8c5fcbbb.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          2: {
            name: '滑板车',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4e9da27ebbeeb38078910c97173c4671.jpg?thumb=1&w=80&h=80',
          },
          3: {
            name: '平衡车',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/50180b158690a40f9cbc684c7646d297.jpg?thumb=1&w=80&h=80',
          },
          4: {
            name: '小米手环6 NFC版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/baba53e0cfd7bf0958edd84f8c5fcbbb.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          5: {
            name: '小米手环6 标准版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/baba53e0cfd7bf0958edd84f8c5fcbbb.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          6: {
            name: '滑板车',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4e9da27ebbeeb38078910c97173c4671.jpg?thumb=1&w=80&h=80',
          },
          7: {
            name: '平衡车',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/50180b158690a40f9cbc684c7646d297.jpg?thumb=1&w=80&h=80',
          },
          8: {
            name: '小米手环6 NFC版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/baba53e0cfd7bf0958edd84f8c5fcbbb.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          9: {
            name: '小米手环6 标准版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/baba53e0cfd7bf0958edd84f8c5fcbbb.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          10: {
            name: '滑板车',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4e9da27ebbeeb38078910c97173c4671.jpg?thumb=1&w=80&h=80',
          },
          11: {
            name: '平衡车',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/50180b158690a40f9cbc684c7646d297.jpg?thumb=1&w=80&h=80',
          },
          12: {
            name: '小米手环6 NFC版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/baba53e0cfd7bf0958edd84f8c5fcbbb.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          13: {
            name: '小米手环6 标准版',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/baba53e0cfd7bf0958edd84f8c5fcbbb.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
        },
        5: {
          0: {
            name: '打印机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=80&h=80',
          },
          1: {
            name: '喷墨打印机',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b1c8b0308b1591ab93b7fe0937a52427.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          2: {
            name: '智能门锁',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4fb7885d49255b93f7245aa53501294c.jpg?thumb=1&w=80&h=80',
          },
          3: {
            name: '摄像机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/067f4a6f0ffb264ed40734a97deae52d.jpg?thumb=1&w=80&h=80',
          },
          4: {
            name: '打印机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=80&h=80',
          },
          5: {
            name: '喷墨打印机',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b1c8b0308b1591ab93b7fe0937a52427.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          6: {
            name: '智能门锁',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4fb7885d49255b93f7245aa53501294c.jpg?thumb=1&w=80&h=80',
          },
          7: {
            name: '摄像机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/067f4a6f0ffb264ed40734a97deae52d.jpg?thumb=1&w=80&h=80',
          },
          8: {
            name: '打印机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=80&h=80',
          },
          9: {
            name: '智能门锁',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4fb7885d49255b93f7245aa53501294c.jpg?thumb=1&w=80&h=80',
          },
          10: {
            name: '摄像机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/067f4a6f0ffb264ed40734a97deae52d.jpg?thumb=1&w=80&h=80',
          },
          11: {
            name: '打印机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=80&h=80',
          },
          12: {
            name: '打印机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=80&h=80',
          },
        },
        6: {
          0: {
            name: '移动电源',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          1: {
            name: '无线充电',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27074367aa02371a3c3c417c41195346.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          2: {
            name: '电池',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/10ec831749f1c657fc0a494feab15ed4.jpg?thumb=1&w=80&h=80',
          },
          3: {
            name: '平板配件',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6ce8ff4bc1e6ded2d40c53b2aa83b98c.jpg?thumb=1&w=80&h=80',
          },
          4: {
            name: '移动电源',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          5: {
            name: '无线充电',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27074367aa02371a3c3c417c41195346.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          6: {
            name: '电池',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/10ec831749f1c657fc0a494feab15ed4.jpg?thumb=1&w=80&h=80',
          },
          7: {
            name: '平板配件',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6ce8ff4bc1e6ded2d40c53b2aa83b98c.jpg?thumb=1&w=80&h=80',
          },
          8: {
            name: '移动电源',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          9: {
            name: '无线充电',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27074367aa02371a3c3c417c41195346.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          10: {
            name: '电池',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/10ec831749f1c657fc0a494feab15ed4.jpg?thumb=1&w=80&h=80',
          },
          11: {
            name: '平板配件',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6ce8ff4bc1e6ded2d40c53b2aa83b98c.jpg?thumb=1&w=80&h=80',
          },
        },
        7: {
          0: {
            name: '牙刷',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/15447769c461fdc71e84a7badb83f09b.jpg?thumb=1&w=80&h=80',
          },
          1: {
            name: '吹风机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bba7ce79f4d61939c69b7a26bf507bae.jpg?thumb=1&w=80&h=80',
          },
          2: {
            name: '剃须刀',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60d7bdf307ceaba08b3275246ad3ab53.jpg?thumb=1&w=80&h=80',
          },
          3: {
            name: '儿童手表',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0b3a592784632760a7ef25de50147a7.jpg?thumb=1&w=80&h=80',
          },
          4: {
            name: '牙刷',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/15447769c461fdc71e84a7badb83f09b.jpg?thumb=1&w=80&h=80',
          },
          5: {
            name: '吹风机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bba7ce79f4d61939c69b7a26bf507bae.jpg?thumb=1&w=80&h=80',
          },
          6: {
            name: '剃须刀',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60d7bdf307ceaba08b3275246ad3ab53.jpg?thumb=1&w=80&h=80',
          },
          7: {
            name: '儿童手表',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0b3a592784632760a7ef25de50147a7.jpg?thumb=1&w=80&h=80',
          },
          8: {
            name: '牙刷',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/15447769c461fdc71e84a7badb83f09b.jpg?thumb=1&w=80&h=80',
          },
          9: {
            name: '吹风机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bba7ce79f4d61939c69b7a26bf507bae.jpg?thumb=1&w=80&h=80',
          },
          10: {
            name: '剃须刀',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60d7bdf307ceaba08b3275246ad3ab53.jpg?thumb=1&w=80&h=80',
          },
          11: {
            name: '儿童手表',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0b3a592784632760a7ef25de50147a7.jpg?thumb=1&w=80&h=80',
          },
          12: {
            name: '牙刷',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/15447769c461fdc71e84a7badb83f09b.jpg?thumb=1&w=80&h=80',
          },
          13: {
            name: '吹风机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bba7ce79f4d61939c69b7a26bf507bae.jpg?thumb=1&w=80&h=80',
          },
        },
        8: {
          0: {
            name: '蓝牙耳机',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b6fa86f424bc8b0355ea899ae0dd39b.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          1: {
            name: 'Redmi音箱',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dacef871b6af373b0212e28b028890b8.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          2: {
            name: '品牌耳机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4885bda69e45b870a5bcf5bbaea1548b.jpg?thumb=1&w=80&h=80',
          },
          3: {
            name: '小爱同学AI音箱',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/db89d422ef877cf7290616fef515e413.jpg?thumb=1&w=80&h=80',
          },
          4: {
            name: '蓝牙耳机',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b6fa86f424bc8b0355ea899ae0dd39b.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          5: {
            name: 'Redmi音箱',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dacef871b6af373b0212e28b028890b8.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          6: {
            name: '品牌耳机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4885bda69e45b870a5bcf5bbaea1548b.jpg?thumb=1&w=80&h=80',
          },
          7: {
            name: '小爱同学AI音箱',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/db89d422ef877cf7290616fef515e413.jpg?thumb=1&w=80&h=80',
          },
          8: {
            name: '蓝牙耳机',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b6fa86f424bc8b0355ea899ae0dd39b.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          9: {
            name: 'Redmi音箱',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dacef871b6af373b0212e28b028890b8.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          10: {
            name: '品牌耳机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4885bda69e45b870a5bcf5bbaea1548b.jpg?thumb=1&w=80&h=80',
          },
          11: {
            name: '小爱同学AI音箱',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/db89d422ef877cf7290616fef515e413.jpg?thumb=1&w=80&h=80',
          },
          12: {
            name: '蓝牙耳机',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b6fa86f424bc8b0355ea899ae0dd39b.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          13: {
            name: 'Redmi音箱',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dacef871b6af373b0212e28b028890b8.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          14: {
            name: '品牌耳机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4885bda69e45b870a5bcf5bbaea1548b.jpg?thumb=1&w=80&h=80',
          },
          15: {
            name: '小爱同学AI音箱',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/db89d422ef877cf7290616fef515e413.jpg?thumb=1&w=80&h=80',
          },
          16: {
            name: '蓝牙耳机',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b6fa86f424bc8b0355ea899ae0dd39b.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          17: {
            name: 'Redmi音箱',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dacef871b6af373b0212e28b028890b8.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          18: {
            name: '品牌耳机',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4885bda69e45b870a5bcf5bbaea1548b.jpg?thumb=1&w=80&h=80',
          },
          19: {
            name: '小爱同学AI音箱',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/db89d422ef877cf7290616fef515e413.jpg?thumb=1&w=80&h=80',
          },
          20: {
            name: '蓝牙耳机',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b6fa86f424bc8b0355ea899ae0dd39b.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
          21: {
            name: 'Redmi音箱',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dacef871b6af373b0212e28b028890b8.png?thumb=1&w=80&h=80&f=webp&q=90',
          },
        },
        9: {
          0: {
            name: '运动鞋',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e899d08e36c306570d4fe3c75df90a42.jpg?thumb=1&w=80&h=80',
          },
          1: {
            name: '旅行箱',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5138635ef1396e35856ec942e3b6c0.jpg?thumb=1&w=80&h=80&f=webp&q=90',
          },
          2: {
            name: '小背包',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=80&h=80&f=webp&q=90',
          },
          3: {
            name: '保温杯',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/813d173eff50a83abb8abd5abde5f5a6.jpg?thumb=1&w=80&h=80',
          },
          4: {
            name: '运动鞋',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e899d08e36c306570d4fe3c75df90a42.jpg?thumb=1&w=80&h=80',
          },
          5: {
            name: '旅行箱',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5138635ef1396e35856ec942e3b6c0.jpg?thumb=1&w=80&h=80&f=webp&q=90',
          },
          6: {
            name: '小背包',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=80&h=80&f=webp&q=90',
          },
          7: {
            name: '保温杯',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/813d173eff50a83abb8abd5abde5f5a6.jpg?thumb=1&w=80&h=80',
          },
          8: {
            name: '运动鞋',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e899d08e36c306570d4fe3c75df90a42.jpg?thumb=1&w=80&h=80',
          },
          9: {
            name: '旅行箱',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5138635ef1396e35856ec942e3b6c0.jpg?thumb=1&w=80&h=80&f=webp&q=90',
          },
          10: {
            name: '小背包',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=80&h=80&f=webp&q=90',
          },
          11: {
            name: '保温杯',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/813d173eff50a83abb8abd5abde5f5a6.jpg?thumb=1&w=80&h=80',
          },
          12: {
            name: '运动鞋',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e899d08e36c306570d4fe3c75df90a42.jpg?thumb=1&w=80&h=80',
          },
          13: {
            name: '旅行箱',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5138635ef1396e35856ec942e3b6c0.jpg?thumb=1&w=80&h=80&f=webp&q=90',
          },
          14: {
            name: '小背包',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=80&h=80&f=webp&q=90',
          },
        },
      }
    }
  }
}
</script>

<style scoped>
</style>
