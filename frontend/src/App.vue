<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Salut</span>
        <span class="font-weight-light">CRABAT</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    
        <router-btn to="newrabatpoint" color="white">Add Rabatpoint</router-btn>
     
    </v-toolbar>
   
    <v-content>
      <router-view></router-view>
    </v-content>
    <BottomNav></BottomNav>
  </v-app>
</template>

<script>
import BottomNav from "./components/BottomNav.vue";
import RouterBoutton from "./components/RouterButton"
export default {
  name: "App",
  components: {
    BottomNav,
    RouterBoutton
  },
  data() {
    return {
      //
    };
  }
};
</script>
