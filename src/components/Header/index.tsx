import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

import MarvelLogo from "../../assets/img/logo/marvel-logo.png";
import * as S from "./styled";

export function Header() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <S.Container>
      <S.LeftHeader>
        <Link to="/">
          <S.LogoHeader src={MarvelLogo} />
        </Link>
      </S.LeftHeader>

      <S.RightHeader>
        <S.MenuOptions isMobile={isMobile}>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/comics">
            <li>HQs</li>
          </Link>

          <Link to="/about">
            <li>Sobre</li>
          </Link>
        </S.MenuOptions>

        <S.MobileMenuIcon onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (
            <FontAwesomeIcon icon={faTimes} size="1x" inverse />
          ) : (
            <FontAwesomeIcon icon={faBars} size="1x" inverse />
          )}
        </S.MobileMenuIcon>
      </S.RightHeader>
    </S.Container>
  );
}
