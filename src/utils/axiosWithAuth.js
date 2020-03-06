import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://heat-unit.herokuapp.com/adventure',
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth