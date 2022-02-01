/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
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
        <S.ProductArea>
          {products.map((item: any, index: number) => (
            <S.ProductItem key={index}>
              <S.ProductPhoto
                src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
              />
              <S.ProductInfoArea>
                <S.ProductName>{item.title}</S.ProductName>
              </S.ProductInfoArea>
            </S.ProductItem>
          ))}
        </S.ProductArea>
      </S.CartBody>
    </S.CartArea>
  );
}
