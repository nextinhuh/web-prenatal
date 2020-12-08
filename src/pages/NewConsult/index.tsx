import React, { useCallback, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import * as Yup from 'yup';
import firebase from 'firebase';
import 'firebase/firestore';

import {
  Container,
  Content,
  Menu,
  SecondButton,
  TextArea,
  FieldSet,
  ErrorText,
} from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import InputMasked from '../../components/InputMasked';
import { useToast } from '../../hooks/toast';

interface MedicalRecords {
  abdominalCircumference: string;
  bloodPressure: string;
  heartRate: string;
  heigh: string;
  weight: string;
}

type Prescriptions = Array<{
  title: string;
  description: string;
}>;

const NewConsult: React.FC = () => {
  const [prescriptions, setPrescriptions] = useState<Prescriptions>([
    { title: '', description: '' },
  ]);
  const [medicalRecords, setMedicalRecords] = useState<MedicalRecords>();
  const [tabIndex, setTabIndex] = useState(0);
  const firebaseAuth = firebase.auth().currentUser;
  const firebaseFirestore = firebase.firestore();
  const { addToast } = useToast();
  const history = useHistory();

  const handleRemovePrescription = useCallback(() => {
    prescriptions.pop();
    setPrescriptions([...prescriptions]);
  }, [prescriptions]);

  const handleAddNewPrescription = useCallback(() => {
    setPrescriptions([...prescriptions, { title: '', description: '' }]);
  }, [prescriptions]);

  const handleMoveToPrescriptionTab = useCallback(
    async (formValues: MedicalRecords) => {
      const record = {
        bloodPressure: formValues.bloodPressure,
        heartRate: formValues.heartRate,
        weight: formValues.weight,
        heigh: formValues.heigh,
        abdominalCircumference: formValues.abdominalCircumference,
      };

      setMedicalRecords(record);
      setTabIndex(1);
    },
    [],
  );

  const handleConsultSubmit = useCallback(async () => {
    const time = new Date().getTime();
    await firebaseFirestore
      .collection('users')
      .doc(firebaseAuth?.uid)
      .collection('consults')
      .doc(time.toString())
      .set({
        medicalRecords,
        prescriptions,
      })
      .then(() => {
        history.push('/dashboard');
        addToast({
          type: 'success',
          title: 'Consulta cadastrada!',
          description:
            'Sua consulta foi cadastrada com sucesso, e já podera ser vista na lista.',
        });
      });
  }, [
    prescriptions,
    medicalRecords,
    firebaseAuth,
    firebaseFirestore,
    addToast,
    history,
  ]);

  return (
    <Container>
      <Header navBack />
      <Content>
        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <TabList>
            <Tab>Prontuário</Tab>
            <Tab>Prescrição</Tab>
          </TabList>

          <TabPanel>
            <Menu>
              <Formik
                initialValues={{
                  abdominalCircumference: '',
                  bloodPressure: '',
                  heartRate: '',
                  heigh: '',
                  weight: '',
                }}
                validationSchema={Yup.object({
                  abdominalCircumference: Yup.string().required(
                    'Este campo deve ser preenchido!',
                  ),
                  bloodPressure: Yup.string().required(
                    'Este campo deve ser preenchido!',
                  ),
                  heartRate: Yup.string().required(
                    'Este campo deve ser preenchido!',
                  ),
                  heigh: Yup.string().required(
                    'Este campo deve ser preenchido!',
                  ),
                  weight: Yup.string().required(
                    'Este campo deve ser preenchido!',
                  ),
                })}
                onSubmit={values => handleMoveToPrescriptionTab(values)}
              >
                {({ values, errors, handleBlur, touched, setFieldValue }) => (
                  <Form>
                    <FieldSet>
                      <h1>Prontuário</h1>

                      <InputMasked
                        mask={[/[0-9]/, /\d/, /\d/, ' Cm']}
                        value={values.abdominalCircumference}
                        onChange={e =>
                          setFieldValue(
                            'abdominalCircumference',
                            e.target.value,
                            // eslint-disable-next-line prettier/prettier
                          )}
                        onBlur={handleBlur('abdominalCircumference')}
                        name="abdominalCircumference"
                        id="abdominalCircumference"
                        placeholder="Circunferência abdominal"
                      />

                      {touched.abdominalCircumference &&
                        errors.abdominalCircumference && (
                          <ErrorText>{errors.abdominalCircumference}</ErrorText>
                        )}

                      <InputMasked
                        mask={[
                          /[0-9]/,
                          /\d/,
                          /\d/,
                          ' ',
                          'x',
                          ' ',
                          /\d/,
                          /\d/,
                          ' mmHg',
                        ]}
                        value={values.bloodPressure}
                        onChange={e =>
                          setFieldValue(
                            'bloodPressure',
                            e.target.value,
                            // eslint-disable-next-line prettier/prettier
                          )}
                        onBlur={handleBlur('bloodPressure')}
                        name="bloodPressure"
                        placeholder="Pressão arterial"
                      />
                      {touched.bloodPressure && errors.bloodPressure && (
                        <ErrorText>{errors.bloodPressure}</ErrorText>
                      )}
                      <InputMasked
                        mask={[/[0-9]/, /\d/, /\d/, ' ipm']}
                        value={values.heartRate}
                        onChange={e =>
                          setFieldValue(
                            'heartRate',
                            e.target.value,
                            // eslint-disable-next-line prettier/prettier
                          )}
                        onBlur={handleBlur('heartRate')}
                        name="heartRate"
                        placeholder="Frequência cardíaca"
                      />
                      {touched.heartRate && errors.heartRate && (
                        <ErrorText>{errors.heartRate}</ErrorText>
                      )}
                      <InputMasked
                        mask={[/[0-9]/, ',', ' ', /\d/, /\d/, ' Mts']}
                        value={values.heigh}
                        onChange={e =>
                          setFieldValue(
                            'heigh',
                            e.target.value,
                            // eslint-disable-next-line prettier/prettier
                          )}
                        onBlur={handleBlur('heigh')}
                        name="heigh"
                        placeholder="Altura"
                      />
                      {touched.heigh && errors.heigh && (
                        <ErrorText>{errors.heigh}</ErrorText>
                      )}
                      <InputMasked
                        mask={[
                          /[0-9]/,
                          /[0-9]/,
                          /[0-9]/,
                          ',',
                          ' ',
                          /\d/,
                          /\d/,
                          /\d/,
                          ' Kg',
                        ]}
                        value={values.weight}
                        onChange={e =>
                          setFieldValue(
                            'weight',
                            e.target.value,
                            // eslint-disable-next-line prettier/prettier
                          )}
                        onBlur={handleBlur('weight')}
                        name="weight"
                        placeholder="Peso"
                      />
                      {touched.weight && errors.weight && (
                        <ErrorText>{errors.weight}</ErrorText>
                      )}

                      <Button type="submit">Avançar</Button>
                    </FieldSet>
                  </Form>
                )}
              </Formik>
            </Menu>
          </TabPanel>
          <TabPanel>
            <Menu>
              <FieldSet>
                <h1>Prescrição</h1>

                <SecondButton>
                  <button type="button" onClick={handleAddNewPrescription}>
                    Novo
                    <FaPlus size={15} />
                  </button>

                  <button type="button" onClick={handleRemovePrescription}>
                    Retirar
                    <FaPlus size={15} />
                  </button>
                </SecondButton>

                {prescriptions.map((prescription, index) => {
                  return (
                    <div key={index.toString()}>
                      <Input
                        placeholder="Título"
                        width="180px"
                        onChange={e => {
                          prescription.title = e.target.value;
                        }}
                      />

                      <TextArea
                        placeholder="Descrição..."
                        onChange={e => {
                          prescription.description = e.target.value;
                        }}
                      />
                    </div>
                  );
                })}

                <Button onClick={handleConsultSubmit}>
                  Registrar consulta
                </Button>
              </FieldSet>
            </Menu>
          </TabPanel>
        </Tabs>
      </Content>
    </Container>
  );
};

export default NewConsult;
