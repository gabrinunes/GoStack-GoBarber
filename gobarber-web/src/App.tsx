import React from 'react';
import GlobalStyle from './styles/global';
import SignUp from './pages/SiginUp';
import SignIn from './pages/SiginIn';

import { AuthProvider } from './hooks/AuthContext';
// import Routes from './routes';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
