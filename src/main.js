import index from "@/../router";
import {createApp} from 'vue'
import App from '../views/App.vue'
import './assets/main.css'
import naive from "naive-ui";

const app = createApp(App);
app.use(index);
app.use(naive);
app.mount('#app')
