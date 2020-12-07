import React, { useCallback } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Container, Content, ErrorText } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import imgLogo from '../../assets/logo.png';

interface UserData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dbFirestore = firebase.firestore();
  const history = useHistory();

  const handleLogon = useCallback(
    (user: UserData) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(async logedUser => {
          if (logedUser.user?.displayName === null) {
            let userName: any;
            await dbFirestore
              .collection('users')
              .doc(logedUser.user?.uid)
              .get()
              .then(result => {
                if (result.exists) {
                  userName = result.data();
                }
              });
            await firebase.auth().currentUser?.updateProfile({
              displayName: userName.name,
            });
            history.push('/new-consult');
          }
          history.push('/new-consult');
        })
        .catch(err => {});
    },
    [dbFirestore, history],
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
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            isSubmitting,
            handleBlur,
            touched,
          }) => (
            <Form>
              <Input
                onBlur={handleBlur('email')}
                name="email"
                icon={FaUserAlt}
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange('email')}
              />
              {touched.email && <ErrorText>{errors.email}</ErrorText>}

              <Input
                onBlur={handleBlur('password')}
                name="password"
                icon={FaLock}
                placeholder="Senha"
                value={values.password}
                onChange={handleChange('password')}
                type="password"
              />
              {touched.password && <ErrorText>{errors.password}</ErrorText>}

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
