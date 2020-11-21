import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FrequentlyQA from '@/pages/frequently-qa.vue'
const localVue = createLocalVue()
localVue.use(Vuex)

describe('FrequentlyQA', () => {
  let store
  let questionAnswer
  let wrapper
  beforeEach(() => {
    questionAnswer = [
      {
        question: 'リクエストは受け付けておりますか？',
        answer:
          '当ウェブサイトは現時点ではリクエスト等は受け付けておりません。 お問い合わせフォーム・SNS等各種媒体を用いてそのようなメッセージが届いても返信することはございません。あらかじめご了承ください。',
      },
    ]
    store = new Vuex.Store({
      state: {
        questionAnswers: questionAnswer,
      },
    })

    wrapper = shallowMount(FrequentlyQA, { store, localVue })
  })

  it('コンポーネントが存在する', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('vuexから投稿をうまく取得できている', () => {
    expect(wrapper.vm.questionAnswers.length).toBe(1)
  })
})
