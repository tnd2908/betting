import { Col, Row } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';
import CardFormLeft from './Components/CardFormLeft';
import CardFormRight from './Components/CardFormRight';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
const LoginPage = () => {
    const { pathname } = useLocation()
    return (
        <div className="flex-mid h-100vh w-100">
            <Row>
                <Col lg={24}>
                    <div className="d-flex form__container">
                        {pathname.startsWith('/login') && <CardFormLeft />}
                        {pathname.startsWith('/signup') && <RegisterForm />}
                        {pathname.startsWith('/login') && <LoginForm />}
                        {pathname.startsWith('/signup') && <CardFormRight />}
                    </div>

                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;