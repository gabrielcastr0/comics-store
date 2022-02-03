import styled from "styled-components";

type Props = {
  show: boolean;
};

export const CartArea = styled.div`
  background: rgba(226, 54, 54, 1);
  position: fixed;
  bottom: 0;
  right: 30px;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 50px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 10px 10px 0 0;
  gap: 15px;
`;

export const CartIconShop = styled.div``;

export const CartIconDown = styled.div``;

export const CartText = styled.p`
  color: #fff;
  font-size: 20px;
`;

export const CartBody = styled.div<Props>`
  display: ${(props) => (props.show ? "block" : "none")};
  max-height: 750px;
  overflow: auto;
`;

export const ProductArea = styled.div``;

export const ProductItem = styled.div`
  display: flex;
  margin: 10px;
`;

export const ProductPhoto = styled.img`
  width: 64px;
  height: auto;
`;

export const ProductInfoArea = styled.div`
  flex: 1;
  margin-left: 10px;
`;

export const ProductName = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

  font-family: "Roboto", sans-serif;
  font-size: 15px;
  letter-spacing: 0.5px;
  color: #fff;
  font-weight: bold;
`;

export const ProductPrice = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

  font-family: "Roboto", sans-serif;
  font-size: 15px;
  color: #fff;
  margin-top: 5px;
`;

export const ProductQuantityArea = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ProductQtText = styled.p`
  font-size: 18px;
  margin: 0 10px;
  color: #fff;
`;

export const ButtonFinishArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* background: blue; */
  padding: 0 10px 10px 10px;
`;

export const ButtonFinish = styled.button`
  background: green;
  height: 35px;
  color: #fff;
  cursor: pointer;
  border: 0;
`;
