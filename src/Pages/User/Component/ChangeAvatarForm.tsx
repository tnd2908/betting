import React from 'react';
import { Form, message, Upload } from 'antd';
import { baseURL } from '../../../Utils/constant';
import { CloudUploadOutlined } from '@ant-design/icons'
import Button from '../../../Components/Button/Button';

const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};
const props = {
    name: 'file',
    multiple: false,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info : any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e : any) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
const ChangeAvatarForm = () => {
    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            layout='vertical'
            className='flex-mid flex-column form--avatar'
        >
            <Form.Item>
                <h1>Change your Avatar</h1>
            </Form.Item>
            <Form.Item
                name="image"
                getValueFromEvent={normFile}
                valuePropName="fileList"
                rules={[{ required: true, message: 'Please choose your image!' }]}
            >
                <Upload {...props} listType='picture-card' maxCount={1}>
                    <div className="flex-mid flex-column">
                        <CloudUploadOutlined style={{color: 'white', fontSize: '50px', marginBottom:'15px'}}/>
                        <p className="text-light mt-2">
                            Click here to upload
                        </p>
                    </div>
                </Upload>
            </Form.Item>
            <Form.Item>
                <Button htmlType='submit' type='primary' className='form__button--avatar'>Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default ChangeAvatarForm;