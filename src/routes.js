import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeScreen from "@/Views/HomeScreen.vue";
import WeatherScreen from "@/Views/WeatherScreen";
import LandingScreen from "@/Views/HelloWorld";
import store from "@/store";

Vue.use(VueRouter)

const routes = [
    {
    path: '/homescreen',
    component: HomeScreen,
    name: 'homescreen',
    beforeEnter: (to, from, next) => {
           if (store.state.authuser.isAuthenticated && store.state.authuser.accessToken){
               next()
           }else{
               router.push('/')
           }
        }
    },
    {
        path: '/auth/callback',
        beforeEnter: async (to) => {
           store.dispatch('authuser/codesave',to.query.code)
            store.dispatch('authuser/getaccesstoken')

        }
    },
    {
        path: '/weatherscreen',
        component: WeatherScreen,
        name: 'weatherscreen',
        beforeEnter: (to, from, next) => {
            if (store.state.authuser.isAuthenticated && store.state.authuser.accessToken){
                next()
            }else{
                router.push('/')
            }
        }
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
