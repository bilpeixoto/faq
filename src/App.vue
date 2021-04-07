<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: Lato;
}

a {
  color: #22e0db;
  text-decoration: none;
}

@font-face {
  font-family: Lato;
  src: url("~@/assets/fonts/Lato-Regular.ttf");
  font-weight: 400;
  font-display: block;
}

@font-face {
  font-family: Lato;
  src: url("~@/assets/fonts/Lato-Bold.ttf");
  font-weight: 700;
  font-display: block;
}
</style>
