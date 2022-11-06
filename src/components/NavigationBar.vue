<template>
  <div>
    <v-app-bar
        app
        absolute
        color="white"
        elevation="1"
        height="100"
    >

      <v-icon size="100px" color="teal lighten-1">mdi-clouds</v-icon>

      <v-toolbar-title style="font-size: x-large">Weather Forecast</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn color="teal lighten-1" v-if="authenticate" dark>LOG OUT</v-btn>
    </v-app-bar>
  </div>

</template>
<script>
import {get} from "vuex-pathify";

export default {
  computed:{
    authenticate:get('authuser/isAuthenticated')
  },
  watch:{
    'authenticate':{
      handler(newVal) {
        console.log(newVal)
      },
      deep: true
    },
  },
}

</script>
