export const state = () => ({
  slideImage: [],
  news: [],
  about: [],
  item: [],
})

export const mutations = {
  setNews(state, list) {
    state.news = list
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

export const getters = {
  allNews(state) {
    return state.news
  },
  latestNews(state) {
    return state.news.slice(0, 3)
  },
  getItem: (state) => (contentsIndex) => {
    if (state.item.length - contentsIndex !== -1) {
      return state.item[contentsIndex - 1]
    }
  },
  appearItem: (state) => (contentsIndex) => {
    return state.item.slice(contentsIndex - 1, contentsIndex + 5)
  },
  allItemLength(state) {
    return state.item.length
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
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
    await commit('setNews', newsPosts)
    await commit('setslideImage', slidePosts)
    await commit('setabout', aboutPosts)
    await commit('setitem', itemPosts)
  },
}
