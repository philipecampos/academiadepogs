import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import marked from 'marked';


Vue.config.productionTip = false

import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify, {
  theme: {
    primary: '#45858c',
    secondary: '#A0D9D9',
    accent: '#D9C589',
    info: '#BF9765',
    error: '#D92B04'
  }
});

new Vue({
  router,
  store,
  vuetify,
  marked,
  render: h => h(App)
}).$mount('#app')
