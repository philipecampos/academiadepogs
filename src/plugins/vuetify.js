import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import light from "./vuetify/tema";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light,
            dark: {
                primary: '#000000'
            }
        },
    },
})