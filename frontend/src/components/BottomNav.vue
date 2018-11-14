<template>
    <v-bottom-nav
        id="v-bottom"
      :active.sync="bottomNav"
      :value="true"
      color="white"
      fixed
    >
       <router-btn
        to="home"
        color="teal"
        flat
        value="recent">
    <span>Tous</span>
        <v-icon>home</v-icon>
    </router-btn>

     <router-btn
        to="about"
        color="teal"
        flat
        value="favorite">
    <span>Mes rabats points</span>
        <v-icon>favorite</v-icon>
    </router-btn>

    <router-btn
        to="home"
        color="teal"
        flat
        value="history">
    <span>History</span>
        <v-icon>history</v-icon>
    </router-btn>
    </v-bottom-nav>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: "recent"
    };
  }
};
</script>

<style>
    #v-bottom{
        z-index: 9999999;
    }
</style>