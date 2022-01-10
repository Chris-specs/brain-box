import axios from 'axios';

const apiIntance = axios.create({
    baseURL: '',
});

apiIntance.interceptors.request.use(req => {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    return req
})

export default apiIntance;
