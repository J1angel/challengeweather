<template>
  <div>
    <nav-bar></nav-bar>
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid style="height: 600px" class="mb-12 d-flex flex-column justify-center align-center">
        <div>
          {{username}}<br> {{userurl}}
        </div>
        <div>

        </div>
      </v-container>
    </v-main>
  </div>

</template>
<script>
import {get} from "vuex-pathify";

export default {
  name:'HomeScreen',
  computed:{
    authenticate:get('authuser/user'),
    username:get('user/name'),
    userurl:get('user/url'),
    cities:get('cities/cities')
  },
  created() {
    this.initialize()
  },
  methods:{
    initialize(){

    }
  }
}
</script>
