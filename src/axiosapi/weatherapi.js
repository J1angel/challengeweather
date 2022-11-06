import Api from '@/axios';
import store from "@/store";
export default {
    getweather(id){
        return Api().get(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${store.state.weather.appid}`)
    }
}
