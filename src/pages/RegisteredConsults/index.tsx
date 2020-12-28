import React, { useCallback, useEffect, useState } from 'react';
import { format } from 'date-fns';
import firebase from 'firebase';
import 'firebase/firestore';
import { FaLaptopMedical, FaFileSignature } from 'react-icons/fa';

import {
  Container,
  Content,
  ListConsultContainer,
  ItemList,
  Patient,
} from './styles';

import Header from '../../components/Header';

type RegisteredConsults = Array<{
  id: string;
  name: string;
}>;

const RegisteredConsults: React.FC = () => {
  const firebaseFirestore = firebase.firestore();
  const [listConsults, setListConsults] = useState<RegisteredConsults>();

  useEffect(() => {
    async function loadConsultList() {
      await firebaseFirestore
        .collection('users')
        .doc(firebase.auth().currentUser?.uid)
        .get()
        .then(result => {
          if (result.exists) {
            setListConsults(result.data()?.registeredConsults);
          }
        });
    }
    loadConsultList();
  }, [firebaseFirestore]);

  const getFormatedDate = useCallback((date: number) => {
    const getDate = new Date(date);
    const formatedDate = format(getDate, 'P');
    return formatedDate;
  }, []);

  return (
    <Container>
      <Header navBack />

      <Content>
        <ListConsultContainer>
          {listConsults?.map(consult => {
            return (
              <>
                <ItemList>
                  <FaLaptopMedical size={35} color="#503D77" />

                  <Patient>
                    <p>
                      Nome do paciente:
                      {consult.name}
                    </p>
                    <p>
                      Data da consulta:
                      {getFormatedDate(Number(consult.id))}
                    </p>
                  </Patient>
                </ItemList>
              </>
            );
          })}
        </ListConsultContainer>
      </Content>
    </Container>
  );
};

export default RegisteredConsults;
