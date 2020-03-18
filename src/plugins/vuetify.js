import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify)


export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FF6450',
        secondary: '#FFDAD7',
        accent: '#280D96',
        background: '#FFFFFF',
        formBackground: '#989898',
        disabled: '#FAF9FF',
        error: '#6288d0',
        info: '#6288d0',      //azul
        success: '#dee3ea',
        warning: '#a2c037',
        highlight: '#ffdad7'
      },
    },
  },
  iconfont: 'mdi'
});
