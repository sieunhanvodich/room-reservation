import axios from './Axios'

export default {
  rooms
};

function rooms() {
  return axios.get('http://localhost:3000/rooms')
    .then(response => {
      return response.data
    })
}
