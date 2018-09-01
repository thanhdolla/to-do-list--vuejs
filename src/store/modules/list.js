export default{
    state: {
        listToDo: [],
    },

    getters: {
        listToDo: state => state.listToDo
    },

    mutations: {
        addList(state, value){
            state.listToDo.push(value);
        }
    },

    actions: {
        addListToDo({commit, state}, listToDo) {
            commit('addList', listToDo);
        }
    }
}
