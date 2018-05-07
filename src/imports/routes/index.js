import Login from '../pages/Login';
import Register from '../pages/Register/';
import Home from "../pages/Home/index";
import NoMatch from '../pages/404';
import DashBoard from "../pages/Dash/DashBoard";
import DashBoard2 from "../pages/Dash/DashBoard2";
import Profile from "../pages/Dash/Profile";

import { PrivateRoute, AuthenRoute, PublicRoute } from '../HOC';

//PrivateRoute(Home)  AuthenRoute(Login)

let indexRoutes = [
    { path: '/', name: 'Home', component: PublicRoute(Home) },
    { path: '/login', name: 'Loginpage', component: PublicRoute(Login) },
    { path: '/register', name: 'Registerpage', component: PublicRoute(Register) },
    { path: '/dash', name: 'DashBoard', component: PublicRoute(DashBoard)},
    { path: '/dash/2', name: 'DashBoard 2', component: PublicRoute(DashBoard2)},
    { path: '/dash/form/profile', name: 'Profile', component: PublicRoute(Profile)},
    { path: null, name: '404 page', component: PublicRoute(NoMatch) }
];

export default indexRoutes;