import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
  color: #fff;
  height: 400px;
  width: 260px;
  background-color: #004433;
  box-shadow: 0 26px 24px -16px rgb(0 0 0 / 40%);
  transition: all 0.17s ease-in-out;
  border-radius: 10px;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const ImageCard = styled.img`
  height: 100%;
  width: 100%;
  background: #000;
  border-radius: 10px;
`;

export const TitleCardArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00000099;
  position: absolute;
  width: 260px;
  height: 80px;
  border-radius: 0 0 10px 10px;
`;

export const TitleCard = styled.p`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  padding: 0 15px 0 15px;
`;
