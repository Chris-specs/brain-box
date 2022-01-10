import axios from 'axios';

const auth = (data) => axios.post('/api/auth', data);

export default auth;
