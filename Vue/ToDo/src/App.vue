<template>
  <div id="app">
    <Header></Header>
    <wrap></wrap>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./todo/header";
import Footer from "./todo/footer";
import wrap from "./todo/todo";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    wrap
  }
};
</script>

<style lang="scss" scoped>
#app {
  position: absolute;
  min-height: 100%;
  right: 0;
  left: 0;
  width: 80%;
  margin: auto;
  background: #fff;
}
</style>
