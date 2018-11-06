import { resolve } from "url";

export default {
    state: {
        userName: '',
        userId: '',
        docRoutes: []
    },
    mutations: {
        setDocRoutes (state, data) {
            state.routeList = data;
        }
    },
    actions: {
        getDocRoutes ({commit}, obj) {
            return new Promise((resolve, reject) => {
                fetch(obj.url, {
                    method: 'GET',
                    credentials: 'include',   // cookie
                    header: {
                        'Content-Type': 'application/json'
                    },
                    // body: JSON.stringify(obj.content)
                }).then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        return Promise.reject('Something wrong');
                    }
                }).then(data => {
                    if (data) {
                        //
                        commit('setDocRoutes', data);
                        resolve(data)
                    }
                }).catch(e => {
                    console.error(e);
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