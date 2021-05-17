import React, { useState, useContext } from 'react'
import Info from './component/Info'
import MyCourse from './component/MyCourse'
import Project from './component/Project'
import Payment from './component/Payment'
import Coin from './component/Coin'

import { Route, Switch, NavLink, useRouteMatch, Redirect } from 'react-router-dom'
import TopInfo from './component/TopInfo'
import { routerConfig } from '../../core'

export default function Profile({children}) {

    let { path } = useRouteMatch()

    return (
        <main className="profile" id="main">
            <section>
            
                <TopInfo  />
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <NavLink exact to={`${path}`}  >Thông tin tài khoản</NavLink>
                            <NavLink to={`${path}/khoa-hoc-cua-ban`}>Khóa học của bạn</NavLink>
                            <NavLink to={`${path}/du-an`}>Dự án đã làm</NavLink>
                            <NavLink to={`${path}/payment`}>Lịch sử thanh toán</NavLink>
                            <NavLink to={`${path}/coin`}>Quản lý COIN của tôi</NavLink>
                        </div>
                        <div className="tab-content">
                            {children}
                            <Switch>
                                <Route path={`${path}/khoa-hoc-cua-ban`} component={MyCourse}/>
                                <Route path={`${path}/du-an`} component={Project}/>
                                <Route path={`${path}/payment`} component={Payment}/>
                                <Route path={`${path}/coin`} component={Coin}/>
                                <Route component={Info}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}


function a() {
    console.log(this)
}


let b = { b: 1, c: 2 }

a.bind(b)