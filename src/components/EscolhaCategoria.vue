<template>
  <div class="heading">
    <div class="heading-image">
      <img src="@/assets/images/astronaut.svg" />
    </div>
    <div class="heading-text">
      <h1>Perguntas Frequentes</h1>
      <h3>Escolha a categoria desejada</h3>
    </div>
  </div>
  <ul class="categories">
    <li
      v-for="category in faqCategories"
      :key="category.id"
      class="category-item"
    >
      <img :src="require(`@/assets/images/${category.icon}`)" />
      {{ category.title }}
    </li>
  </ul>
</template>

<script>
import { faqCategories } from '@/utils/db.json'

export default {
  data() {
    return {
      faqCategories
    }
  }
}
</script>

<style scoped>
.heading {
  display: grid;
  padding: 0 1.5em;
  padding-bottom: 1em;
}

.heading-text {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 0.5rem;
}
.categories {
  display: grid;
  padding-bottom: 1.2rem;
}

.category-item {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1.7rem;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  align-items: center;
  padding: 0.7em 1.5em;
  border-radius: 30px;
}

.category-item:hover {
  background-color: #3f4452;
}

.category-item img {
  width: 24px;
}
</style>
