import React from 'react';
import {LoadingOutlined} from '@ant-design/icons'
type ButtonProps = {
    type?: string,
    htmlType: 'submit' | 'reset' | 'button',
    isLoading?: boolean,
    isDisable?: boolean,
    className?: string,
    children: any,
    onClick?: () => void
}
const Button = ({type, htmlType, isLoading, isDisable, className, children, onClick} : ButtonProps) => {
    const checkDisable = () =>{
        if(isDisable === true){
            return isDisable;
        }
        else{
            if(isLoading){
                return true
            }
            else{
                return false
            }
        }
    }
    return (
        <button 
            type={htmlType} 
            className={`btn ${type} ${className ? className : ''}`}
            disabled={checkDisable()}
            onClick={onClick}
         >
             {isLoading 
                ? <LoadingOutlined className='btn__loading-icon'/> 
                : children
            }
        </button>
    );
};

export default Button;