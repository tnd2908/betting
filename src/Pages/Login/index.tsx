import { Col, Row } from 'antd';
import React from 'react';
import '../../Styles/auth.scss'
import LoginForm from './Components/LoginForm';
const LoginPage = () => {
    return (
        <div className="flex-mid h-100vh">
            <Row>
                <Col md={12} style={{backgroundColor: '#434343'}}>
                
                </Col>
                <Col md={12} style={{backgroundColor: 'white'}}>
                    <LoginForm/>
                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;