import { createApp } from 'vue'
import { createPinia } from 'pinia'

import tr from 'element-plus/es/locale/lang/tr'
import 'dayjs/locale/tr'
import './index.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router/router'

const app = createApp(App)

app.use(ElementPlus, {
  locale: tr,
})
app.use(createPinia())
app.use(router)

app.mount('#app')
