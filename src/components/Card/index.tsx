import * as S from "./styled";

type Props = {
  image: string;
  subtitle: string;
  title: string;
  clickFn: () => void;
};

export function Card({ image, subtitle, title, clickFn }: Props) {
  return (
    <S.Container onClick={clickFn}>
      <S.ImageCard src={image} alt={subtitle} />
      <S.TitleCardArea>
        <S.TitleCard>{title}</S.TitleCard>
      </S.TitleCardArea>
    </S.Container>
  );
}
