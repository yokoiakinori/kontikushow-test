export const state = () => ({
  slideImage: [],
  latestNews: [],
  about: [],
  item: [],
})

export const mutations = {
  setlatestNews(state, list) {
    state.latestNews = list
  },
  setslideImage(state, list) {
    state.slideImage = list
  },
  setabout(state, list) {
    state.about = list
  },
  setitem(state, list) {
    state.item = list
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
      '~/assets/content/SlideImages',
      false,
      /\.json$/
    )
    const slidePosts = SIfiles.keys().map((key) => {
      const res = SIfiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    const Afiles = await require.context(
      '~/assets/content/About',
      false,
      /\.json$/
    )
    const aboutPosts = Afiles.keys().map((key) => {
      const res = Afiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    const Ifiles = await require.context(
      '~/assets/content/Item',
      false,
      /\.json$/
    )
    const itemPosts = Ifiles.keys().map((key) => {
      const res = Ifiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setlatestNews', newsPosts)
    await commit('setslideImage', slidePosts)
    await commit('setabout', aboutPosts)
    await commit('setitem', itemPosts)
  },
}
