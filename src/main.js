import { createApp } from 'vue'
import {createPinia} from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives
});
const pinia = createPinia();

const app = createApp(App);

app
    .use(vuetify)
    .use(pinia)
    .mount('#app')
