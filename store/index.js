export const state = () => ({
  slideImage: [],
  selectPI: [],
  popularItem: [],
  news: [],
  about: [],
})

export const mutations = {
  setslideImage(state, list) {
    state.slideImage = list
  },
  inputPIname(state, list) {
    state.selectPI = list.sort(function (a, b) {
      return a.name < b.name ? 1 : 1
    })
  },
  setpopularItem(state) {
    if (state.popularItem <= 3) {
      for (let i = 0; i < state.selectPI.length; i++) {
        state.popularItem.push(
          state.item.allItem.find(
            (element) => element.name === state.selectPI[i].popularitems
          )
        )
      }
    }
  },
  setnews(state, list) {
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
    const PIfiles = await require.context(
      '~/assets/content/PopularItems',
      false,
      /\.json$/
    )
    const popularItemPosts = PIfiles.keys().map((key) => {
      const res = PIfiles(key)
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
    await commit('inputPIname', popularItemPosts)
    await commit('setnews', newsPosts)
    await commit('setabout', aboutPosts)
    await commit('setitem', itemPosts)
  },
}
