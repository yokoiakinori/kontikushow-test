import { shallowMount, createLocalVue } from '@vue/test-utils'
import Index from '@/pages/index.vue'
const localVue = createLocalVue()

describe('ItemList', () => {
  it('コンポーネントが存在する', () => {
    const wrapper = shallowMount(Index, { localVue })
    expect(wrapper.exists()).toBeTruthy()
  })
})
