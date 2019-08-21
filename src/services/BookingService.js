import axios from './Axios'

export default {
  booking
};

function booking(bookInfo) {
  console.log(bookInfo)
  // bookInfo=JSON.stringify(bookInfo);
  return axios.post('/booking', bookInfo)
    .then(response => {
      console.log(response)
      return response.data
    })
}
