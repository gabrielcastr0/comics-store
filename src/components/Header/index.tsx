import { Link } from "react-router-dom";

import MarvelLogo from "../../assets/img/logo/marvel-logo.png";
import * as S from "./styled";

export function Header() {
  return (
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
            <li>HQs</li>
          </Link>

          <Link to="/about">
            <li>Sobre</li>
          </Link>
        </S.MenuOptions>
      </S.RightHeader>
    </S.Container>
  );
}
