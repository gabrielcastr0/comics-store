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
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
`;

export const CardArea = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1100px;
  gap: 15px;
  flex-wrap: wrap;
  margin: 35px 0 150px 0;
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
  height: 300px;
  display: flex;
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
