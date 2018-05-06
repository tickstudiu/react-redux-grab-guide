import Login from '../pages/Login';
import Register from '../pages/Register/';
import Home from "../pages/Home/index";
import Profile from '../pages/Profile';
import NoMatch from '../pages/404';

import { PrivateRoute, AuthenRoute, PublicRoute } from '../HOC';
//PrivateRoute(Home)  AuthenRoute(Login)
const indexRoutes = [
    { path: '/', name: 'Page1', component: PublicRoute(Home) },
    { path: '/login', name: 'Loginpage', component: PublicRoute(Login) },
    { path: '/register', name: 'Registerpage', component: PublicRoute(Register) },
    { path: '/profile', name: 'Profile', component: PublicRoute(Profile) },
    { path: null, name: '404 page', component: PublicRoute(NoMatch) }

];

export default indexRoutes;