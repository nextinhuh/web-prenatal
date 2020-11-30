import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
  backgroundColor: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;

  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}

  padding: 20px;
  border-radius: 30px;

  p {
    text-align: center;
    margin-top: 20px;
    font-size: 25px;
    color: #503d77;
  }
`;

export const Navigate = styled(Link)`
  text-decoration: none;
`;
