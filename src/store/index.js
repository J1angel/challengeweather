import Vue from 'vue';
import Vuex from 'vuex';
import pathify from '@/plugin/vuetify-pathify'
import VuexPersistence from 'vuex-persist'

import * as modules from './modules'



Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
const store = new Vuex.Store({
    modules,
    plugins:[
        vuexLocal.plugin,
        pathify.plugin,

    ]
})


export default store
export const ROOT_DISPATCH = Object.freeze({ root: true })
