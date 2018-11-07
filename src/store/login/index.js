import axios from 'axios';

export default {
    state: {
        username: ''
    },
    mutations: {
        setUsername (state, data) {
            state.username = data;
        }
    },
    actions: {
        login ({commit}, obj) {
            return new Promise((resolve, reject) => {
                axios({
                    method: 'post',
                    url: obj.url,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: obj.data
                }).then(response => {
                    if( response.status !== 200 ) throw new Error("ajax error!");
                    commit('setUsername', response.data.username);
                    resolve();
                }).catch(error => {
                    reject(error);
                })
            })
        },
        printfm ({commit}) {
            return new Promise((resolve, reject) => {
                console.log('this is printfm function')
                resolve();
            })
        }
    }
}