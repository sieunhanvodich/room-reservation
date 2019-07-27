import axios from './Axios'

function getUsersInfo () {
  return axios.get('/users')
    .then(response => {
      return response.data
    })
}

export default {
  getUsersInfo
}
