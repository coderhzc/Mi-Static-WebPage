<template>
  <div>
    <one-shop-detail/>
    <two-shop-detail/>
    <three-shop-detail/>
  </div>
</template>

<script>
import oneShopDetail from "@/views/body/shopDetail/childrenShopDetail/OneShopDetail";
import TwoShopDetail from "@/views/body/shopDetail/childrenShopDetail/TwoShopDetail";
import ThreeShopDetail from "@/views/body/shopDetail/childrenShopDetail/ThreeShopDetail";
export default {
  name: "ShopDetailView",
  components:{
    oneShopDetail,
    TwoShopDetail,
    ThreeShopDetail
  },
}
</script>

<style scoped>
</style>
