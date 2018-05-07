import Profile from '../pages/Dash/Profile';
import DashBoard from '../pages/Dash/DashBoard';

import { PrivateRoute, AuthenRoute, PublicRoute } from '../HOC';
//PrivateRoute(Home)  AuthenRoute(Login)

const dashRoutes = [
    { path: '/dash', name: 'DashBoard', component: PublicRoute(DashBoard)},
    { path: '/dash/form/profile', name: 'Profile', component: PublicRoute(Profile)}
];

export default dashRoutes;