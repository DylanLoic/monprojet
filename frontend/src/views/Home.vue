<template> 
  <RabatMap :markers="addresses"></RabatMap>
</template>

<script>
import RabatMap from "../components/RabatMap.vue";
import {mapGetters} from "vuex";
export default {

   data() {
    return {
     
    };
  },
  computed:{
    ...mapGetters(["addresses"])
  },
  components: {
    RabatMap
  }
};
</script>