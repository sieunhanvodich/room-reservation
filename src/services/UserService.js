import axios from './Axios'

export default {
  login,
  logout
};

function login(username, password) {
  return axios.post('http://localhost:3000/login', { username: username, password: password })
    .then(response => {
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
      }
      return response.data;
    })
}

function logout() {
  localStorage.removeItem('token');
}

