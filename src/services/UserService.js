import axios from './Axios'

function getUsersInfo () {
  return axios.get('/users')
    .then(response => {
      return response.data
    })
}
function getDataDate(date) {
  let params = {
    date: date
  }
  return axios.get('/roomlist', params)
    .then(response => {
      return response.data.bookInfosFinded
      
      //  console.log("duy",response.data.bookInfosFinded)
    })
}

export default {
  getUsersInfo,
  getDataDate
}
