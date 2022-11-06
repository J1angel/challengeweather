<template>
  <div>
    <nav-bar></nav-bar>
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid style="height: 600px" class="mb-12 d-flex flex-column justify-center align-center">
        <div>
          {{username}}<br> {{userurl}}
        </div><br><br>
        <div class="text-center">
          <v-select
              v-model="citychoice"
              :items="city1"
              label="City"
              dense
              outlined
              full-width
              prepend-inner-icon="mdi-magnify"
              item-text="name"
              item-value="id"
          ></v-select><br><v-btn  color="teal lighten-1" @click="displayweather" >Display Weather</v-btn>
        </div>
      </v-container>
    </v-main>
  </div>

</template>
<script>
import {get} from "vuex-pathify";
import {mapActions} from "vuex";
import WeatherApi from "@/axiosapi/weatherapi"
import router from '@/routes';

export default {
  name:'HomeScreen',
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    citychoice:null,
    city1:[{'id':833, name: 'Ḩeşār-e Sefīd, IR'}]
  }),
  computed:{
    authenticate:get('authuser/user'),
    username:get('user/name'),
    userurl:get('user/url'),
  /*  cities:get('cities/cities')*/
  },
 /* created() {
    this.initialize()
  },*/
  methods:{
    ...mapActions({
      getcities:'cities/getcities',
      savecity:'weather/savecityinfo'
    }),
    displayweather(){
      WeatherApi.getweather(this.citychoice).then(response => {
        this.savecity(response.data)
        router.push({name:'w'})
      }).catch(error => {
        console.log(error)
      })
    }
    /*initialize(){
      if (this.cities.length === 0){
        this.getcities()
      }
    }*/
  }
}
</script>
