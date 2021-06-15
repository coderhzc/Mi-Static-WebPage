<template>
  <div>
    <one-shop-detail/>
    <two-shop-detail/>
  </div>
</template>

<script>
import oneShopDetail from "@/views/body/shopDetail/childrenShopDetail/OneShopDetail";
import TwoShopDetail from "@/views/body/shopDetail/childrenShopDetail/TwoShopDetail";
export default {
  name: "ShopDetailView",
  components:{
    oneShopDetail,
    TwoShopDetail
  },
}
</script>

<style scoped>
</style>
