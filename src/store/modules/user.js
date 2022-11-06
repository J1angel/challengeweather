export const user = {
    namespaced: true,
    state: {
        name:null,
        url:null
    },

    // You can use it as a state getter function (probably the best solution)
    getters: {
        name(state) {
            return state.name
        },
        url(state){
            return state.url
        },
    },

    // Mutation for when you use it as state property
    mutations: {
        name(state,value) {
            state.name = value
        },
        url(state,value){
            state.url = value
        },
    },

    actions: {
       saveuser({commit},value){
           commit('name', value.name)
           commit('url', value.html_url)
       }
    }
}

export default user
