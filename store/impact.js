import ImpactService from '~/services/ImpactService'

export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  fetchImpact(context) {
    return ImpactService.getTotalImpact()
      .then((impact) => {
        return impact
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
