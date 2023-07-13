<!--
 * @Author: Ying Zhang
 * @Date: 2022-10-08 20:51:45
 * @LastEditors: Ying Zhang
 * @Description: 
 * @FilePath: /Arweave-Uploader-Plugin-Everpay/src/components/about/index.vue
 * 道阻且长，行则将至
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="jump()">go to home</button>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
  methods: {
    jump() {
      this.$router.push("/home");
      console.log("go to home");
    },
  },
};
</script>

<style scoped>
.about h1 {
  color: red;
  font-size: 50px;
}
</style>
