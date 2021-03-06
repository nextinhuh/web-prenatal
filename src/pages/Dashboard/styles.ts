import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Menu = styled.div`
  display: flex;
  width: 600px;
  height: 600px;
  background-color: #e5f2eb;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

export const MenuContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 250px 250px;
  grid-gap: 40px;
  margin-top: 50px;
`;
