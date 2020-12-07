import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  ul {
    font-size: 30px;
    font-family: 'Sofia', cursive;
    color: #503d77;
    background-color: #e5f2eb;
    width: 100%;
    margin-bottom: -1px;
  }

  li {
    font-size: 30px;
    font-family: 'Sofia', cursive;
    color: #503d77;
    background-color: #e5f2eb;
    margin-left: 100px;
  }
`;

export const Menu = styled.div`
  border-top: 1px solid #503d77;
  display: flex;
  width: 600px;
  background-color: #e5f2eb;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 30px 30px;
  flex-direction: column;
  margin-bottom: 25px;

  form {
    margin-top: 30px;
    width: 350px;
  }

  button {
    margin-top: 25px;
    margin-bottom: 25px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #76348d;
    &::placeholder {
      color: #76348d;
    }
  }
`;

export const FieldSet = styled.fieldset`
  margin-top: 20px;
  border: 0;
  padding: 0 30px;

  h1 {
    font-size: 35px;
    text-align: center;
    margin-bottom: 30px;
    border-bottom: 1px solid;
  }

  button {
    margin-left: 20px;
  }
`;

export const SecondButton = styled.div`
  justify-content: space-between;
  width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 100px;

  button {
    background: transparent;
    border: 0;
    font-size: 24px;
    font-family: 'Sofia', cursive;
    color: #a884f4;
    margin-left: -80px;
  }
`;

export const TextArea = styled.textarea`
  display: flex;
  align-items: center;
  border: 2px solid #76348d; /* já vai servir para representar um erro quando a informação estiver incorreta */
  background: #eef9f8;
  border-radius: 10px;
  padding: 16px;
  margin-top: 15px;
  margin-bottom: 25px;
  width: 100%;
  height: 100px;

  flex: 1;
  color: #76348d;
  &::placeholder {
    color: #76348d;
  }
`;

export const MenuContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 250px 250px;
  grid-gap: 40px;
  margin-top: 50px;
`;

export const ErrorText = styled.p`
  font-size: 20px;
  text-align: right;
  color: red;
  margin: 5px 0;
`;

export const InputText = styled.input`
  background: papayawhip;
`;
