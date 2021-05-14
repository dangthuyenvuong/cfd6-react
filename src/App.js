import React, { useEffect, useState, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react'
import './assets/style/custom.scss'

import { Header, Footer, Nav } from './component'
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom'

// import Header from './component/Header'
// import Footer from './component/Footer'

import Home from './page/Home'
import Team from './page/Team'
import FAQ from './page/FAQ'
import Contact from './page/Contact'
import Profile from './page/Profile'
import Page404 from './page/Page404'
import ChiTietKhoaHoc from './page/ChiTietKhoaHoc'
import CountDown from './page/CountDown'
import PopupLogin from './component/PopupLogin'
import PrivateRoute from './component/PrivateRoute'
import Auth from './service/auth'

Auth.update({
  name: "Đặng Thuyền Vương"
}).then(res => {
  
})

export let Context = React.createContext({})

function App() {

  let [state, setState] = useState({
    login: JSON.parse(localStorage.getItem('login')),
  })

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(state.login))
  }, [state.login])

  async function handleLogin(username, password) {

    try{
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


    }catch(err){

    }

    // .then((res) => {
    //   return res.json()
    // })
    // .then(res => {

    //   if(res.data){
    //     setState({
    //       ...state,
    //       login: res.data
    //     })
    //     callback()
    //   }else if(res.error){
    //     setState({
    //       ...state,
    //       loginError: res.error
    //     })
    //   }

    // })
    // .catch(err => {
    //   console.log('error', err)
    // })

    // if(username === 'admin@gmail.com' && password === '123456'){
    //   setState({
    //     ...state,
    //     login: {
    //       name: 'Đặng Thuyền Vương',
    //       avatar: '/img/avt.png'
    //     }
    //   })
    // }else{
    //   return 'Sai thông tin đăng nhập'
    // }
  }

  function handleLogout() {
    setState({
      ...state,
      login: false
    })
  }

  return (
    <Context.Provider value={{ ...state, handleLogin, handleLogout }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <PopupLogin />
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/" component={Profile} />
            <Route path="/lien-he" component={Contact} />
            <Route path="/cau-hoi-thuong-gap" component={FAQ} />
            <Route path="/khoa-hoc/:slug" component={ChiTietKhoaHoc} />
            <Route path="/demo" component={CountDown} />
            <Route component={Page404} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    </Context.Provider>
  )

}

export default App;
