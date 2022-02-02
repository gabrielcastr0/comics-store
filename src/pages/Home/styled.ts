import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 180px);
  justify-content: center;
  background-size: cover;
  align-items: center;
`;

export const BodyArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 30px;
  border-radius: 5px;
`;

export const TitleBody = styled.h1`
  font-weight: normal;
  text-transform: uppercase;
  font-size: 80px;
  color: #fff;

  span {
    border-top: 10px solid #fff;
    border-bottom: 10px solid #fff;
  }
`;

export const DescBody = styled.h2`
  margin-top: 35px;
  color: #fff;
  font-weight: normal;
  letter-spacing: 1px;
`;
