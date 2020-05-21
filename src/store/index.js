import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        programeName:'vue-study-demo'
    },
    mutations:{
        setProgrameName(state,name){
            state.programeName=name
        }
    }
})