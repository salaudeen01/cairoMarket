import React from 'react';

const Dashboard = React.lazy(() => import('./Pages/Dashboard'));
const Landing = React.lazy(() => import('./Pages/Landing'));
const Login = React.lazy(() => import('./Pages/Login'));
const Register = React.lazy(() => import('./Pages/Register'));
const ForgotPassword = React.lazy(() => import('./Pages/ForgotPassword'));
const Page404 = React.lazy(() => import('./Pages/Page404'));
const About = React.lazy(() => import('./Pages/About'));
const Contact = React.lazy(() => import('./Pages/Contact'));
const profile = React.lazy(() => import('./Pages/Profile'));
const Blog = React.lazy(() => import('./Pages/Blog'));
const event = React.lazy(() => import('./Pages/Event/event'));
const eventdetails = React.lazy(() => import('./Pages/Event/eventdetails'));
const verifyEmail = React.lazy(() => import ('./Pages/verifyemail/verifyEmail'));

const routes = [
  { path: '/', exact: true, name: 'Landing', layout:"MinimalLayout"},
  { path: '/landing', name: 'Landing', component: Landing, layout:"MinimalLayout" },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, layout:"MainLayout" },
  { path: '/login', name: 'Login', component: Login, layout:"MinimalLayout" },
  { path:  '/verify_email/:id', name:'verifyEmail', component:verifyEmail, layout:"MinimalLayout"},
  { path: '/register', name: 'Register', component: Register, layout:"MinimalLayout" },
  { path: '/forgotPassword', name: 'ForgotPassword', component: ForgotPassword, layout:"MinimalLayout" },
  { path: '/page404', name: 'Page404', component: Page404, layout:"MinimalLayout" },
  { path: '/about', name: 'About', component: About, layout:"MinimalLayout" },
  { path: '/contact', name: 'Contact', component: Contact, layout:"MinimalLayout" },
  { path: '/profile', name: 'profile', component: profile, layout:"MainLayout"},
  { path: '/blog', name: 'Blog', component: Blog, layout:"MinimalLayout" },
  {path: '/event', name:'event', component: event, layout:"MinimalLayout"},
  {path: '/eventdetails', name:'eventdetails', component:eventdetails, layout:"MinimalLayout"}
];

export default routes;
