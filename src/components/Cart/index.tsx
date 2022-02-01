import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as S from "./styled";

export function Cart() {
  return (
    <S.CartArea>
      <S.CartHeader>
        <S.CartText>Meu Carrinho (x)</S.CartText>

        <S.CartIcon>
          <FontAwesomeIcon icon={faShoppingCart} size="1x" inverse />
        </S.CartIcon>
      </S.CartHeader>

      <S.CartBody />
    </S.CartArea>
  );
}
