import { createApp } from 'vue'
import App from './App.vue'
import MyComponents from "./components/ui-component"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


const app = createApp(App)
MyComponents.map(el => {
    app.component(el.name, el)
})
app.mount('#app')
