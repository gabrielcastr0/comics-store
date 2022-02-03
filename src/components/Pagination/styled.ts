import styled from "styled-components";

type Props = {
  activeButton?: boolean;
}

export const Container = styled.div`
  display: flex;
  width: calc(100% - 185px);
  height: 100px;
  bottom: 80px;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const ListPagination = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  gap: 5px;

  @media screen and (max-width: 768px){
    margin-bottom: 135px;
  }

  @media screen and (max-width: 320px){
    gap: 0px;
  }
`;

export const LargeButton = styled.button`
  height: 40px;
    width: 80px;
    cursor: pointer;
    background: #fff;
    border: 2px solid #000;
    border-radius: 5px;
    font-size: 18px;
    position: relative;
    right: 20px;
    color: #000;
`;

export const Button = styled.button<Props>`
    height: 40px;
    width: 40px;
    cursor: pointer;
    background: #fff;
    border: 2px solid ${(props) => (props.activeButton ? 'red' : '#000')};
    border-radius: 5px;
    font-size: 18px;
    position: relative;
    right: 20px;
    color: ${(props) => (props.activeButton ? 'red' : '#000')};
`;
