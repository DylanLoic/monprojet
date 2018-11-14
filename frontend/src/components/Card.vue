<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img max-height="300px"
             min-height="200px" 
            contain
            :src="poster"
          aspect-ratio="1"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{title}}</h3>
            <div>{{brief_synopsis}}</div>
          </div>       
        </v-card-title>

        <v-card-actions >
          <router-btn color="white" to="detailmovie">More ...</router-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
   props:{
        id: Number,
        title : String,
        brief_synopsis: String,
        poster : String
    }
  }
</script>