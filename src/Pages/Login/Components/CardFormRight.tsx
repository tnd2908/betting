import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgtop from '../../../assets/Images/Logo-White.png';
import Button from '../../../components/Button/Button';

const CardFormRight = () => {
    const navigate = useNavigate();
    const navigateToLogin = () =>{
        navigate('/login')
    }
    return (
        <div className='card-form card-form--right'>
            <div className='flex-mid flex-column h-100'>
                <img className='card-form__image--top' src={bgtop} alt="" />
                <Button htmlType='button' onClick={navigateToLogin} className='card-form__button--login'>
                    Sign in now
                </Button>
            </div>
        </div>
    );
};

export default CardFormRight;