import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state={
    count:0
}

const mutations={
    INCREMENT(state,amount){
        state.count=state.count+amount
    },
    REDUCE(state,amount){
        if(state.count<=0) return;
        state.count=state.count-amount
    }
}

export default new Vuex.Store({
    state,
    mutations
})