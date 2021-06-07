import CategoryService from '../services/CategoryService'

export const state = () => ({
  categories: [],
})

export const getters = {}

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
}

export const actions = {
  fetchCategories({ commit }) {
    return CategoryService.getCategories()
      .then((categories) => {
        commit('SET_CATEGORIES', categories)
      })
      .catch((error) => {
        console.error(error)
      })
  },
  fetchCategory(context, categoryId) {
    return CategoryService.getCategory(categoryId)
      .then((category) => {
        return category
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
