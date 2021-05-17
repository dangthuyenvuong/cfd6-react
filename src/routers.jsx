
import MainLayout from './layout/MainLayout'
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



import Info from './page/Profile/component/Info'
import MyCourse from './page/Profile/component/MyCourse'
import Project from './page/Profile/component/Project'
import Payment from './page/Profile/component/Payment'
import Coin from './page/Profile/component/Coin'
let routers = [
    {
        component: MainLayout,
        routers: [
            {
                component: Team,
                path: '/team',
                exact: true
            },
            {
                component: Contact,
                path: '/lien-he',
                exact: true
            },
            {
                component: Home,
                path: '/',
                exact: true
            },
            {
                component: Profile,
                path: '/ca-nhan',
                auth: true,
                routers: [
                    {
                        component: Info,
                        exact: true
                    },
                    {
                        component: Payment,
                        path: 'payment',
                    },
                    {
                        component: MyCourse,
                        path: 'khoa-hoc-cua-ban',
                    },
                    {
                        component: Coin,
                        path: 'coin',
                    },
                    {
                        component: Project,
                        path: 'du-an',
                    }
                ]
            }
        ]
    },
    
]

export default routers