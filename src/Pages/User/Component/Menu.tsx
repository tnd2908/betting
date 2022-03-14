import React from 'react';

const Menu = () => {
    const avatar = 'https://joeschmoe.io/api/v1/random'
    return (
        <div className="d-flex flex-column user__menu">
            <div className='user__menu__avatar--background'>
                <img className="user__menu__avatar" src={avatar} alt="" />
            </div>
            <p className="user__menu__name">Your name</p>
            <div className="user__menu__item">
                <h6 className="user__menu__item--title"><i className="far fa-user left-icon"></i>Update Information</h6>
            </div>
            <div className="user__menu__item">
                <h6 className="user__menu__item--title"><i className="far fa-lock-alt left-icon"></i>Change Password</h6>
            </div>
            <div className="user__menu__item">
                <h6 className="user__menu__item--title"><i className="far fa-image left-icon"></i>Update Avatar</h6>
            </div>
            <div className="user__menu__item">
                <h6 className="user__menu__item--title"><i className="far fa-sign-out left-icon"></i>Sign out</h6>
            </div>
        </div>
    );
};

export default Menu;