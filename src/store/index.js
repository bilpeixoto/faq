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
    }
  },
  mutations: {
    SET_CATEGORIES(state, faqCategories) {
      state.categories = faqCategories
    },
    SET_PAGE(state, params) {
      state.oldPage.page = state.nextPage.page
      state.oldPage.idSelected = state.nextPage.idSelected
      state.nextPage.page = params.page
      state.nextPage.idSelected = params.idSelected - 1
      console.log(this.state.nextPage, this.state.oldPage)
    },
    BACK(state) {
      state.nextPage.page = state.oldPage.page
      state.nextPage.idSelected = state.oldPage.idSelected
      console.log(this.state.nextPage, this.state.oldPage)
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
      context.commit('SET_PAGE', 'answers', idSelected)
    },

    back(context) {
      context.commit('BACK')
    }
  },
  getters: {
    $getCategories(state){
      return state.categories
    },
    $getNextPage(state){
      return state.nextPage
    },
    $getQuestions(state){
      const id = state.nextPage.idSelected
      return state.categories[id]
    }
  }
})
