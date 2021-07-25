import { createApp } from 'vue'
import App from './App.vue'
import './assets/less/style.css';
import { createI18n } from 'vue-i18n'
// import {i18n} from '../plugins/i18n'
// import FlagIcon from 'vue-flag-icon'

// Vue.use(FlagIcon)
const i18n = createI18n({
    // ...
  })

const app = createApp({
   
    data() {
      return { 
       
        product: 'product'
      }
     
    }
});

app.mount('#app');
app.use(i18n);

export default app;