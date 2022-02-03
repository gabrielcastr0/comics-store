import styled from "styled-components";

type Props = {
  isMobile: boolean;
};

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  height: 100px;
  padding: 0 35px 0 35px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const LogoHeader = styled.img`
  height: 50px;
  width: auto;
`;

export const LeftHeader = styled.div``;

export const RightHeader = styled.div``;

export const MenuOptions = styled.ul<Props>`
  list-style-type: none;
  display: flex;
  gap: 15px;

  @media screen and (max-width: 768px) {
    position: absolute;
    display: ${(props) => (props.isMobile ? "block" : "none")};
    list-style: none;
    background: rgba(0, 0, 0, 0.7);
    left: 0;
    width: 100%;
    top: 100px;
    transition: all 0.5s ease-out;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  li {
    font-size: 25px;
    color: #fff;
    padding: 10px;
    letter-spacing: 1px;
    cursor: pointer;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
      margin-top: 5px;
      margin-bottom: 5px;
      left: 0;
      transition: all 0.5 ease;
      position: relative;
      text-align: center;
    }

    &:hover {
      background: #e23636;
      color: #fff;
    }
  }
`;

export const MobileMenuIcon = styled.button`
  display: none;
  background: transparent;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    font-size: 30px;
    border: none;
    outline: none;
    top: 25px;
    right: 25px;
  }
`;
