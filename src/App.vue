<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Footer from "../src/components/Footer";
export default {
  components: {
    Footer
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
