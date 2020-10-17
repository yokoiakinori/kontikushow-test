export const state = () => ({
  slideImage: [],
  news: [],
  about: [],
})

export const mutations = {
  setslideImage(state, list) {
    state.slideImage = list
  },
  setNews(state, list) {
    state.news = list.sort(function (a, b) {
      return a['created-date'] < b['created-date'] ? 1 : -1
    })
  },
  setabout(state, list) {
    state.about = list
  },
  setitem(state, list) {
    state.item.allItem = list.sort(function (a, b) {
      return a['created-date'] < b['created-date'] ? 1 : -1
    })
  },
}

export const getters = {
  allNews(state) {
    return state.news
  },
  latestNews(state) {
    return state.news.slice(0, 3)
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
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
    const Nfiles = await require.context(
      '~/assets/content/News',
      false,
      /\.json$/
    )
    const newsPosts = Nfiles.keys().map((key) => {
      const res = Nfiles(key)
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
    await commit('setslideImage', slidePosts)
    await commit('setNews', newsPosts)
    await commit('setabout', aboutPosts)
    await commit('setitem', itemPosts)
  },
}
