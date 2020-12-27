import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import * as index from '@/store/index.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('storeindex', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store(index)
    const newspost = [
      {
        'created-date': '2020/10/09-08:21:43',
        'update-date': '2020/10/09-08:21:43',
        title: '①サイト開設',
        message:
          '「昆畜商」webサイトを本日公開いたしました。コンテンツはまだ少ないですがこれから更新していきたいと思っておりますので、宜しくお願いいたします。',
      },
      {
        'created-date': '2020/10/11-08:21:43',
        'update-date': '2020/10/11-08:21:43',
        title: '③LINEスタンプ販売開始',
        message:
          '「昆畜商」webサイトを本日公開いたしました。コンテンツはまだ少ないですがこれから更新していきたいと思っておりますので、宜しくお願いいたします。',
      },
      {
        'created-date': '2020/10/12-08:21:43',
        'update-date': '2020/10/12-08:21:43',
        title: '④ブログはじめました',
        message:
          '「昆畜商」webサイトを本日公開いたしました。コンテンツはまだ少ないですがこれから更新していきたいと思っておりますので、宜しくお願いいたします。',
      },
      {
        'created-date': '2020/10/10-08:21:43',
        'update-date': '2020/10/10-08:21:43',
        title: '②新アイテム追加',
        message:
          '「昆畜商」webサイトを本日公開いたしました。コンテンツはまだ少ないですがこれから更新していきたいと思っておりますので、宜しくお願いいたします。',
      },
    ]

    store.commit('setnews', newspost)
  })

  it('news記事全件取得', () => {
    expect(store.getters.allNews.length).toBe(4)
  })

  it('news記事ソート確認', () => {
    expect(store.getters.allNews).toStrictEqual([
      {
        'created-date': '2020/10/12-08:21:43',
        'update-date': '2020/10/12-08:21:43',
        title: '④ブログはじめました',
        message:
          '「昆畜商」webサイトを本日公開いたしました。コンテンツはまだ少ないですがこれから更新していきたいと思っておりますので、宜しくお願いいたします。',
      },
      {
        'created-date': '2020/10/11-08:21:43',
        'update-date': '2020/10/11-08:21:43',
        title: '③LINEスタンプ販売開始',
        message:
          '「昆畜商」webサイトを本日公開いたしました。コンテンツはまだ少ないですがこれから更新していきたいと思っておりますので、宜しくお願いいたします。',
      },
      {
        'created-date': '2020/10/10-08:21:43',
        'update-date': '2020/10/10-08:21:43',
        title: '②新アイテム追加',
        message:
          '「昆畜商」webサイトを本日公開いたしました。コンテンツはまだ少ないですがこれから更新していきたいと思っておりますので、宜しくお願いいたします。',
      },
      {
        'created-date': '2020/10/09-08:21:43',
        'update-date': '2020/10/09-08:21:43',
        title: '①サイト開設',
        message:
          '「昆畜商」webサイトを本日公開いたしました。コンテンツはまだ少ないですがこれから更新していきたいと思っておりますので、宜しくお願いいたします。',
      },
    ])
  })

  it('news最新記事3件取得', () => {
    expect(store.getters.latestNews.length).toBe(3)
  })
})
