import React from 'react';
import { Image } from 'react-native';
import LogoImg from '../../assets/Logo.png';

import { Container, Title } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Image source={LogoImg} />

    <Title>Faça seu Logon</Title>
  </Container>
);

export default SignIn;
