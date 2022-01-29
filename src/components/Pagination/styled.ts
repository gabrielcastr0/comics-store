import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: calc(100% - 170px);
  height: 100px;
  bottom: 80px;
  position: absolute;
`;

export const ListPagination = styled.ul`
  display: flex;
  list-style-type: none;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 5px;

  button {
    height: 40px;
    width: 40px;
    cursor: pointer;
    background: #fff;
    border: 0;
    border-radius: 5px;

    &:hover {
      filter: opacity(0.9);
    }
  }
`;
