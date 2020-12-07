import React from 'react';
import { FaLaptopMedical, FaFileSignature } from 'react-icons/fa';

import { Container, MenuContent, Content, Menu } from './styles';

import Header from '../../components/Header';
import ItenMenu from '../../components/ItenMenu';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Menu>
          <MenuContent>
            <ItenMenu
              icon={FaLaptopMedical}
              title="Nova consulta"
              backgroudnColor="#859DF2"
              navigate="/new-consult"
            />

            <ItenMenu
              icon={FaFileSignature}
              title="Consultas realizadas"
              backgroudnColor="#F1D99A"
              navigate="/"
            />

            <ItenMenu
              icon={FaFileSignature}
              title="-"
              backgroudnColor="#F1D99A"
              navigate="/"
            />

            <ItenMenu
              icon={FaFileSignature}
              title="-"
              backgroudnColor="#F1D99A"
              navigate="/"
            />
          </MenuContent>
        </Menu>
      </Content>
    </Container>
  );
};

export default Dashboard;
