export const state = () => ({
  slideImage: [],
  news: [],
  about: [],
  allItem: Array,
  categoryItem: Array,
  categories: [
    { name: 'アクセサリー', path: 'accessories' },
    { name: '日用品', path: 'daily-necessities' },
    { name: '事務用品', path: 'office-supplies' },
    { name: 'その他', path: 'other' },
  ],
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
    state.allItem = list.sort(function (a, b) {
      return a['created-date'] < b['created-date'] ? 1 : -1
    })
  },
  extractcategory(state, category) {
    if (state.categoryItem.length > 1) {
      state.categoryItem = state.allItem
        .filter(function (item) {
          return item.category === category
        })
        .sort(function (a, b) {
          return a['created-date'] < b['created-date'] ? 1 : -1
        })
    } else {
      state.categoryItem = state.allItem.filter(function (item) {
        return item.category === category
      })
    }
  },
}

export const getters = {
  allNews(state) {
    return state.news
  },
  latestNews(state) {
    return state.news.slice(0, 3)
  },
  appearItem: (state) => (contentsIndex) => {
    return state.allItem.slice(contentsIndex - 1, contentsIndex + 5)
  },
  getItem: (state) => (contentsIndex) => {
    if (state.allItem.length - contentsIndex !== -1) {
      return state.item[contentsIndex - 1]
    }
  },
  appearCategoryItem: (state) => (contentsIndex) => {
    if (state.categoryItem.length >= 1) {
      return state.categoryItem.slice(contentsIndex - 1, contentsIndex + 5)
    }
  },
  getCategoryItem: (state) => (contentsIndex) => {
    if (state.categoryItem.length - contentsIndex !== -1) {
      return state.item[contentsIndex - 1]
    }
  },
  allItemLength(state) {
    return state.allItem.length
  },
  categoryItemLength(state) {
    return state.categoryItem.length
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
