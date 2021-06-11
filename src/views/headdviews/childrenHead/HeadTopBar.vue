<template>
  <div class="top-bar">
    <top-bar>
      <top-bar-item class="top-bar-item" :shop-message="centerItem"/>
      <top-bar-drop-down class="top-bar-drop-down" :drop-down-shop="centerItem.shop"/>
    </top-bar>
  </div>
</template>

<script>
import TopBar from "@/components/content/topBar/TopBar";
import TopBarItem from "@/components/content/topBar/TopBarItem";
import TopBarDropDown from "@/components/content/topBar/TopBarDropDown";
export default {
  name: "MainTopBar",
  components: {
    TopBar,
    TopBarItem,
    TopBarDropDown
  },
  data() {
    return {
      topBarIndex: 0,
      centerItem: {
        image: "http://s02.mifile.cn/assets/static/image/logo-mi2.png",
        item: ["小米手机", "Redmi手机", "电视", "笔记本", "家电", "路由器", "智能硬件", "服务", "社区",],
        search: ["手机", "【以旧换新】高额补贴", "空调","空气净化器","家电", "电视","618夏日入新活动"],
        shop: {
          0: {
            0: {
              shopName: '小米MIX FOLD',
              shopImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85e44ea2405ff8414148bbde7446b137.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice: '9999元起',
            },
            1: {
              shopName: '小米11 Ultra',
              shopImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a359e9346e3c6ee8c9d8389e3fd9458.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice: '5999元起',
            },
            2: {
              shopName: '小米11 Pro',
              shopImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1c45eadcedeb27b1cafca0359422da9.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice: '4999元起',
            },
            3: {
              shopName: '小米11 青春版',
              shopImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56e3379b5422cb06e5c8a0c546445606.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice: '2299元起',
            },
            4: {
              shopName: '小米10S',
              shopImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f9149ef3ba2c9025a4a21c98ae793808.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice: '3299元起',
            },
            5: {
              shopName: '小米11',
              shopImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/963679eaf3937351e154600ab3448460.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice: '3999元起',
            },
          },
          1: {
            0: {
              shopName:'Not 10 Pro',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e3c5d99c28700a3c45ea65eebbea0a04.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'1699元起'
            },
            1: {
              shopName:'Not 10 5G',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88bb84ff06f0ab467b859aeed36b817a.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'1099元起'
            },
            2: {
              shopName:'K40 游戏增强版',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/acd0f27496ccdf81ef42124c35e8bfc4.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'1999元起'
            },
            3: {
              shopName:'K40 Pro 系列',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d07671f25a2b3a6c3d4fac189f28fbe9.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'2799元起'
            },
            4: {
              shopName:'Redmi K40',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ecebd50c7840bb03d7b5e3bfe4d439c2.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'1999元起'
            },
            5: {
              shopName:'Redmi Not9 系列',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/584add2c9cfdb9eefe7b642bf191773a.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'999元起'
            },
          },
          2: {
            0: {
              shopName:'Redmi MAX 86" 超大屏电视',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c87fdc4bcfd081ac240f7af1417ce60.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'9999元起'
            },
            1: {
              shopName:'小米电视大师 82英寸至尊纪念版',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/174a2f9256a44b98f9e08bbe30528329.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'49999起'
            },
            2: {
              shopName:'小米电视大师 82寸',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e513ac03d0ebb594bf42f7d6b1b44944.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'11999元起'
            },
            3: {
              shopName:'小米透明电视',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'49999元起'
            },
            4: {
              shopName:'小米透明电视 大师 65英寸OLED',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea3390a20547c7298a258528e4aa69ad.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'9999元起'
            },
            5: {
              shopName:'Redmi 智能电视 MAX 98"',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0112cb7e2ea8489fbd36ce3a781d5232.jpg?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'19999元起'
            },
          },
          3: {
            0: {
              shopName:'Redmibokk Pro 14 锐龙版',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37fcbe3b823c837b6ffe7f59f7aa579e.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'1699元起'
            },
            1: {
              shopName:'Redmibook Pro 15 锐龙版',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/789c69b743d9c46a39dd179cefdbce7c.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'4999元起'
            },
            2: {
              shopName:'小米笔记本 Pro 15 锐龙版',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ef482fe00cdcb7294e4029543ca9b9b.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'6799元起'
            },
            3: {
              shopName:'小米笔记本Pro 15',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/705cde5b7afce7ee89d95d1a35938778.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'6499元起'
            },
            4: {
              shopName:'Redmi Pro 14',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7872a4195d666f08bef0877562dd7fe7.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'4699元起'
            },
            5: {
              shopName:'小米笔记本Pro 14',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95abdace7ad322e6237c98a61d967774.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'5299'
            },
          },
          4: {
            0: {
              shopName:'米家风冷对开门冰箱',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b7a4e3ff7919ca2407ad970b78abd09a.jpg?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'2349元起'
            },
            1: {
              shopName:'米家扫地机器人1T',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/65df9e92c06dcd148de5f0eb13e16ea2.png?thumb=1&w=320&h=220&f=webp&q=90  ',
              shopPrice:'2299元起'
            },
            2: {
              shopName:'米家互联网洗烘一体机10kg',
              shopImage:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/11b8bca444aba2994fe852993eac9203.png?thumb=1&w=320&h=220',
              shopPrice:'1799元起'
            },
            3: {
              shopName:'小米净化器S1 800G',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c82798dbbc793c8bd52929dbe86b316f.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'2099元起'
            },
            4: {
              shopName:'米家空气净化器3 高效除菌',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/48d69ed4cc41d5c9d33bdeefd7f1da69.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'899元起'
            },
            5: {
              shopName:'米家两门冰箱 160L',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/40ad6e8398095e97309a5538b516a2de.jpg?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'849元起'
            },
          },
          5: {
            0: {
              shopName:'小米路由器AX600',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a759fa795d749f0538cfd2a15890027.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'599元起'
            },
            1: {
              shopName:'Redmi路由器 AX6',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/54de949334c3d794a6ca55b76e4bb379.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'329元起'
            },
            2: {
              shopName:'小米路由器AX9000',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2815a0a208be362cba673aae9a1f9c93.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'999元起'
            },
            3: {
              shopName:'小米路由器 AX1800',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27da43294889d049a111e5ff2cdfafe7.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'329元起'
            },
            4: {
              shopName:'小米AloT路由器AX3600',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/359d3c63cc159949d8fe147a11b4bc40.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'499元起'
            },
            5: {
              shopName:'Redmi路由器AC2100',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa1e0a4860cf40d34e1192d86691c82c.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'169元起'
            },
          },
          6: {
            0: {
              shopName:'小米全自动智能锁',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2b87ae4a36beef69bb2018eb1f8bce9b.png?thumb=1&w=320&h=220&f=webp&q=90',
               shopPrice:'1799元'
            },
            1: {
              shopName:'Redmi小爱触屏音箱Pro8',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9c6a5f44fd12afa182367ed8d1716421.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'499元'
            },
            2: {
              shopName:'小米小爱触屏音箱',
              shopImage:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f6e585a4bf5c0f744ca60f19ecd6fadf.jpg?thumb=1&w=320&h=220',
              shopPrice:'249元'
            },
            3: {
              shopName:'Redmi小爱音箱 Play',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/17c0c91317ec0def3ecc072fa9480192.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:'49.5元起'
            },
            4: {
              shopName:'查看全部智能硬件',
              shopImage:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12cdacc6e4f343861d31345036cc3b46.png?thumb=1&w=320&h=220&f=webp&q=90',
              shopPrice:''
            },
          },
        },//TopBar商品数据
      }
    }
  }
}
</script>

<style scoped>
.top-bar{
  position: relative;
  background-color: #ffffff;
}
.top-bar-item{
  position: relative;
  z-index: 6;
}
.top-bar-drop-down{
  position: relative;
  z-index: 1;
}
</style>
