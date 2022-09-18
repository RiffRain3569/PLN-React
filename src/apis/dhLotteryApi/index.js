
const dhLotteryApi = async ({url, method, reqData}) => await axios({
    url,
    method,
    data: reqData,
    headers: {
        'Accept': ' application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Host': 'ol.dhlottery.co.kr',
        'Origin': 'https://ol.dhlottery.co.kr',
        'Referer': 'https://ol.dhlottery.co.kr/olotto/game/game645.do',
        'X-Requested-With': 'XMLHttpRequest'
    }
})
    .then(response => {

    })
    .catch(error => {

    })

export default dhLotteryApi;