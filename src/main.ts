import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

if (import.meta.env.DEV) {
  ;(app.config as any).devtools = true
  app.config.performance = true // 可选：开启性能分析（调试更全面）
}

app.mount('#app')
