import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';

import BbsListView from 'src/views/bbs/BbsListView';
import BbsContentView from 'src/views/bbs/BbsContentView';
import { URL } from 'src/utils/constants';

const routes = [
  {
    path: URL,
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'user', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  // 게시판
  {
    path: URL,
    element: <DashboardLayout />,
    children: [
      { path: 'list', element: <BbsListView /> },
      {
        path: 'view',
        children: [
          { path: '/:index', element: <BbsContentView /> },
        ]
      },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'signup', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to={URL} /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;