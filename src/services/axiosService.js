import APIRequest from '../utils/axios.config'


export async function getRandomJoke() {
    return APIRequest.get('/', {
        validateStatus: function (status) {
            return status < 500
        }
    })
}