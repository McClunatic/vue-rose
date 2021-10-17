import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: {
      template: '<div>O kaeri nasai</div>'
    }
  }]
})

test('App uses router-view', async () => {
  router.push('/')
  await router.isReady()

  const wrapper = mount(App, {
    global: { plugins: [router] }
  })
  expect(wrapper.html()).toContain('O kaeri nasai')
})
