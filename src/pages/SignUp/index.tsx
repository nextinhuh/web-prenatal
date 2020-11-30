import React from 'react';
import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { Container, Content } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import imgLogo from '../../assets/logo.png';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Cegonha</h1>
        <img src={imgLogo} alt="Cegonha Logo" />
        <p>Faça seu cadastro</p>

        <Input icon={FiUser} placeholder="Nome" />
        <Input icon={FiMail} placeholder="E-mail" />
        <Input icon={FiLock} placeholder="Senha" type="password" />

        <Button>Cadastrar</Button>

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
