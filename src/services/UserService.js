import axios from './Axios'

async function users() {
  return await axios.get('/users')
    .then(response => {
      return response.data
    })
}

function login(username, password) {
  return axios.post('/login', { username: username, password: password })
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

export default {
  login,
  logout,
  users
}


