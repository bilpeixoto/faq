<template>
  <div class="container">
    <div class="box">
      <transition class="slide" :name="transitionType" mode="out-in">
        <component :is="$getNextPage" />
      </transition>
    </div>
  </div>
</template>

<script>
import SelecaoDeCategoria from '@/components/SelecaoDeCategoria.vue'
import SelecaoDePergunta from '@/components/SelecaoDePergunta.vue'
import Respostas from '@/components/Respostas.vue'
import 'animate.css'

export default {
  components: {
    SelecaoDeCategoria,
    SelecaoDePergunta,
    Respostas
  },
  data() {
    return {
      transitionType: 'slide-left'
    }
  },
  computed: {
    $getNextPage() {
      return this.$store.getters.$getNextPage.page
    },
    $transitionDepth() {
      return this.$store.getters.$transitionDepth
    }
  },
  created() {
    this.$store.dispatch('fetchCategories')
  },
  watch: {
    $transitionDepth(newValue, oldValue) {
      if (newValue > oldValue) {
        this.transitionType = 'slide-left'
      } else {
        this.transitionType = 'slide-right'
      }
    }
  }
}
</script>

<style>
h1 {
  font-size: 20px;
}
h2 {
  font-size: 16px;
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
  border-radius: 30px;
  display: grid;
  align-content: start;
  box-shadow: 0 8px 21px 3px rgb(0 0 0 / 30%);
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
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(1.5em, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-1.5em, 0);
}
.slide-right-enter-active {
  opacity: 0;
  animation: fade 300ms ease;
}
.slide-left-enter-active {
  opacity: 0;
  animation: fade 300ms ease;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
