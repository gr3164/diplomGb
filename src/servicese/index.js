import axios from 'axios';

const arrData = await axios.get(`https://65c9d9ff3b05d29307df1b9e.mockapi.io/catalog`);

export default arrData;
