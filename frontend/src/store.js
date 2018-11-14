import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    addresses: [
      {
        id: 1,
        address: "7 Chemin du curé-desclouds",
        icon: "vomito.png",
        note: "C'était vraiment très marrant. Ahahah",
        date: Date.now(),
        rate: 4,
        lat: "46",
        long: "6"
      },
      {
        id: 2,
        address: "7 Chemin du curé-desclouds",
        icon: String,
        note: "C'était vraiment très marrant. Ahahah",
        date: Date.now(),
        rate: 4,
        lat: "44",
        long: "1"
      }
    ]
  },
  mutations: {
    setAddresses(state, addresses){
      state.addresses = addresses;
    }
  },  
  actions: {
    setAddresses({commit, state}, addresses)
    {
      commit("setAddresses", addresses);
    }
  },
  getters:{
    addresses :state=>state.addresses,
  },
});
