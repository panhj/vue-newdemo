import axios from 'axios';

export default {
    state: {
        nId: ''
    },
    mutations: {
        setId (state, data) {
            state.nId = data;
        }
    },
    actions: {

    }
}