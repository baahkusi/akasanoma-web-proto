const storeX = {
    state: {
        isCollapse: false
    },
    mutations: {
        collapse(state) {
            state.isCollapse = !state.isCollapse;
        }
    }
};

export default storeX ;