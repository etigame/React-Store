import axios from 'axios'

export default async function requestData(innerUrl, method = 'GET', data) {
  const res = await axios({
    // the innerUrl will contain also params and queryParams if needed
    url: `http://localhost:3000/${innerUrl}`, 
    method,
    data,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  
  return res.data
}