import styled, { css } from 'styled-components';

interface ContainerProps {
  width: string | undefined;
  height: string | undefined;
}

export const Container = styled.div<ContainerProps>`
  ${props =>
    props.width
      ? css`
          width: ${props.width};
        `
      : css`
          width: 100%;
        `}
  ${props =>
    props.height
      ? css`
          height: ${props.height};
        `
      : css``}
  display: flex;
  align-items: center;
  border: 2px solid #76348d; /* já vai servir para representar um erro quando a informação estiver incorreta */
  background: #eef9f8;
  border-radius: 10px;
  padding: 16px;

  & + div {
    margin-top: 15px;
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

  svg {
    margin-right: 16px;
  }
`;
