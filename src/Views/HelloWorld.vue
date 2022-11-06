
<template>
  <div>
    <nav-bar></nav-bar>
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid style="height: 600px" class="mb-12 d-flex flex-column justify-center align-center">
        <div class="text-left">
          Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city.<br><br>
          <v-btn color="teal lighten-1" dark @click="getlogin">LOGIN</v-btn>
        </div>


      </v-container>
    </v-main>
  </div>
</template>

<script>
import { mapActions} from 'vuex'
import { get } from 'vuex-pathify'
export default {
  name: 'HelloWorld',
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
  created() {
    this.checkauth()
  },
  methods:{
    ...mapActions({
      authorize:'authuser/login',
    }),
    checkauth(){
      if (this.authenticate){
        this.authorize()
      }
    },
    getlogin(){
      this.authorize()
    }
  }
}
</script>
