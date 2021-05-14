import React, { useReducer, useRef, useState } from 'react'
import CountDown from './CountDown'
import InputComponent from './InputComponent'
import PopupLogin from '../../component/PopupLogin'
import { Prompt } from 'react-router-dom'
import useFormValidate from '../../hook/useFormValidate'

// ref level1
// ref level2 -> forwardRef
// ref level3 -> forwardRef, useImperativeHandle


function reducer(state, action) {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state,
                form: {
                    ...state.form,
                    ...action.payload
                }
            }

        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            }
    }
    return state;
}

export default function Contact() {

    let { form, error, inputChange, check } = useFormValidate({
        name: '',
        phone: '',
        email: '',
        website: '',
        title: '',
        content: ''
    }, {
        rule: {
            name: {
                required: true
            },
            phone: {
                required: true,
                pattern: 'phone'
            },
            email: {
                required: true,
                pattern: 'email'
            },
            website: {
                pattern: /^(?:http(s)?:\/\/)?www.facebook.com\/[\w.-]+$/i
            },
            title: {
                required: true
            },
            content: {
                required: true
            }
        },
        message: {
            name: {
                required: 'Họ và tên không được để trống'
            },
            phone: {
                required: 'Số điện thoại không được để trống',
                pattern: 'Phải là số điện thoại Việt Nam'
            },
            website: {
                pattern: 'Phải là link facebook'
            }
        }
    })


    function onSubmit() {
        let errorObj = check()

        if (Object.keys(errorObj).length === 0) {
            console.log(form)
            // call api
        }
    }

    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">
                {/* <div class="main-sub-title">liên hệ</div> */}
                <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
                <p className="top-des" >
                    Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
                    việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
                </p>
                <div className="form">
                    <label>
                        <p>Họ và tên<span>*</span></p>
                        <input value={form.name} name="name" onChange={inputChange} type="text" placeholder="Họ và tên bạn" />
                        {
                            error.name ? <p className="error-text">{error.name}</p> : null
                        }
                    </label>
                    <label>
                        <p>Số điện thoại</p>
                        <input value={form.phone} name="phone" onChange={inputChange} type="text" placeholder="Số điện thoại" />
                        {
                            error.phone && <p className="error-text">{error.phone}</p>
                        }
                    </label>
                    <label>
                        <p>Email<span>*</span></p>
                        <input value={form.email} name="email" onChange={inputChange} type="text" placeholder="Email của bạn" />
                        {
                            error.email && <p className="error-text">{error.email}</p>
                        }
                    </label>
                    <label>
                        <p>Link fb</p>
                        <input value={form.website} name="website" onChange={inputChange} type="text" placeholder="Đường dẫn website http://" />
                        {
                            error.website && <p className="error-text">{error.website}</p>
                        }
                    </label>
                    <label>
                        <p>Tiêu đề<span>*</span></p>
                        <input value={form.title} name="title" onChange={inputChange} type="text" placeholder="Tiêu đề liên hệ" />
                        {
                            error.title && <p className="error-text">{error.title}</p>
                        }
                    </label>
                    <label>
                        <p>Nội dung<span>*</span></p>
                        <textarea value={form.content} name="content" onChange={inputChange} id cols={30} rows={10} />
                        {
                            error.content && <p className="error-text">{error.content}</p>
                        }
                    </label>
                    <div className="btn main rect" onClick={onSubmit}>đăng ký</div>
                </div>
            </section>
            {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
        </main>
    )
}


