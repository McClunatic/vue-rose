import { mount } from '@vue/test-utils'
import App from './App.vue'

test('App <img> contains Vue logo', () => {
  const wrapper = mount(App)

  expect(wrapper.get('img').attributes('alt')).toBe('Vue logo')
})
