import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import ContactUs from './components/ContactUs.vue'

import router from './router'

const app = createApp(App)

app.component('contact-us', ContactUs)

app.use(createPinia())
app.use(router)

app.mount('#app')
