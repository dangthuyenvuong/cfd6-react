import React, { useEffect, useState } from 'react'
import './assets/style/custom.scss'
import { Provider } from 'react-redux'

import { BrowserRouter, Route } from 'react-router-dom'

import Auth from './service/auth'
import { routerConfig } from './core'
import routers from './routers'
import Home from './page/Home'
import Profile from './page/Profile'
import Contact from './page/Contact'
import FAQ from './page/FAQ'
import ChiTietKhoaHoc from './page/ChiTietKhoaHoc'
import CountDown from './page/CountDown'
import Page404 from './page/Page404'
import { Footer, Nav, Header,  PrivateRoute, PopupLogin } from './component'
import MainLayout from './layout/MainLayout'
import { Switch } from 'react-router-dom'
import store from './redux'

export let Context = React.createContext({})


function App() {

  let [state, setState] = useState({
    login: JSON.parse(localStorage.getItem('login')),
  })

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(state.login))
  }, [state.login])

  async function handleLogin(username, password) {

    try {
      let res = await Auth.login({ username, password })

      if (res.data) {
        setState({
          ...state,
          login: res.data
        })
        return {
          success: true
        }
      } else if (res.error) {
        return {
          error: res.error
        }
      }
    } catch (err) {

    }
  }

  function handleLogout() {
    setState({
      ...state,
      login: false
    })
  }

  return (
    <Provider store={store}>
      <Context.Provider value={{ ...state, handleLogin, handleLogout }}>
        <BrowserRouter>
          <MainLayout>
            <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute path="/ca-nhan" component={Profile} />
                <Route path="/lien-he" component={Contact} />
                <Route path="/cau-hoi-thuong-gap" component={FAQ} />
                <Route path="/khoa-hoc/:slug" component={ChiTietKhoaHoc} />
                <Route path="/demo" component={CountDown} />
                <Route component={Page404} />
              </Switch>
          </MainLayout>
        </BrowserRouter>
      </Context.Provider>
    </Provider>
  )

}

export default App;
