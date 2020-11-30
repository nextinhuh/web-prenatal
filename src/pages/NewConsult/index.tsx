import React, { useCallback, useState } from 'react';
import { FaLaptopMedical, FaFileSignature, FaPlus } from 'react-icons/fa';
import { Formik } from 'formik';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import {
  Container,
  MenuContent,
  Content,
  Menu,
  SecondButton,
  TextArea,
  FieldSet,
} from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

const NewConsult: React.FC = () => {
  const [prescription, setPrescription] = useState([{ test: 0 }]);
  const [value, setValue] = React.useState(2);
  const [tabIndex, setTabIndex] = useState(0);

  const handleRemovePrescription = useCallback(() => {
    const removeIten = prescription.pop();
    setPrescription([...prescription]);
  }, [prescription]);

  const handleAddNewPrescription = useCallback(() => {
    setPrescription([...prescription, { test: 1 }]);
  }, [prescription]);

  return (
    <Container>
      <Header />
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
                  firstName: '',
                }}
                onSubmit={() => {}}
              >
                <form action="#">
                  <FieldSet>
                    <h1>Prontuário</h1>

                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Circunferência abdominal"
                    />
                    <Input type="text" placeholder="Pressão sanguínea" />
                    <Input type="text" placeholder="Frequência cardíaca" />
                    <Input type="text" placeholder="Altura" />
                    <Input type="text" placeholder="Peso" />

                    <Button type="submit" onClick={() => setTabIndex(1)}>
                      Avançar
                    </Button>
                  </FieldSet>
                </form>
              </Formik>
            </Menu>
          </TabPanel>
          <TabPanel>
            <Menu>
              <Formik
                initialValues={{
                  firstName: '',
                }}
                onSubmit={() => {}}
              >
                <form action="#">
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

                    {prescription.map(() => {
                      return (
                        <>
                          <Input
                            type="text"
                            placeholder="Título"
                            width="180px"
                          />

                          <TextArea placeholder="Descrição..." />
                        </>
                      );
                    })}

                    <Button type="button">Registrar consulta</Button>
                  </FieldSet>
                </form>
              </Formik>
            </Menu>
          </TabPanel>
        </Tabs>
      </Content>
    </Container>
  );
};

export default NewConsult;
