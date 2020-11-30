import React from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';

import { Container, Content } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import imgLogo from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Cegonha</h1>
        <img src={imgLogo} alt="Cegonha Logo" />
        <p>Faça seu login</p>

        <Input icon={FaUserAlt} placeholder="E-mail" />
        <Input icon={FaLock} placeholder="Senha" type="password" />

        <Button>Entrar</Button>

        <Link to="/signup">Cadastre-se</Link>
      </Content>
    </Container>
  );
};

export default SignIn;
