import axios from 'axios'

export default {
  async ajax (url, method, data) {
    const token = document.head.querySelector('meta[name="csrf-token"]')
    return axios({
      method: method,
      url: url,
      data: data,
      headers: { 'X-CSRF-TOKEN': token.content }
    })
  }
}
