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
        >
            <Form.Item
                label={<h6 className='text-white'>Name: </h6>}
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input disabled defaultValue='Your name'/>
            </Form.Item>
            <Form.Item
                label={<h6 className='text-white'>Email: </h6>}
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input disabled defaultValue='Youremail@gmail.com'/>
            </Form.Item>
            <Form.Item
                label={<h6 className='text-white'>New name: </h6>}
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label={<h6 className='text-white'>Password: </h6>}
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button htmlType='submit' type='primary'>Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default ChangeInforForm;