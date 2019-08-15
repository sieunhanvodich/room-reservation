import axios from './Axios'
// const URL_API_GETDATAHOME = 'http://localhost:3000/api/getDataHome';


function getUsersInfo() {
  return axios.get('/users')
    .then(response => {
      return response.data
    })
}
function getDataHome(date) {
  let params = {
    date: date
  }
  return axios.get('/get-data-bookinfros', params)
    .then(reponse =>{
      console.log(reponse.data)
    })
}

export default {
  getUsersInfo,
  getDataHome
}
