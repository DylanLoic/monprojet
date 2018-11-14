<template>
    <v-card column>
        <v-layout>
            <img :src="'..\\assets\\' + myRabatpoint.icon" id="item"/>
            <v-rating  readonly v-model="myRabatpoint.rate"></v-rating>
            <p >      
                <v-divider vertical></v-divider>
                    {{myRabatpoint.address}}  
                <v-divider vertical></v-divider>
                    {{myRabatpoint.note}}                    
                <v-divider vertical></v-divider>
                    {{myRabatpoint.date | moment("dddd, MMMM Do YYYY")}} 
            </p>
        </v-layout>     
    </v-card>
</template>

<script>
export default {
  name: "Rabatpoint",
  props: {
    myRabatpoint:{   
    id: Number,
    address: String,
    icon: String,
    note: String,
    date: Date,
    rate: Number,
    lat: String,
    long: String
    }
  }
};
</script>
<style>
#item {
  height: 60px;
}
</style>
