import axios from 'axios';

const dhLottery = async ({url, method, reqData}) => await axios({
    url,
    method,
    data: reqData,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Host': 'www.dhlottery.co.kr',
        'Origin': 'https://www.dhlottery.co.kr',
        'Referer': 'https://www.dhlottery.co.kr/user.do?method=login&returnUrl=%2F'
    }
})
.then(response => response)
.catch(error => error)

export default dhLottery;