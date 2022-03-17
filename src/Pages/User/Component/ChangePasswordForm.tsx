import React from 'react';
import { Form, Input } from 'antd';
import Button from '../../../Components/Button/Button';

const ChangePasswordForm = () => {
    return (
        <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            style={{width: '100%'}}
        >
            <Form.Item wrapperCol={{offset: '6'}}>
                <h1>Change your password</h1>
            </Form.Item>
            <Form.Item
                name="password"
                label={<h6 className='text-white'>Password: </h6>}
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password size='large' placeholder='Input your password' />
            </Form.Item>
            <Form.Item
                name="confirm"
                label={<h6 className='text-white'>Confirm Password: </h6>}
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
                label={<h6 className='text-white'>Old Password: </h6>}
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password size='large' placeholder='Input your old password' />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
                <Button htmlType='submit' type='primary' className='w-100'>Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default ChangePasswordForm;