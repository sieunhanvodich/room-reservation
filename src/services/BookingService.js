import axios from './Axios'

export default {
  booking
};

function booking(bookInfo) {
  // bookInfo=JSON.stringify(bookInfo);
  return axios.post('/booking', bookInfo)
    .then(response => {
      return response.data
    })
}
