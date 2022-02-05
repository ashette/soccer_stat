import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#B39DDB',
                secondary: '#5E35B1',
                background: '#EEEEEE',
                status_finished: '#4CAF50',
                status_not_finished: '#4FC3F7'
            }
        },
        options: {
            customProperties: true
        },
    },
})