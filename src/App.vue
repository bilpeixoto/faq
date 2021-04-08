<template>
  <div class="container">
    <div class="box">
      <EscolhaCategoria> </EscolhaCategoria>
    </div>
  </div>
</template>

<script>
import EscolhaCategoria from '@/components/EscolhaCategoria.vue'

export default {
  components: {
    EscolhaCategoria
  }
}
</script>

<style>
h1 {
  font-size: 20px;
}
h3 {
  font-size: 13px;
  font-weight: 400;
}
.container {
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
}

.box {
  width: 305px;
  height: 457px;
  background-image: linear-gradient(180deg, #3f4452, #26282c);
  border-radius: 15px;
  display: grid;
  padding: 2rem 0.375rem;
  padding-bottom: 0.875rem;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: #f5f6f8;
  list-style: none;
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
  src: url('~@/assets/fonts/Lato-Regular.ttf');
  font-weight: 400;
  font-display: block;
}
@font-face {
  font-family: Lato;
  src: url('~@/assets/fonts/Lato-Bold.ttf');
  font-weight: 700;
  font-display: block;
}
</style>
