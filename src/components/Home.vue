<!--
 * @Author: Ying Zhang
 * @Date: 2022-10-08 20:57:16
 * @LastEditors: Ying Zhang
 * @Description: 
 * @FilePath: /Arweave-Uploader-Plugin-Everpay/src/components/Home.vue
 * 道阻且长，行则将至
-->
<template>
  <div class="home">
    <h1>This is a home page</h1>
    <div>
      <button @click="jump()">go to about</button>
    </div>

    <router-view class="child-view"></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    jump() {
      this.$router.push("/about");
      console.log("go to about");
    },
  },
};
</script>

<style>
.home h1 {
  color: blue;
  font-size: 50px;
}
</style>
