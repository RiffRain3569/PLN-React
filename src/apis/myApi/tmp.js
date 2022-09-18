import myApi from ".";

export const signIn = ({userId, password}) => {
    return myApi({
        url: `/signIn`,
        method: 'POST',
        reqData: {userId, password}
    })
}


export const orderLotto = ({ lottoData }) => {
    return myApi({
        url: `/order/lotto`,
        method: 'POST',
        reqData: { lottoData }
    })
}