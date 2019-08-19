import axios from './Axios'

async function users () {
  return await axios.get('/users')
    .then(response => {
      return response.data
    })
}

export default {
  users
}
