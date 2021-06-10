<template>
  <div>
    <main-nav-bar/>
    <main-top-bar/>
  </div>
</template>

<script>
import MainNavBar from "@/views/headdviews/childrenHead/HeadNavBar";
import MainTopBar from "@/views/headdviews/childrenHead/HeadTopBar";
export default {
  name: "MainPage",
  components:{
    MainNavBar,
    MainTopBar
  }
}
</script>

<style scoped>
</style>
