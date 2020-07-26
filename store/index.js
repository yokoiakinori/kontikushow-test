// export const state = () => ({
//   latestNews: [],
// })

// export const mutations = {
//   setlatestNews(state, list) {
//     state.latestNews = list
//   },
// }

// export const actions = {
//   async nuxtServerInit({ commit }) {
//     const files = await require.context(
//       '~/assets/content/LatestNews',
//       false,
//       /\.json$/
//     )
//     const newsPosts = files.keys().map((key) => {
//       const res = files(key)
//       res.slug = key.slice(2, -5)
//       return res
//     })
//     await commit('setlatestNews', newsPosts)
//   },
// }
