import axios from 'axios';

export default {
    state: {
        userName: '',
        userId: '',
        configRoutes: []
    },
    mutations: {
        setDocRoutes (state, data) {
            state.configRoutes = data;
        }
    },
    actions: {
        // getDocRoutes ({commit}, obj) {
        //     return new Promise((resolve, reject) => {
        //         fetch(obj.url, {
        //             method: 'GET',
        //             credentials: 'include',   // cookie
        //             header: {
        //                 'Content-Type': 'application/json'
        //             },
        //             // body: JSON.stringify(obj.content)
        //         }).then(response => {
        //             if (response.ok) {
        //                 return response.json()
        //             } else {
        //                 return Promise.reject('Something wrong');
        //             }
        //         }).then(data => {
        //             if (data) {
        //                 //
        //                 commit('setDocRoutes', data);
        //                 resolve(data)
        //             }
        //         }).catch(e => {
        //             console.error(e);
        //         })
        //     })
        // },
        getDocRoutes ({commit}, obj) {
            return new Promise((resolve, reject) => {
                axios({
                    method: 'get',
                    url: obj.url,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => {
                    if( response.status !== 200 ) throw new Error("ajax error!");
                    commit('setDocRoutes', response.data.routeList);
                    resolve(response.data.routeList);
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