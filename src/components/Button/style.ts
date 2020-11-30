import styled from 'styled-components';

export const Container = styled.button`
  background: #503d77;
  height: 45px;
  border-radius: 10px;
  border: 0; /* já vai servir para representar um erro quando a informação estiver incorreta */
  padding: 0 16px;
  color: #fff;
  width: 250px;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
`;
