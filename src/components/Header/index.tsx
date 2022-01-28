import * as S from './styled';

import MarvelLogo from '../../assets/img/logo/marvel-logo.png';

export const Header = () => {
  return(
    <S.Container>
      <S.LeftHeader>
        <S.LogoHeader src={MarvelLogo} />
      </S.LeftHeader>

      <S.RightHeader>
        <S.MenuOptions>
          <li>Sobre</li>
        </S.MenuOptions>
      </S.RightHeader>
    </S.Container>
  )
}