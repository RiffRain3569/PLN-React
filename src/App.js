import logo from './logo.svg';
import { Button, Form, Row } from 'react-bootstrap';
import { signIn } from './apis/dhLottery/tmp';
import { useState } from 'react';

function App() {

  const [curUserId, setUserId] = useState('');
  const [curPassword, setPassword] = useState('');

  const handleLogin = async() => {
    let response = await signIn({userId: curUserId, password: curPassword});
    console.log(response)
  }
  return (
    <div>
      <Row>
        <Form.Control type='text' onKeyUp={(e) => setUserId(e.target.value)}/>
      </Row>
      <Row>
        <Form.Control type='password' onKeyUp={(e) => setPassword(e.target.value)}/>
      </Row>
      <Row>
        <Button variant="primary" onClick={handleLogin}>로그인</Button>
      </Row>

    </div>
  );
}

export default App;
