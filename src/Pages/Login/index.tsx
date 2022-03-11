import { Col, Row } from 'antd';
import React from 'react';
import '../../Styles/auth.scss'
import CardForm from './Components/CardForm';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
const LoginPage = () => {
    return (
        <div className="flex-mid h-100vh w-100">
            <Row>
                <Col xs={24} sm={24} style={{backgroundColor: '#fff'}} lg={12}>
                    <CardForm/>
                </Col>
                <Col xs={24} sm={24} lg={12}>
                    <LoginForm/>
                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;