
export const weather = {
    namespaced: true,
    state: {
        citiesinfo:[],
        appid:'01727bf27c0c4f1fb689e5cbc46e386a'
    },

    // You can use it as a state getter function (probably the best solution)
    getters: {
        curr_citiesinfo(state){
            return state.citiesinfo
        }

    },

    // Mutation for when you use it as state property
    mutations: {
        citiesinfo(state,value) {
            state.citiesinfo = value
        },
    },

    actions: {
        savecityinfo({commit}, value) {
            commit('citiesinfo', value)
        }
    }
}

export default weather
