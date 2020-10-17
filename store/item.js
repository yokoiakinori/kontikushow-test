export const state = () => ({
  allItem: Array,
  categoryItem: Array,
  tagItem: Array,
  categories: [
    { name: 'アクセサリー', path: 'accessories' },
    { name: '日用品', path: 'daily-necessities' },
    { name: '事務用品', path: 'office-supplies' },
    { name: 'その他', path: 'other' },
  ],
  tagKeyword: String,
})

export const mutations = {
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
  setKeyword(state, keyword) {
    state.tagKeyword = keyword
  },
  extractTag(state) {
    if (state.allItem.length > 1) {
      state.tagItem = state.allItem.filter(function (item) {
        return item.tags.some((tag) => tag.tagname === state.tagKeyword)
      })
    }
  },
}

export const getters = {
  appearItem: (state) => (contentsIndex) => {
    return state.allItem.slice(contentsIndex - 1, contentsIndex + 4)
  },
  getItem: (state) => (contentsIndex) => {
    if (state.allItem.length - contentsIndex !== -1) {
      return state.allItem[contentsIndex - 1]
    }
  },
  allItemLength(state) {
    return state.allItem.length
  },

  appearCategoryItem: (state) => (contentsIndex) => {
    if (state.categoryItem.length >= 1) {
      return state.categoryItem.slice(contentsIndex - 1, contentsIndex + 4)
    }
  },
  getCategoryItem: (state) => (contentsIndex) => {
    if (state.categoryItem.length - contentsIndex !== -1) {
      return state.categoryItem[contentsIndex - 1]
    }
  },
  categoryItemLength(state) {
    return state.categoryItem.length
  },

  appearTagItem: (state) => (contentsIndex) => {
    if (state.tagItem.length >= 1) {
      return state.tagItem.slice(contentsIndex - 1, contentsIndex + 4)
    }
  },
  getTagItem: (state) => (contentsIndex) => {
    if (state.tagItem.length - contentsIndex !== -1) {
      return state.tagItem[contentsIndex - 1]
    }
  },
  tagItemLength(state) {
    return state.tagItem.length
  },
}
