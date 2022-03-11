import React from 'react';
import { Form, Input, Button, Divider } from 'antd';
import { Link } from 'react-router-dom';
const LoginForm = () => {
    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            className='login-form form'
            layout='vertical'
        >
            <h1 className='form__title'>Welcome Back!</h1>
            <h3 className='form__sub-title'>Login to continue</h3>
            <Form.Item
                label={<h6 className='form__item--title'>Email</h6>}
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input style={{backgroundColor: '#434343', border: 0}} size='large' placeholder='Input your email' />
            </Form.Item>

            <Form.Item
                label={<h6 className='form__item--title'>Password</h6>}
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password style={{backgroundColor: '#434343', border: 0}} size='large' placeholder='Input your password' />
            </Form.Item>
            <div className="d-flex justify-content-between">
                <Link className='form__link--recovery' to='/recovery'>Forgot password?</Link>
            </div>
            <Form.Item>
                <button className="btn form__button--login">Sign in</button>
            </Form.Item>
           
            <Form.Item>
                <Divider >
                    <h5 className='form__sub-title--login'>Or login with</h5>
                </Divider>
                <div className="d-flex justify-content-between">
                    <button className='form__button--facebook form__button'><i className="fab fa-facebook-f"></i>Facebook</button>
                    <button className='form__button--google form__button'><i className="fab fa-google"></i>Google</button>    
                </div>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;