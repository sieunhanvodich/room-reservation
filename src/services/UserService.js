import axios from './Axios'

// function getUsersInfo () {
//   return axios.get('/users')
//     .then(response => {
//       return response.data
//     })
// }

// export default {
//   getUsersInfo
// }

export default {
    login,
    logout
};

function login(username, password) {
    return axios.post('/login', {username,password})
        // .then(handleResponse)
        .then(response => {
            localStorage.setItem('token', response.token);
            return response.user;
        })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
}

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
//                 logout();
//                 location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }

