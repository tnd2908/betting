import React from 'react';
import { Form, Input, Divider } from 'antd';
import { Link } from 'react-router-dom';
import {MailOutlined, LockOutlined} from '@ant-design/icons';
import { ILoginField } from '../../../Utils/interface';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../../Redux/Action/user';
import Button from '../../../Components/Button/Button';
import { State } from '../../../Redux/Reducer';

const LoginForm = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state: State) => state.user.isLoading)
    const onFinish = (data : ILoginField) =>{
        dispatch(userLogin(data))
    }
    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            className='login-form form'
            layout='vertical'
            onFinish={onFinish}
        >
            <h1 className='form__title'>Welcome Back!</h1>
            <h3 className='form__sub-title'>Login to continue</h3>
            <Form.Item
                // label={<h6 className='form__item--title'>Email</h6>}
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input
                    style={{ backgroundColor: '#434343', border: 0 }}
                    size='large'
                    placeholder='Input your email'
                    type='email'
                    prefix={<MailOutlined style={{marginRight: '7px'}}/>}
                />
            </Form.Item>

            <Form.Item
                // label={<h6 className='form__item--title'>Password</h6>}
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password prefix={<LockOutlined style={{marginRight: '7px'}}/>} style={{ backgroundColor: '#434343', border: 0 }} size='large' placeholder='Input your password' />
            </Form.Item>
            <div className="d-flex justify-content-between">
                <Link className='form__link--recovery' to='/recovery'>Forgot password?</Link>
            </div>
            <Form.Item>
                <Button isLoading={isLoading} className='form__button--login' htmlType='submit'>Sign in</Button>
            </Form.Item>

            <Form.Item>
                <Divider >
                    <h5 className='form__sub-title--login'>Or login with</h5>
                </Divider>
                <div className="d-flex justify-content-between">
                    <button type='button' className='form__button--facebook form__button'><i className="fab fa-facebook-f"></i>Facebook</button>
                    <button type='button' className='form__button--google form__button'><i className="fab fa-google"></i>Google</button>
                </div>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;