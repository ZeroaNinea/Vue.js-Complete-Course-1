import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import ContactUs from './components/ContactUs.vue'
import ButtonCounter from './components/ButtonCounter.vue'

import router from './router'

const app = createApp(App)

// app.component('contact-us', ContactUs)
app.component('button-counter', ButtonCounter)

app.use(createPinia())
app.use(router)

app.mount('#app')
