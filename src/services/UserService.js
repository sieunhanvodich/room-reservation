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
    return axios.post('http://localhost:3000/login', {username: username,password: password})
        .then(response => {
            localStorage.setItem('token', response.data.token);
            return response.data.user;
        })
}

function logout() {
    localStorage.removeItem('token');
}

