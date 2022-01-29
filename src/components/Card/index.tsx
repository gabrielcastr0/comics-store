import * as S from './styled';

type Props = {
  image: string;
  subtitle: string;
  title: string;
}

export const Card = ({image, subtitle, title}:Props) => {
  return(
    <S.Container>
      <S.ImageCard src={image} alt={subtitle}/>
      <S.TitleCardArea>
        <S.TitleCard>{title}</S.TitleCard>
      </S.TitleCardArea>
    </S.Container>
  )
}