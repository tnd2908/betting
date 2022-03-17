import React from 'react';
import { Form, Input } from 'antd';
import Button from '../../../Components/Button/Button';

const ChangeInforForm = () => {
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
                <h1>Update your information</h1>
            </Form.Item>
            <Form.Item
                label={<h6 className='text-white'>Name: </h6>}
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input disabled size='large'/>
            </Form.Item>
            <Form.Item
                label={<h6 className='text-white'>Email: </h6>}
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input disabled size='large'/>
            </Form.Item>
            <Form.Item
                label={<h6 className='text-white'>New name: </h6>}
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input size='large'/>
            </Form.Item>

            <Form.Item
                label={<h6 className='text-white'>Password: </h6>}
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password size='large'/>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
                <Button htmlType='submit' type='primary' className='w-100'>Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default ChangeInforForm;