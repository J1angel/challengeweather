

export const cities = {
    namespaced: true,
    state: {
       cities:[]
    },

    // You can use it as a state getter function (probably the best solution)
    getters: {
        curr_cities(state){
            return state.cities
        }

    },

    // Mutation for when you use it as state property
    mutations: {
        cities(state,value) {
            state.cities = value
        },
    },

    actions: {
     /*   getcities({commit}) {

                const arrays = Object.values(city).map(arr => ({
                    id: arr.id,
                    city: arr.name+', '+arr.country
                }));

                commit('cities',arrays)

        }*/
    }
}

export default cities
