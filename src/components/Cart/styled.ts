import styled from "styled-components";

type Props = {
  show: boolean;
};

export const CartArea = styled.div`
  background: red;
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
  width: 250px;
  height: 40px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 10px 10px 0 0;
`;

export const CartIconShop = styled.div``;

export const CartIconDown = styled.div``;

export const CartText = styled.p`
  color: #fff;
  font-size: 20px;
`;

export const CartBody = styled.div<Props>`
  display: ${(props) => (props.show ? "block" : "none")};
`;
