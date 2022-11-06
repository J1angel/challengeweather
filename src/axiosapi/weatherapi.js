import Api from '@/axios';
import store from "@/store";
export default {
    getweather(id){
        return Api().get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${store.state.weather.appid}`)
    }
}
