/*
 * @Author: Ying Zhang
 * @Date: 2022-10-08 20:43:30
 * @LastEditors: Ying Zhang
 * @Description:
 * @FilePath: /Arweave-Uploader-Plugin-Everpay/src/router/index.js
 * 道阻且长，行则将至
 */

import Vue from "vue";
import Router from "vue-router";

// const App = (resolve) => require(["@/App"], resolve);
// const About = (resolve) => require(["@/components/about/index"], resolve);

Vue.use(Router);

let router = new Router({
  mode: "hash",
  routes: [
    // {
    //   path: "/",
    //   component: App,
    //   name: "App",
    //   menuShow: false,
    // },
    // {
    //   path: "/home",
    //   component: Home,
    //   name: "Home",
    //   menuShow: false,
    //   children: [
    //     {
    //       path: "/about",
    //       component: About,
    //       name: "About",
    //       menuShow: false,
    //     },
    //   ],
    // },
  ],
});

export default router;
