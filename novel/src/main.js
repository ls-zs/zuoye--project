import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import Vant from 'vant';
import { Swipe, SwipeItem } from "vant";
import { Lazyload } from 'vant';

Vue.use(Lazyload);
Vue.use(Swipe).use(SwipeItem);
import 'vant/lib/index.css';

Vue.use(Vant);


Vue.prototype.$http=axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
