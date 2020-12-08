import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 180px;
  align-items: center;
  justify-content: center;
  background-color: #e5f2eb;
  padding: 32px 0;

  svg {
    margin-left: 20px;
  }
`;

export const LogoContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: -350px;

  p {
    font-size: 30px;
  }

  img {
    width: 140px;
    height: 85px;
  }
`;

export const UserAvatar = styled.div`
  display: flex;
  width: 330px;
  height: 85px;
  align-items: center;
  justify-content: center;
  margin-left: 350px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  p {
    margin-left: 20px;
    font-size: 28px;
  }
`;
