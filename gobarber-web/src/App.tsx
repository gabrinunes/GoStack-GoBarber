import React from 'react';
import GlobalStyle from './styles/global';
import SignUp from './pages/SiginUp';
import SignIn from './pages/SiginIn';

import AuthContext from './context/AuthContext';
// import Routes from './routes';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Gabriel' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
