/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
import {
  faShoppingCart,
  faAngleDown,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as S from "./styled";

export function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.cart.products);

  const [show, setShow] = useState(false);

  const handleCartClick = () => {
    setShow(!show);
  };

  const handleProductChange = (key: any, type: any) => {
    dispatch({
      type: "CHANGE_PRODUCT",
      payload: {
        key,
        type,
      },
    });
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
          {products.map((item: any, index: any) => (
            <S.ProductItem key={index}>
              <S.ProductPhoto
                src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
              />
              <S.ProductInfoArea>
                <S.ProductName>{item.title}</S.ProductName>
                <S.ProductPrice>
                  R$ {item.prices[0].price} (unidade)
                </S.ProductPrice>
              </S.ProductInfoArea>
              <S.ProductQuantityArea>
                <FontAwesomeIcon
                  icon={faMinus}
                  size="1x"
                  inverse
                  onClick={() => handleProductChange(index, "-")}
                />
                <S.ProductQtText>{item.qtd}</S.ProductQtText>
                <FontAwesomeIcon
                  icon={faPlus}
                  size="1x"
                  inverse
                  onClick={() => handleProductChange(index, "+")}
                />
              </S.ProductQuantityArea>
            </S.ProductItem>
          ))}
        </S.ProductArea>
      </S.CartBody>
    </S.CartArea>
  );
}
