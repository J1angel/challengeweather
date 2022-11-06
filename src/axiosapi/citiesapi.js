import Api from '@/axios';

export default {
    getcities(){
        return Api().get('https://countriesnow.space/api/v0.1/countries/population/cities')
    }
}
