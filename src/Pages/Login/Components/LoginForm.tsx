import React from 'react';
import { Form, Input, Divider } from 'antd';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { ILoginField } from '../../../Utils/interface';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin, userLoginFacebook, userLoginGoogle } from '../../../Redux/Action/user';
import Button from '../../../Components/Button/Button';
import { State } from '../../../Redux/Reducer';
import FacebookLogin from 'react-facebook-login';
import { ReactFacebookLoginInfo, ReactFacebookFailureResponse } from 'react-facebook-login';
import GoogleLogin, {GoogleLoginResponse, GoogleLoginResponseOffline} from 'react-google-login';

const LoginForm = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state: State) => state.user.isLoading);
    const navigate: NavigateFunction = useNavigate()
    const onFinish = (data: ILoginField) => {
        dispatch(userLogin(data, navigate))
    }
    const responseFacebook = (response: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
        console.log(response)
        dispatch(userLoginFacebook(response, navigate))
    }
    const handleLoginFacebook = () => {
        console.log(111)
    }
    const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        dispatch(userLoginGoogle(response, navigate))
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
                    prefix={<MailOutlined style={{ marginRight: '7px' }} />}
                />
            </Form.Item>

            <Form.Item
                // label={<h6 className='form__item--title'>Password</h6>}
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password prefix={<LockOutlined style={{ marginRight: '7px' }} />} style={{ backgroundColor: '#434343', border: 0 }} size='large' placeholder='Input your password' />
            </Form.Item>
            <div className="d-flex justify-content-between">
                <Link className='form__link--recovery' to='/recovery'>Forgot password?</Link>
            </div>
            <Form.Item>
                <Button isLoading={isLoading} type='primary-light' className='form__button--login' htmlType='submit'>Sign in</Button>
            </Form.Item>

            <Form.Item>
                <Divider >
                    <h5 className='form__sub-title--login'>Or login with</h5>
                </Divider>
                <div className="d-flex justify-content-between">
                    <div className="form__button__container">
                        <FacebookLogin
                            appId="238666198405961"
                            autoLoad={true}
                            fields="name,email,picture"
                            onClick={handleLoginFacebook}
                            textButton="Facebook"
                            icon={<i className="fab fa-facebook-f"></i>}
                            cssClass='form__button--facebook form__button'
                            callback={responseFacebook} />
                    </div>
                    <div className="form__button__container">
                        <GoogleLogin
                            clientId="180865836745-bd8fpp487vc2blle56sajla6928lg6qt.apps.googleusercontent.com"
                            buttonText='Google'
                            onSuccess={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            icon={true}
                            render={(props)=>(
                                <button type='button' onClick={props.onClick} disabled={props.disabled} className='form__button--google form__button'><i className="fab fa-google"></i>Google</button> 
                            )}
                        />
                    </div>
                </div>

            </Form.Item>
        </Form>
    );
};

export default LoginForm;