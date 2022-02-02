import { faSpinner, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import api from "../../services/api";
import * as S from "./styled";

export function IndividualHQ() {
  const [loading, setLoading] = useState(false);
  const [comic, setComic] = useState<any>({});
  const [qtd, setQtd] = useState(1);
  const [price, setPrice] = useState<any>();
  const [fixPrice, setFixPrice] = useState<any>();
  const { id } = useParams();
  const dispatch = useDispatch();

  const loadComic = async (id: string | undefined) => {
    setLoading(true);

    console.log(`- ${id}`);
    const comicRes = await api.getComic(id);
    setComic(comicRes);
    setFixPrice(comicRes.prices[0].price);
    setPrice(comicRes.prices[0].price);
    console.log(price);
    console.log(comicRes);

    setLoading(false);
  };

  useEffect(() => {
    loadComic(id);
  }, []);

  const handleAddToCart = () => {
    if (price > 0) {
      dispatch({
        type: "ADD_PRODUCT",
        payload: { comic, qtd },
      });
    } else {
      alert("Indisponível no momento!");
    }
  };

  const handleQtsMinusClick = () => {
    if (qtd > 1) {
      setQtd(qtd - 1);
    }
  };

  const handleQtsPlusClick = () => {
    setQtd(qtd + 1);
    setPrice(price + fixPrice);
    console.log(price);
  };

  return (
    <S.Container>
      {loading && (
        <S.LoadingArea>
          <S.LoadingIcon>
            <FontAwesomeIcon icon={faSpinner} size="3x" className="spinner" />
          </S.LoadingIcon>
        </S.LoadingArea>
      )}

      {comic && (
        <>
          <S.LeftImgArea>
            <S.LeftImg
              src={
                comic
                  ? `${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`
                  : "https://i.pinimg.com/originals/24/92/00/249200c431fe811110761709b303fcaf.jpg"
              }
              alt=""
            />
          </S.LeftImgArea>

          <S.RightArea>
            <S.TitleComicArea>
              <S.TitleComic>{comic.title}</S.TitleComic>
            </S.TitleComicArea>

            <S.DescriptionArea>
              <S.DescriptionText>
                {comic?.textObjects?.length > 0
                  ? comic.textObjects[0].text
                  : "Sem descrição"}
              </S.DescriptionText>

              <S.PriceText>
                Preço:
                <span>
                  {price > 0
                    ? `R$ ${price.toFixed(2)}`
                    : "Indisponível no momento!"}
                </span>
              </S.PriceText>
            </S.DescriptionArea>

            <S.ButtonsArea>
              <S.ButtonAddToCart type="button" price={price}>
                <S.IconsQtdMinusArea>
                  <FontAwesomeIcon
                    icon={faMinus}
                    size="1x"
                    onClick={handleQtsMinusClick}
                  />
                </S.IconsQtdMinusArea>

                <S.QtdText>Quantidade: {qtd}</S.QtdText>

                <S.IconsQtdPlusArea>
                  <FontAwesomeIcon
                    icon={faPlus}
                    size="1x"
                    onClick={handleQtsPlusClick}
                  />
                </S.IconsQtdPlusArea>
              </S.ButtonAddToCart>

              <S.ButtonAddToCart
                type="button"
                onClick={handleAddToCart}
                price={price}
              >
                Adicionar ao Carrinho
              </S.ButtonAddToCart>
            </S.ButtonsArea>
          </S.RightArea>
        </>
      )}
    </S.Container>
  );
}
