import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import News from '@/pages/news/index.vue'
const localVue = createLocalVue()
localVue.use(Vuex)

describe('News', () => {
  let store
  let demoNews
  let wrapper
  beforeEach(() => {
    demoNews = [
      {
        'created-date': '2020/10/10-08:21:43',
        title: 'サイトを公開しました！',
        message:
          '「昆畜商」webサイトを本日公開いたしました。コンテンツはまだ少ないですがこれから更新していきたいと思っておりますので、宜しくお願いいたします。',
      },
    ]
    store = new Vuex.Store({
      getters: {
        allNews() {
          return demoNews
        },
      },
    })

    wrapper = shallowMount(News, { store, localVue })
  })

  it('コンポーネントが存在する', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('vuexから投稿をうまく取得できている', () => {
    expect(wrapper.vm.allNews.length).toBe(1)
  })
})
