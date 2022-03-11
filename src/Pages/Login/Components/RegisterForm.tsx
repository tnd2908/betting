import { Form, Input } from 'antd';
import React from 'react';

const RegisterForm = () => {
    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            className='login-form form'
            layout='vertical'
        >
            <h1 className='form__title'>Sign up new Account</h1>
            <h3 className='form__sub-title'>Login to continue</h3>
            <Form.Item
                label={<h6 className='form__item--title'>Name</h6>}
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input size='large' placeholder='Input your name' />
            </Form.Item>
            <Form.Item
                label={<h6 className='form__item--title'>Email</h6>}
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input size='large' placeholder='Input your email' />
            </Form.Item>

            <Form.Item
                label={<h6 className='form__item--title'>Password</h6>}
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password size='large' placeholder='Input your password' />
            </Form.Item>
            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password placeholder='Confirm your password' size='large'/>
            </Form.Item>
            <Form.Item>
                <button className="btn form__button--login">Sign in</button>
            </Form.Item>
        </Form>
    );
};

export default RegisterForm;