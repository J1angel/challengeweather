import Api from '@/axios';
import store from "@/store";

export default {
    githubauthorize(){
       return Api().post('https://msuiit-asp.com/api/githubaccess', {code:store.state.authuser.code})
    },
    getgithubuser(){
        Api().defaults.headers.common["Authorization"] = `Bearer ${store.state.authuser.accessToken}`;
        return Api().get('https://api.github.com/user')
    }
}
