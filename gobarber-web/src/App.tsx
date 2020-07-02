import React from 'react';
import GlobalStyle from './styles/global';
import SignUp from './pages/SiginUp';
import SignIn from './pages/SiginIn';
// import Routes from './routes';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
