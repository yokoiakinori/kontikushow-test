export const state = () => ({
  slideImage: [],
  latestNews: [],
})

export const mutations = {
  setlatestNews(state, list) {
    state.latestNews = list
  },
  setslideImage(state, list) {
    state.slideImage = list
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const LNfiles = await require.context(
      '~/assets/content/LatestNews',
      false,
      /\.json$/
    )
    const newsPosts = LNfiles.keys().map((key) => {
      const res = LNfiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    const SIfiles = await require.context(
      '~/assets/content/LatestNews',
      false,
      /\.json$/
    )
    const slidePosts = SIfiles.keys().map((key) => {
      const res = SIfiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setlatestNews', newsPosts)
    await commit('setslideImage', slidePosts)
  },
}
