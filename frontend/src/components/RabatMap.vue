<template>
  <l-map id="app" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <li v-for="(item, index) in markers" :key="index">
      <l-marker :lat-lng="[item.lat, item.long]">
      <l-popup :content="item.title"></l-popup>
    </l-marker>
    </li>
  </l-map>
</template>

<script>
import Vue2Leaflet from 'vue2-leaflet';

export default {
  props: {
    markers: {
      type: Array,
      default: [],
      marker: [],
    }
  },
  components: {
    'l-map': Vue2Leaflet.LMap,
    'l-tile-layer': Vue2Leaflet.LTileLayer,
    'l-marker': Vue2Leaflet.LMarker,
    'l-popup': Vue2Leaflet.LPopup,
  },
  data() {
    return {
      zoom: 10,
      center: L.latLng(46.195774, 6.1102338),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }
  },
  created() {

  },
  beforeMount() {
    console.log(this.markers)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  },
  methods: {
    showPosition(position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      this.center = L.latLng(position.coords.latitude, position.coords.longitude);
    }
  }
}
</script>

<style>

.leaflet-marker-icon{
  background-image: url("../assets/vomito.png");
  background-size: 100% 100%;
}
</style>
