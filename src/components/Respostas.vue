<template>
  <div>
    <div class="heading">
      <div class="btn-arrow" v-on:click="back()">
        <img src="@/assets/images/arrow-left.svg" />
      </div>

      <div class="heading-text">
        <h2>{{ $getAnswer.title }}</h2>
      </div>
    </div>
    <div class="line"></div>
    <div v-html="$getAnswer.content" class="answer"></div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$store.dispatch('decreaseTransitionDepth')
      this.$store.dispatch('back')
    }
  },
  computed: {
    $getAnswer() {
      return this.$store.getters.$getAnswer
    }
  }
}
</script>

<style scoped>
.heading {
  display: grid;
  padding-left: 1.4em;
  padding-right: 1rem;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 0.6rem;
}

.heading-text {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 0.5rem;
}

.questions {
  display: grid;
  padding: 0.7rem;
}

.answer {
  padding: 1.5rem;
  font-size: 13px;
}

.question-item {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1.7rem;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  align-items: center;
  padding: 0.7em 1.5em;
  border-radius: 30px;
}

.question-item:hover {
  background-color: #3f4452;
}

.btn-arrow {
  padding: 0.875rem 0.75rem;
  cursor: pointer;
  background-color: transparent;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
  display: grid;
  justify-content: center;
  align-items: center;
}

.btn-arrow img {
  width: 1.5rem;
}

.btn-arrow:hover {
  background-color: #3f4452;
}
.question-icon {
  width: 24px;
}

.line {
  margin-top: 1rem;
  width: 100%;
  height: 1px;
  background-color: #3f4452;
}
</style>
