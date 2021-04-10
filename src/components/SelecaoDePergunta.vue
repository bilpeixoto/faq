<template>
  <div>
    <div class="heading">
      <div class="btn-arrow" v-on:click="backToHome()">
        <img src="@/assets/images/arrow-left.svg" />
      </div>

      <div class="heading-text">
        <h1>{{ $getQuestions.title }}</h1>
        <h3>Selecione uma pergunta</h3>
      </div>
      <img
        :src="require(`@/assets/images/${$getQuestions.icon}`)"
        class="question-icon"
      />
    </div>
    <div class="line"></div>
    <ul class="questions">
      <li
        v-for="question in $getQuestions.questions"
        :key="question.id"
        class="question-item"
        v-on:click="selectQuestion(question.id)"
      >
        {{ question.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    backToHome() {
      this.$store.dispatch('decreaseTransitionDepth')
      this.$store.dispatch('backToHome')
    },
    selectQuestion(idQuestion) {
      this.$store.dispatch('increaseTransitionDepth')
      this.$store.dispatch('selectQuestion', idQuestion)
    }
  },
  computed: {
    $getQuestions() {
      return this.$store.getters.$getQuestions
    }
  }
}
</script>

<style scoped>
.heading {
  display: grid;
  padding-bottom: 1em;
  padding-left: 1.4em;
  grid-auto-flow: column;
  grid-template-columns: auto 3fr 1fr;
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

.question-item {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1.7rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
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
  transition: background-color 0.3s ease-in-out;
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
