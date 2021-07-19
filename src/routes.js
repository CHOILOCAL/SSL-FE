import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import AccountView from 'src/views/account/AccountView';
import userListView from 'src/views/user/userListView';
import DashboardView from 'src/views/dashboard/dashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import RegisterView from 'src/views/auth/RegisterView';
import ExampleView from 'src/views/example/ExampleView';
import CommCodeView from 'src/views/code/CommCodeView';
import { URL } from 'src/utils/constants';
import CompanyView from './views/company/CompanyView';
import DeptView from './views/dept/deptView';
import AuthView from './views/auth/AuthView';
import BoardListView from './views/board/BoardListView';
import MenuView from "./views/menu/menuView/menuView";

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
      { path: 'menu', element: <MenuView />},
      { path: 'user', element: <userListView /> },
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
      { path: 'login', element: <LoginView /> },
      { path: 'logout', element: <LoginView /> },
      { path: 'signup', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to={URL} /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
