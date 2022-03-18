import { Avatar, Col, Drawer, Dropdown, Row } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/OSD-Logo1-Red.png'
import { State } from '../../redux/rootReducer';
import Search from '../Search/Search';
const DropdownMenu = () => {
    return (
        <>
            <Link to='/user' className='navbar__link'><i className="fal fa-cog left-icon"></i>Information</Link>
            <Link to='/' className='navbar__link'><i className="fal fa-sign-out left-icon"></i>Log out</Link>
        </>
    );
}
const Header = () => {
    const [isVisible, setIsVisible] = useState(false)
    const toggleMenu = () => {
        setIsVisible(!isVisible)
    }
    const onClose = () => {
        setIsVisible(false)
    }
    const user = useSelector((state: State) => state.user.userInfo)
    return (
        <div className="container navbar">
            <Row>
                <Col md={24} lg={8} sm={24} xs={24}>
                    <div className="d-flex align-items-center justify-content-between h-100">
                        <button onClick={toggleMenu} className='navbar__button--menu'> <i className="far fa-bars"></i> </button>
                        <img className='navbar__logo' src={logo} alt="" />
                        <button onClick={toggleMenu} className='navbar__button--menu'> <i className="fas fa-user"></i> </button>
                    </div>
                </Col>
                <Col lg={8} md={24} sm={24} xs={24}>
                    <Search className='navbar__search' />
                </Col>
                <Col md={8}>
                    <div className="navbar__link__container">
                        <Link to='/' className='navbar__link'>Rules</Link>
                        <Link to='/' className='navbar__link'>Bet</Link>
                        <Link to='/' className='navbar__link'>History</Link>
                        {user.userId
                            ?<Dropdown overlay={<DropdownMenu/>} placement='bottomRight' overlayClassName='navbar__dropdown'>
                                <Avatar src={user.avatar} className='navbar__link__avatar' />
                            </Dropdown>
                            : <Link to='/login' className='navbar__link--login'>Login</Link>
                        }
                    </div>
                </Col>
                <Drawer
                    className='navbar__drawer'
                    visible={isVisible}
                    onClose={onClose}
                    title={<img src={logo} alt='' className='navbar__logo' />}
                    placement='left'
                    closeIcon={null}
                    extra={<button onClick={onClose} className='btn navbar__drawer__button--close'><i className="far fa-times"></i></button>}
                >
                    <Search className='mb-2 navbar__drawer__search' />
                    <div className="navbar__link__container__drawer">
                        <Link to='/' className='navbar__link'>Rules</Link>
                        <Link to='/' className='navbar__link'>Bet</Link>
                        <Link to='/' className='navbar__link'>History</Link>
                        <Link to='/login' className='navbar__link--login'>Login</Link>
                    </div>
                </Drawer>
            </Row>
        </div>
    );
};

export default Header;