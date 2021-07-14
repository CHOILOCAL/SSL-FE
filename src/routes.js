import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/dashboard/dashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import RegisterView from 'src/views/auth/RegisterView';
import ExampleView from 'src/views/example/ExampleView';
import ListView from 'src/views/list/ListView';
import ContentView from 'src/views/list/ContentView';
import CommCodeView from 'src/views/code/CommCodeView';
import MenuView from 'src/views/menu/MenuView';
import { URL } from 'src/utils/constants';
import CompanyView from './views/company/CompanyView';
import DeptView from './views/dept/deptView';
import AuthView from './views/auth/AuthView';
import BoardView from './views/board/boardView';

const routes = [
  {
    path: URL,
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'list', element: <ListView /> },
      {
        path: 'view',
        children: [
          { path: '/:index', element: <ContentView /> },
        ]
      },
      { path: 'code', element: <CommCodeView /> },
      { path: 'menu', element: <MenuView />},
      { path: 'user', element: <CustomerListView /> },
      { path: 'company', element: <CompanyView /> },
      { path: 'dept', element: <DeptView /> },
      { path: 'auth', element: <AuthView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'board', element: <BoardView /> },
      { path: 'example', element: <ExampleView /> },
      { path: 'customer', element: <CustomerListView /> },
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
