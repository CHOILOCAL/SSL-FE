import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DesktopLayout';
import AccountView from 'src/views/account/AccountView';
import UserListView from 'src/views/user/UserListView';
import DashboardView from 'src/views/dashboard/DashboardView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ExampleView from 'src/views/example/ExampleView';
import CommCodeView from 'src/views/code/CommCodeView';
import { URL } from 'src/utils/constants';
import CompanyView from './views/company/CompanyListView';
import DeptView from './views/dept/DeptView';
import AuthView from './views/auth/AuthView';
import BoardListView from './views/board/BoardListView';
import Index from './views/menu/MenuListView';
import { FindId } from './views/account/FindId';
import { FindPwd } from './views/account/FindPwd';
import LoginView from './views/account/Login';
import SignUpView from './views/account/SignUp';

const routes = [
  {
    path: URL,
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      // { path: 'list', element: <ListView /> },
      // {
      //   path: 'view',
      //   children: [
      //     { path: '/:index', element: <ContentView /> },
      //   ]
      // },
      { path: 'code', element: <CommCodeView /> },
      { path: 'menu', element: <Index /> },
      { path: 'user', element: <UserListView /> },
      { path: 'company', element: <CompanyView /> },
      { path: 'dept', element: <DeptView /> },
      { path: 'auth', element: <AuthView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'board', element: <BoardListView /> },
      { path: 'example', element: <ExampleView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'findid', element: <FindId /> },
      { path: 'findpwd', element: <FindPwd /> },
      { path: 'login', element: <LoginView /> },
      { path: 'logout', element: <Navigate to="/" /> },
      { path: 'signup', element: <SignUpView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to={URL} /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
