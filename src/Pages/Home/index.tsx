import { Col, Row } from 'antd';
import React from 'react';
import bg from '../../Assets/Images/background.png'
import '../../Styles/home.scss'
const Home = () => {
    return (
        <div className="main">
            <Row>
                <Col md={12} style={{ backgroundColor: '#222020' }}>
                    <div className="banner h-100">
                        <h1 className='banner__title'>Orient Betting </h1>
                        <h2 className="banner__sub-title">
                            Kênh nhà cái uy tín hàng đầu Orient
                        </h2>
                        <p className="banner__description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, quisquam laboriosam in, repellat magni nemo, fuga assumenda excepturi beatae earum quia. Inventore laboriosam enim totam voluptatem aperiam culpa nemo laudantium.
                        </p>
                    </div>
                </Col>
                <Col md={12} style={{ backgroundColor: '#222020' }}>
                    <img src={bg} alt="" />
                </Col>

            </Row>
        </div>
    );
};

export default Home;