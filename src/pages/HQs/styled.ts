import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const BodyArea = styled.div`
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 320px){
    padding: 0;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
  text-align: center;

  h1 {
    color: #000;
    font-weight: normal;
    text-transform: uppercase;
  }
`;

export const CardArea = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1100px;
  gap: 15px;
  flex-wrap: wrap;
  margin: 25px 0 150px 0;

  @media screen and (max-width: 768px){
    margin-bottom: 230px;
  }
`;

export const LoadingArea = styled.div`
  position: absolute;
  top: 100px;
  bottom: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingIcon = styled.div`
  display: flex;
  width: auto;
  height: 50px;
  padding: 10px;
  display: flex;
  background: #fff;
  border-radius: 70%;
  justify-content: center;
  align-items: center;
  animation: spin infinite 5s linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
