import axios from 'axios';

const myApi = async ({url, method, reqData}) => await axios({
    url,
    method,
    data: reqData ?? {},
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => response)
.catch(error => error)

export default myApi;