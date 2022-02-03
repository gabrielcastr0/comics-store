import styled from "styled-components";

type Props = {
  price: number;
};

export const Container = styled.div`
  display: flex;
  padding: 20px;
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftImgArea = styled.div`
  display: flex;
  height: auto;
  width: 550px;
  border: 0;

  @media screen and (max-width: 425px) {
    width: 100%;
    justify-content: center;
  }
`;

export const LeftImg = styled.img`
  width: 550px;
  height: 720px;

  @media screen and (max-width: 425px) {
    width: 350px;
    height: 520px;
  }

  @media screen and (max-width: 320px) {
    width: 250px;
    height: 420px;
  }
`;

export const RightArea = styled.div`
  flex: 1;
  height: 95px;
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 20px 0 0 0;
  }
`;

export const TitleComicArea = styled.div`
  background: #fff;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #fff;
  border-radius: 5px;
`;

export const TitleComic = styled.h1`
  color: #000;
  font-weight: normal;
  padding: 0 10px 0 10px;
  font-size: 25px;
`;

export const DescriptionArea = styled.div`
  flex: 1;
  height: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.7);
  gap: 15px;
`;

export const DescriptionText = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

  font-size: 18px;
  font-family: "Roboto", sans-serif;
  color: #fff;
  text-shadow: 2px 2px 10px #000;
  overflow: auto;
`;

export const PriceText = styled.p`
  display: flex;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  color: #fff;
  text-shadow: 2px 2px 10px #000;
  gap: 5px;

  span {
    font-family: "Roboto", sans-serif;
    color: #fff;
    font-weight: bold;
  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: #fff;
  height: 100px;
  border-radius: 5px;
  margin-bottom: 35px;

  @media screen and (max-width: 375px) {
    flex-direction: column;
    gap: 10px;
    padding: 25px 0 25px 0px;
  }
`;

export const ButtonAddToCart = styled.button<Props>`
  display: flex;
  align-items: center;
  border: 0;
  background: ${(props) => (props.price > 0 ? "#00b400" : "gray")};
  box-shadow: 4px 5px 0 #000;
  color: #fff;
  font-size: 22px;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 5px;
  gap: 10px;
  cursor: pointer;
`;

export const IconsQtdMinusArea = styled.div`
  display: flex;
`;

export const QtdText = styled.p``;

export const IconsQtdPlusArea = styled.div`
  display: flex;
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
