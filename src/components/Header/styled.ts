import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  height: 100px;
  padding: 0 35px 0 35px;
`;

export const LogoHeader = styled.img`
  height: 50px;
  width: auto;
`;

export const LeftHeader = styled.div``;

export const RightHeader = styled.div``;

export const MenuOptions = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 15px;

  a {
    text-decoration: none;
  }

  li {
    font-size: 25px;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    letter-spacing: 1px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
      background: #e23636;
      color: #fff;
    }
  }
`;
