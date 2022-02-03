import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  height: 80px;
  width: 100%;
  left: 0;
  bottom: 0;
  position: absolute;

  @media screen and (max-width: 768px) {
    height: 140px;
  }
`;

export const CreditsText = styled.p`
  color: #fff;
  background: transparent;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 23px;
  text-align: center;

  @media screen and (max-width: 320px){
    margin-bottom: 30px;
  }
`;
