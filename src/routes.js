import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
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
      { path: 'list', element: <BbsListView /> },
      {
        path: 'view',
        children: [
          { path: '/:index', element: <BbsContentView /> },
        ]
      },
      { path: 'menu', element: <BbsListView />}, // * 신규 Com
      { path: 'user', element: <CustomerListView /> },
      { path: 'comp', element: <BbsContentView /> }, // * 신규 Com
      { path: 'dept', element: <BbsContentView /> }, // * 신규 Com
      { path: 'dashboard', element: <DashboardView /> }, // * 신규 Com
      { path: 'board', element: <BbsContentView /> }, // * 신규 Com
      { path: 'setting', element: <SettingsView /> },
      { path: 'custom', element: <CustomerListView /> },
      { path: 'product', element: <ProductListView /> },
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
