import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hook/useAuth'

import useDelayLink from '../hook/useDelayLink'



export function Header({ }) {
    function menuToggle() {
        document.body.classList.toggle('menu-is-show')
    }

    let delayLink = useDelayLink()
    let { login, handleLogout } = useAuth()

    function popupLogin(){
        document.querySelector('.popup-login').style.display = 'flex'
    }

    return (
        <header id="header">
            <div className="wrap">
                <div className="menu-hambeger" onClick={menuToggle}>
                    <div className="button">
                        <span />
                        <span />
                        <span />
                    </div>
                    <span className="text">menu</span>
                </div>
                <Link to="/" className="logo" onClick={delayLink}>
                    <img src="img/logo.svg" alt="" />
                    <h1>CFD</h1>
                </Link>
                <div className="right">
                    {
                        login ?
                            <div className="have-login">
                                <div className="account">
                                    <Link to="/ca-nhan" onClick={delayLink} className="info">
                                        <div className="name">{login.name}</div>
                                        <div className="avatar">
                                            <img src={login.avatar} alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="hamberger">
                                </div>
                                <div className="sub">
                                    <Link to="/ca-nhan">Thong tin ca nhan</Link>
                                    <a href="#">Thông tin tài khoản</a>
                                    <a href="#" onClick={e => { e.preventDefault(); handleLogout() }}>Đăng xuất</a>
                                </div>
                            </div>
                            :
                            <div class="not-login bg-none">
                                <a href="#" class="btn-register" onClick={popupLogin}>Đăng nhập</a>
                                <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                            </div>
                    }

                    {/* <div class="not-login bg-none">
                    <a href="#" class="btn-register">Đăng nhập</a>
                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                </div> */}
                </div>
            </div>
        </header>
    )
}