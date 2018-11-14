<template>
  <v-container fluid>
    <v-layout justify-space-around>
      <v-flex xs5>
        <h1 class="display-2">Titre de film</h1>      
          <div class="subheading">
                    <v-rating
                    v-model="rating"
                    medium
                    color="orange darken-3"
                    background-color="grey darken-3"
                    empty-icon="$vuetify.icons.ratingFull"
                    half-increments
                    ></v-rating>
          </div>
          <v-img max-height="500px" min-height="300px" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxNDc1NTE2OF5BMl5BanBnXkFtZTcwMjczNzA2NA@@._V1_SX300.jpg" contain></v-img>        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data: () => ({
      rating: 4.5
    })
  }
</script>

