import { createApp } from 'vue'
import App from './App.vue'
import { createVuePlugin } from "./index";

createApp(App)
  .use(createVuePlugin())
  .mount('#app')
