import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import LogoImg from '../../assets/Logo.png';

import { Container, Title } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Image source={LogoImg} />

    <Title>Faça seu Logon</Title>

    <Input name="email" icon="mail" placeholder="E-mail" />
    <Input name="password" icon="lock" placeholder="Senha" />
    <Button
      onPress={() => {
        console.log('LP');
      }}
    >
      Entrar
    </Button>
  </Container>
);

export default SignIn;
