import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgtop from '../../../assets/Images/Logo-White.png';
import bg from '../../../assets/Images/money.png';

const CardFormLeft = () => {
    const navigate = useNavigate();
    const navigateToSignUp = () =>{
        navigate('/signup')
    }
    return (
        <div className='card-form card-form--left' >
            <div>
                <img className='card-form__image--top' src={bgtop} alt="" />
                <h4 className="card-form__title">Chance to be Rich</h4>
                <button onClick={navigateToSignUp} className='card-form__button'>
                    Sign up
                </button>
            </div>
            <img className='card-form__image--bottom' src={bg} alt="" />
        </div>
    );
};

export default CardFormLeft;