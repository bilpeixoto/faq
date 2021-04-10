import { createStore } from 'vuex'
import { faqCategories } from '@/utils/db.json'

export default createStore({
  state: {
    categories: [],
    nextPage: {
      page: 'SelecaoDeCategoria',
      idSelected: 0
    },
    oldPage: {
      page: '',
      idSelected: 0
    },
    transitionDepth: 1
  },
  mutations: {
    SET_CATEGORIES(state, faqCategories) {
      state.categories = faqCategories
    },
    SET_PAGE(state, params) {
      state.oldPage.page = state.nextPage.page
      state.oldPage.idSelected = state.nextPage.idSelected
      state.nextPage.page = params.page
      state.nextPage.idSelected = params.idSelected
    },
    BACK(state) {
      state.nextPage.page = state.oldPage.page
      state.nextPage.idSelected = state.oldPage.idSelected
    },
    BACK_TO_HOME(state) {
      state.nextPage.page = 'SelecaoDeCategoria'
      state.nextPage.idSelected = 0
    },
    INCREASE_TRANSITION_DEPTH(state) {
      state.transitionDepth++
    },
    DECREASE_TRANSITION_DEPTH(state) {
      state.transitionDepth--
    }
  },
  actions: {
    fetchCategories(context) {
      context.commit('SET_CATEGORIES', faqCategories)
    },
    selectCategory(context, idSelected) {
      const params = { page: 'SelecaoDePergunta', idSelected: idSelected }
      context.commit('SET_PAGE', params)
    },

    selectQuestion(context, idSelected) {
      const params = { page: 'Respostas', idSelected: idSelected }
      context.commit('SET_PAGE', params)
    },

    back(context) {
      context.commit('BACK')
    },

    backToHome(context) {
      context.commit('BACK_TO_HOME')
    },
    increaseTransitionDepth(context) {
      context.commit('INCREASE_TRANSITION_DEPTH')
    },
    decreaseTransitionDepth(context) {
      context.commit('DECREASE_TRANSITION_DEPTH')
    }
  },
  getters: {
    $getCategories(state) {
      return state.categories
    },
    $getNextPage(state) {
      return state.nextPage
    },
    $getQuestions(state) {
      const id = state.nextPage.idSelected
      return state.categories[id]
    },
    $getAnswer(state) {
      const idCategory = state.oldPage.idSelected
      const idQuestion = state.nextPage.idSelected
      return state.categories[idCategory].questions[idQuestion]
    },
    $transitionDepth(state) {
      return state.transitionDepth
    }
  }
})
