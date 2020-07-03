import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
// import { Container } from './styles';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
