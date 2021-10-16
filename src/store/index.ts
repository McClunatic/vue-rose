import { createStore, createLogger } from 'vuex'


export default createStore({
  modules: {},
  strict: import.meta.env.DEV,
  plugins: import.meta.env.DEV ? [createLogger()] : []
})
