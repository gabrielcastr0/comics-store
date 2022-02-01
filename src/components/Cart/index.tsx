import { faShoppingCart, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";

import * as S from "./styled";

export function Cart() {
  const products = useSelector((state: any) => state.cart.products);

  const [show, setShow] = useState(false);

  const handleCartClick = () => {
    setShow(!show);
  };

  return (
    <S.CartArea>
      <S.CartHeader onClick={handleCartClick}>
        <S.CartIconShop>
          <FontAwesomeIcon icon={faShoppingCart} size="lg" inverse />
        </S.CartIconShop>

        <S.CartText>Meu Carrinho ({products.length})</S.CartText>

        <S.CartIconDown>
          {show && <FontAwesomeIcon icon={faAngleDown} size="lg" inverse />}
          {!show && (
            <FontAwesomeIcon
              icon={faAngleDown}
              size="lg"
              inverse
              rotation={180}
            />
          )}
        </S.CartIconDown>
      </S.CartHeader>

      <S.CartBody show={show}>
        <div style={{ width: 50, height: 300, backgroundColor: "red" }} />
      </S.CartBody>
    </S.CartArea>
  );
}
