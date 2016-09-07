import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state={
    list:[]
}

const mutations={
    ADDITEM(state,item){
        state.list.push(item);
    },
    DELETEITEM(state,index){
        state.list.splice(index,1);
    }
}

export default new Vuex.Store({
    state,
    mutations
})