<template>
  <div>
    <Header />

    <router-view /><!--路由组建的显示-->

    <!-- <Footer v-if="$route.meta.isFooterHide" />业务场景 登录和注册界面不需要footer组件 所以需要根据他们携带的meta的isFooterHider属性决定是否显示footer组件 -->
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less" scoped></style>
