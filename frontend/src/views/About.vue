<template>
  <div class="about">  
    <div v-for="rabatpoint in addresses" :key="rabatpoint.id">
      <RabatPoint :myRabatpoint="rabatpoint"></RabatPoint>
    </div>  
    
  </div>
</template>
<script>
import RabatPoint from "../components/RabatPoint.vue";
import {mapGetters} from "vuex";
export default {
  components: {
    RabatPoint
  },
    computed:{
    ...mapGetters(["addresses"])
  },
 
};
</script>