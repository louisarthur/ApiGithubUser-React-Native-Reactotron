import Axios from 'axios';

const GitApi = Axios.create({
  baseURL: 'https://api.github.com',
});

export default GitApi;
