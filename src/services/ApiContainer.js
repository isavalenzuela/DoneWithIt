import axios from 'axios'

const postLoginData = async ({ email, password }) => {
  return axios
    .post('https://reqres.in/api/login', {
      email,
      password,
    })
    .then(function (response) {
      // handle success
      return response.data
    })
    .catch(function (error) {
      // handle error
      throw new Error(error)
    })
}

const getNews = () => {}

export default postLoginData
