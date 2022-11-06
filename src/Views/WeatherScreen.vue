<template>
  <div>
    <nav-bar></nav-bar>
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid style="height: 600px" class="mb-12 d-flex flex-column justify-center align-center">
        <div class="text-center" v-if="$vuetify.breakpoint.mobile">
          <table>
            <thead>
            <tr>
              <th class="text-left">
                Date (mm/dd/yyyy)
              </th>
              <th class="text-left">
                Temp(F)
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
            >
              <td>{{ cityinfo.dt | moment('MM-DD-YYYY') }}</td>
              <td>{{ cityinfo.main.temp }}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="text-center" v-else>
          <table>
            <thead>
            <tr>
              <th class="text-left">
                Date (mm/dd/yyyy)
              </th>
              <th class="text-left">
                Temp(F)
              </th>
              <th class="text-left">
                Description
              </th>
              <th class="text-left">
                Main
              </th>
              <th class="text-left">
                Pressure
              </th>
              <th class="text-left">
                Humidity
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
            >
              <td>{{ cityinfo.dt | moment('MM-DD-YYYY') }}</td>
              <td>{{ cityinfo.main.temp }}</td>
              <td>{{ cityinfo.weather[0].description }}</td>
              <td>{{ cityinfo.weather[0].main }}</td>
              <td>{{ cityinfo.main.pressure }}</td>
              <td>{{ cityinfo.main.humidity }}</td>


            </tr>
            </tbody>
          </table>
        </div>

        <br><br>
        <v-container>
          <v-btn color="teal lighten-1" dark class="float-right" @click="backpage">Back</v-btn>
        </v-container>

      </v-container>
    </v-main>
  </div>
</template>
<script>
import {get} from "vuex-pathify";
import router from '@/routes';
export default {
  name:'WeatherScreen',
  computed:{
    cityinfo:get('weather/citiesinfo'),
  },
  methods:{
    backpage(){
      router.push({name:'homescreen'})
    }
  }
}
</script>
<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 15px;
}
</style>
