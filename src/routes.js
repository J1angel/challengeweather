import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeScreen from "@/components/HomeScreen.vue";
import WeatherScreen from "@/components/WeatherScreen";
import LandingScreen from "@/components/HelloWorld";

Vue.use(VueRouter)

const routes = [
    {
    path: '/homescreen',
    component: HomeScreen,
    name: 'homescreen',
    },
    {
        path: '/weatherscreen',
        component: WeatherScreen,
        name: 'weatherscreen',
    },
    {
        path: '/',
        component: LandingScreen,
        name: 'landingscreen',
    },
]
const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router
