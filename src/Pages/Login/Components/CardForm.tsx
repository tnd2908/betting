import { PageHeader } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../../../Assets/Images/5867.jpg'
import bgtop from '../../../Assets/Images/OSD-Logo1-Red.png'
type Props = {
    to: string
}
const CardForm = ({to}:Props) => {
    const navigate = useNavigate();
    const handleUrlChange = () =>{
        navigate(to)
    }
    return (
        <div className='card-form' >
            <div>
                <img className='card-form__image--top' src={bgtop} alt="" />
                <PageHeader
                    className="site-page-header"
                    title="Chance to be rich"
                    subTitle="Sign up here"
                />
                <button onClick={handleUrlChange} className='card-form__button'>
                    Sign up
                </button>
            </div>
            <img className='card-form__image--bottom' src={bg} alt="" />
        </div>
    );
};

export default CardForm;