import GithubApi from '@/axiosapi/githubapi'
import router from '@/routes';
import store from "@/store";

const getDefaultState = () => {
    return {
        isAuthenticated: false,
        userinfo:{},
        code:null,
        accessToken:null
    }
}
export const authuser = {

    namespaced: true,
    state: {
        isAuthenticated: false,
        userinfo:{},
        code:null,
        accessToken:null
    },

    // You can use it as a state getter function (probably the best solution)
    getters: {
        isAuthenticated(state) {
            return state.isAuthenticated
        },
        curr_code(state){
            return state.code
        },
        curr_accessToken(state){
            return state.accessToken
        },
        curr_user(state){
            return state.userinfo
        }
    },

    // Mutation for when you use it as state property
    mutations: {
        isAuthenticated(state,value) {
            state.isAuthenticated = value
        },
        code(state,value){
            state.code = value
        },
        accessToken(state, value){
            state.accessToken = value
        },
        user(state, value){
            state.userinfo = value
        },
        resetState(state) {
            Object.assign(state, getDefaultState())
        }
    },

    actions: {
        login({getters}){
            if (getters.isAuthenticated){
                router.push({name:'homescreen'})
            }else{
                window.location.href = 'https://github.com/login/oauth/authorize?client_id=8d49b4b51e3a3cd19410';
            }

        },
        codesave({commit},value){
            commit('code', value)
        },
        getaccesstoken({commit}){
            GithubApi.githubauthorize().then(response => {
                commit('accessToken', response.data)
                GithubApi.getgithubuser().then(response => {
                    commit('user',response.data)
                    commit('isAuthenticated', true)
                    store.dispatch('user/saveuser', response.data)
                    router.push({name:'homescreen'})
                }).catch(error => {
                    console.log(error)
                })
            }).catch(error => {
                console.log(error)
            })
        },
        logoutuser({commit}){
            commit('resetState')
            store.dispatch('user/resetState2')
            store.dispatch('weather/resetState1')
            store.dispatch('cities/resetState3')
            router.push({name:'landingscreen'})
        }
    }
}

export default authuser
