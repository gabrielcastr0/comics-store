import styled from "styled-components";

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

  button {
    height: 40px;
    width: 40px;
    cursor: pointer;
    background: #fff;
    border: 0;
    border-radius: 5px;
    font-size: 18px;
    position: relative;
    right: 20px;

    &:hover {
      filter: opacity(0.7);
    }
  }
`;
