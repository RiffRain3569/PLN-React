import dhLottery from ".";

export const signIn = ({userId, password}) => {
    return dhLottery({
        url: `https://www.dhlottery.co.kr/userSsl.do?method=login`,
        method: 'POST',
        reqData: {userId, password}
    })
}