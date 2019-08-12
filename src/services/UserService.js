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

export const userService = {
    login,
    logout
};

function login(username, password) {
    const request = JSON.stringify({ username, password })
    return axios(`/login`, request)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('token', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
