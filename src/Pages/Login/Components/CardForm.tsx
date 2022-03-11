import { PageHeader } from 'antd';
import React from 'react';
import bg from '../../../Assets/Images/5867.jpg'
const CardForm = () => {
    return (
        <div className='card-form' style={{ backgroundImage: `url(${bg})` }}>
            <div>
                <PageHeader
                    className="site-page-header"
                    title="Chance to be rich"
                    subTitle="Sign up here"
                />
                {/* <h1 className='card-form__title'>Chance to be rich</h1>
                <h4 className='card-form__sub-title'>You want to be rich?</h4>
                <p className='card-form__text'>Sign up here</p> */}

                <button className='card-form__button'>
                    Sign up
                </button>
            </div>
            <img src={bg} alt="" />
        </div>
    );
};

export default CardForm;