const getDefaultState = () => {
    return {
        citiesinfo:[],
        appid:'01727bf27c0c4f1fb689e5cbc46e386a'
    }
}
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
        resetState(state) {
            Object.assign(state, getDefaultState())
        }
    },

    actions: {
        savecityinfo({commit}, value) {
            commit('citiesinfo', value)
        },
        resetState1({commit}){
            commit('resetState')
        }
    }
}

export default weather
