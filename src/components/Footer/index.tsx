import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as S from "./styled";

export function Footer() {
  return (
    <S.Container>
      <S.CreditsText>
        Criado com{" "}
        <FontAwesomeIcon
          icon={faHeart}
          size="1x"
          className="spinner"
          color="#e23636"
        />{" "}
        por Gabriel Castro!
      </S.CreditsText>
    </S.Container>
  );
}
