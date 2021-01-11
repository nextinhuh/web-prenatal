import React, { useCallback } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Container, Content, ErrorText } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import imgLogo from '../../assets/logo.png';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

interface UserData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const history = useHistory();
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleLogon = useCallback(
    async (user: UserData) => {
      try {
        await signIn({ email: user.email, password: user.password });

        history.push('/dashboard');
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        });
      }
    },
    [addToast, history, signIn],
  );

  return (
    <Container>
      <Content>
        <h1>Cegonha</h1>
        <img src={imgLogo} alt="Cegonha Logo" />
        <p>Faça seu login</p>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .required('Email é obrigatório')
              .email('Precisa ser um email'),
            password: Yup.string().required('Senha é obrigatória'),
          })}
          onSubmit={values => handleLogon(values)}
        >
          {({ values, handleChange, errors, handleBlur, touched }) => (
            <Form>
              <Input
                onBlur={handleBlur('email')}
                name="email"
                icon={FaUserAlt}
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange('email')}
              />
              {touched.email && errors.email && (
                <ErrorText>{errors.email}</ErrorText>
              )}

              <Input
                onBlur={handleBlur('password')}
                name="password"
                icon={FaLock}
                placeholder="Senha"
                value={values.password}
                onChange={handleChange('password')}
                type="password"
              />
              {touched.password && errors.password && (
                <ErrorText>{errors.password}</ErrorText>
              )}

              <Button type="submit">Entrar</Button>
            </Form>
          )}
        </Formik>

        <Link to="/signup">Cadastre-se</Link>
      </Content>
    </Container>
  );
};

export default SignIn;
