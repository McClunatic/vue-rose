import { mount } from '@vue/test-utils'
import App from './App.vue'

test('App uses router-view', async () => {
  const wrapper = mount(App, {
    global: {
      stubs: {
        'router-view': { template: 'O kaeri nasai'}
      }
    }
  })
  expect(wrapper.html()).toBe('O kaeri nasai')
})
