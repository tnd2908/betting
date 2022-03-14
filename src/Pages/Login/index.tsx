import { Col, Row } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';
import CardForm from './Components/CardForm';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
const LoginPage = () => {
    const { pathname } = useLocation()
    return (
        <div className="flex-mid h-100vh w-100">
            <Row>
                <Col lg={24}>
                    <div className="d-flex form__container">
                        {pathname.startsWith('/login') && <CardForm to='/signup' />}
                        {pathname.startsWith('/signup') && <RegisterForm />}
                        {pathname.startsWith('/login') && <LoginForm />}
                        {pathname.startsWith('/signup') && <CardForm to='/login' />}
                    </div>

                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;