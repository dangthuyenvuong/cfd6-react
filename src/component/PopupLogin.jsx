import React, { useContext, useState } from 'react'
import reactDOM from 'react-dom'
import useAuth from '../hook/useAuth'
import useFormValidate from '../hook/useFormValidate'

export default function PopupLogin() {
    let [loginError, setLoginError] = useState(null)
    let {inputChange, check, error, form} = useFormValidate({
        username: '',
        password: ''
    }, {
        rule: {
            username: {
                required: true,
                pattern: 'email'
            },
            password: {
                required: true,
                min: 6,
                max: 32
            }
        },
    })

    let {handleLogin} = useAuth()

    function close(){
        document.querySelector('.popup-login').style.display = 'none'
    }



     async function loginHandle(){
        let error = check()
        if(Object.keys(error).length === 0){
            let res = await handleLogin(form.username, form.password)
            
            if(res.success){
                close()
            }else if(res.error){
                setLoginError(res.error)
            }


        }
    }

    return reactDOM.createPortal(
        <div className="popup-form popup-login" style={{ display: 'none' }}>
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" style={{ display: 'block' }}>
                    <h2 className="title">Đăng nhập</h2>
                    {loginError && <p className="error-text">{loginError}</p>}
                    <input value={form.username} name="username" onChange={inputChange} type="text" placeholder="Email / Số điện thoại"/>
                    {
                        error.username && <p className="error-text">{error.username}</p>
                    }
                    <input value={form.password} name="password" onChange={inputChange} type="password" placeholder="Mật khẩu"/>
                    {
                        error.password && <p className="error-text">{error.password}</p>
                    }
                    
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                               
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">Quên mật khẩu?</a>
                    </div>
                    <div className="btn rect main btn-login" onClick={loginHandle}>đăng nhập</div>
                    <div className="text-register" style={{}}>
                        <strong>hoặc đăng ký bằng</strong>
                    </div>
                    <div>
                        <div className="btn btn-icon rect white btn-google">
                            <img src="img/google.svg" alt="" />
                            Google
                        </div>
                    </div>
                    <div className="close" onClick={close}>
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div>
                {/* email form */}
                <div className="ct_email">
                    <h2 className="title">Đặt lại mật khẩu</h2>
                    <input type="text" placeholder="Email" />
                    <div className="btn rect main btn-next">Tiếp theo</div>
                    <div className="back" />
                    <div className="close" onClick={close}>
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}