import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { State } from '../../../state-management/reducers';

const menu = [
    {
        icon: 'user',
        text: 'Update Information',
        linkTo: '/user'
    },
    {
        icon: 'lock-alt',
        text: 'Change Password',
        linkTo: '/user/password'
    },
    {
        icon: 'image',
        text: 'Update Information',
        linkTo: '/user/avatar'
    }
]
const Menu = () => {
    const navigate = useNavigate();
    const handleNavigate = (menuItem : any) =>{
        navigate(menuItem.linkTo)
    }
    const userInfo = useSelector((state : State) => state.user.userInfo)
    const avatar = userInfo.avatar ? userInfo.avatar : 'https://joeschmoe.io/api/v1/random'

    return (
        <div className="d-flex flex-column user__menu">
            <div className='user__menu__avatar--background'>
                <img className="user__menu__avatar" src={avatar} alt="" />
            </div>
            <p className="user__menu__name"> {userInfo.username} </p>
            {menu.map((item, index)=>(
                <div key={index} className="user__menu__item" onClick={()=> handleNavigate(item)}>
                    <h6 className="user__menu__item--title"><i className={`far fa-${item.icon} left-icon`}></i> {item.text} </h6>
                </div>
            ))}
            <div className="user__menu__item">
                <h6 className="user__menu__item--title"><i className="far fa-sign-out left-icon"></i>Sign out</h6>
            </div>
        </div>
    );
};

export default Menu;