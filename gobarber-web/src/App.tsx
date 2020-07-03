import React from 'react';
import GlobalStyle from './styles/global';
import SignUp from './pages/SiginUp';
import SignIn from './pages/SiginIn';

import AppProvider from './hooks';
// import Routes from './routes';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;
