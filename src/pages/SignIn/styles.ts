import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;

  h1 {
    margin-bottom: 15%;
  }

  p {
    font-size: 30px;
    margin: 5% 0 10% 0;
  }

  form {
    align-items: center;
    justify-content: center;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  button {
    margin-top: 35px;
  }

  a {
    margin-top: 15%;
    color: #76348d;
  }
`;

export const ErrorText = styled.p`
  font-size: 23px !important;
  color: red;
  margin: 5px 0 !important;
`;

export const InputText = styled.input`
  background: papayawhip;
`;
