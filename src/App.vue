<template>
  <div id="app">
    <main-page/>
  </div>
</template>

<script>
import MainPage from "@/views/mainPage/MainPage";
  export default {
    name:'App',
    components:{
      MainPage
    }
  }
</script>

<style>
@import "assets/css/base.css";
</style>
