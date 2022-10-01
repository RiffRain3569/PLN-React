import React, { useState } from 'react';
import { Button, Row, Form } from 'react-bootstrap';
import { orderLotto, signIn } from '../../apis/myApi/tmp';

const Test = () => {
    const [curUserId, setUserId] = useState('');
    const [curPassword, setPassword] = useState('');
    const [curLoginMsg, setLoginMsg] = useState('');
    const [curBuyMsg, setBuyMsg] = useState('');

    const handleLogin = async () => {
        let response = await signIn({ userId: curUserId, password: curPassword });
        setLoginMsg(response.data ? '로그인이 성공하였습니다.' : '로그인이 실패하였습니다.');
    };

    const handleBuy = async () => {
        let response = await orderLotto({
            lottoData: [
                { genType: '0', arrGameChoiceNum: null, alpabet: 'A' },
                { genType: '0', arrGameChoiceNum: null, alpabet: 'B' },
                { genType: '0', arrGameChoiceNum: null, alpabet: 'C' },
                { genType: '0', arrGameChoiceNum: null, alpabet: 'D' },
                { genType: '0', arrGameChoiceNum: null, alpabet: 'E' },
            ],
        });
        console.log(response?.data);
        setBuyMsg(response?.data.result.resultMsg ?? 'api 기능이 정상적으로 동작하지 않았습니다.');
    };

    return (
        <>
            <Row>
                <Form.Control type='text' onKeyUp={(e) => setUserId(e.target.value)} />
            </Row>
            <Row>
                <Form.Control type='password' onKeyUp={(e) => setPassword(e.target.value)} />
            </Row>
            <Row>
                <Button variant='primary' onClick={handleLogin}>
                    로그인
                </Button>
                <span>{curLoginMsg}</span>
            </Row>
            <Row>
                <Button variant='primary' onClick={handleBuy}>
                    구매하기
                </Button>
                <span>{curBuyMsg}</span>
            </Row>
        </>
    );
};

export default Test;
