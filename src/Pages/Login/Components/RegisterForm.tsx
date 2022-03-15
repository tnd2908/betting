import { Checkbox, Form, Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../Components/Button/Button';
import { userRegister } from '../../../Redux/Action/user';
import { IRegisterField } from '../../../Utils/interface';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const onFinish = (data: IRegisterField) => {
        dispatch(userRegister(data))
    }
    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            className='register-form form'
            layout='vertical'
            onFinish={onFinish}
        >
            <h1 className='register-form__title'>Register new Account</h1>
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input size='large' placeholder='Input your name' />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input size='large' placeholder='Input your email' />
            </Form.Item>
            <Form.Item
                name="phone"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input size='large' placeholder='Input your phone number' />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password size='large' placeholder='Input your password' />
            </Form.Item>
            <Form.Item
                name="confirm"
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
            <Form.Item 
                rules={[{ required: true, message: 'Please agree with the term' }]}
            >
                <Checkbox><span className="text-dark">I agree with the term and condition</span></Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType='submit' type='dark' className='form__button--register'>Sign up</Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterForm;