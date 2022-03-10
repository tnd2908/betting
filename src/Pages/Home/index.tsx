import { Col, Row } from 'antd';
import React from 'react';
import bg from '../../Assets/Images/background.png'
const Home = () => {
    return (
        <div className="main">
            <Row>
                <Col md={12}>
                
                </Col>
                <Col md={12}>
                <img src={bg} alt="" />

                </Col>
            </Row>
        </div>
    );
};

export default Home;