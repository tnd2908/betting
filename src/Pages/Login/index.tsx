import { Col, Row } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../Styles/auth.scss'
import CardForm from './Components/CardForm';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
const LoginPage = () => {
    const { pathname } = useLocation()
    return (
        <div className="flex-mid h-100vh w-100">
            <Row>
                <Col xs={24} sm={24} lg={12}>
                    {pathname.startsWith('/login') && <CardForm to='/signup' />}
                    {pathname.startsWith('/signup') && <RegisterForm />}
                </Col>
                <Col xs={24} sm={24} lg={12}>
                    {pathname.startsWith('/login') && <LoginForm />}
                    {pathname.startsWith('/signup') && <CardForm to='/login' />}
                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;