import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px;
`;

export const LeftImgArea = styled.div`
  height: 705px;
  width: 550px;
  border: 0;
`;

export const LeftImg = styled.img`
  width: 550px;
  height: 705px;
`;

export const RightArea = styled.div`
  flex: 1;
  height: 80px;
  margin-left: 10px;
`;

export const TitleComicArea = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-bottom: 2px solid #fff;
  border-radius: 5px;
`;

export const TitleComic = styled.h1`
  color: #000;
  font-weight: normal;
`;

export const DescriptionArea = styled.div`
  /* background: green; */
  flex: 1;
  height: 500px;
  padding: 10px;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const DescriptionText = styled.p`
  font-size: 20px;
  letter-spacing: 0.5px;
  color: #fff;
`;

export const ButtonsArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: #fff;
  height: 100px;
  border-radius: 5px;
`;

// export const ButtonBack = styled.button`
//   border: 0;
//   background: red;
//   box-shadow: 4px 5px 0 #000;
//   color: #fff;
//   font-size: 22px;
//   padding: 10px 20px;
//   margin-left: 10px;
//   border-radius: 5px;
// `;

export const ButtonAddToCart = styled.button`
  border: 0;
  background: green;
  box-shadow: 4px 5px 0 #000;
  color: #fff;
  font-size: 22px;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 5px;
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
