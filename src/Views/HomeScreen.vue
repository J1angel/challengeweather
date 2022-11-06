<template>
  <div>
    <nav-bar></nav-bar>
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid style="height: 600px" class="mb-12 d-flex flex-column justify-center align-center">
        <div v-if="!$vuetify.breakpoint.mobile" class="text-center">
          {{username}}<br><br> {{userurl}}
        </div><br><br>
        <div class="text-center">
          <v-combobox
              v-model="citychoice"
              :items="cities"
              label="City"
              outlined
              dense
              :item-text="item=> item.name+', '+item.country "
              :item-value="item => item.id"
              :rules="rules"
              prepend-inner-icon="mdi-magnify"
          >
          </v-combobox>
        <br><v-btn  color="teal lighten-1" @click="displayweather" :disabled="allowed">Display Weather</v-btn>
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
import cities1 from '@/store/city.list.json'


export default {
  name:'HomeScreen',
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    citychoice:null,
    rules:[v => !!v || 'Must select an item'],
    allowed:true,
  }),
  computed:{
    username:get('user/name'),
    userurl:get('user/url'),
    cities() {
      return cities1
    }
  },
  watch:{
    'citychoice':{
      handler(newVal) {
        if (newVal !== null || newVal !== ''){
          this.allowed = false
        }else{
          this.allowed = true
        }
      },
      deep: true
    },
  },
  methods:{
    ...mapActions({
      savecity:'weather/savecityinfo'
    }),
    displayweather(){
      console.log(this.citychoice)
      WeatherApi.getweather(this.citychoice.id).then(response => {
        this.savecity(response.data)
        router.push({name:'weatherscreen'})
      }).catch(error => {
        this.citychoice = null
        alert(error.response.data.message)
      })
    }
  }
}
</script>
