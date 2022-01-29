import * as S from './styled';
import {Link} from 'react-router-dom';

import MarvelLogo from '../../assets/img/logo/marvel-logo.png';

export const Header = () => {
  return(
    <S.Container>
      <S.LeftHeader>
        <Link to="/">
          <S.LogoHeader src={MarvelLogo} />
        </Link>
      </S.LeftHeader>

      <S.RightHeader>
        <S.MenuOptions>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/hqs">
            <li>HQ's</li>
          </Link>

          <Link to="/about">
            <li>Sobre</li>
          </Link>
        </S.MenuOptions>
      </S.RightHeader>
    </S.Container>
  )
}