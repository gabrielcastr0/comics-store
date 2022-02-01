import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";
import * as S from "./styled";

export function IndividualHQ() {
  const [loading, setLoading] = useState(false);
  const [comic, setComic] = useState<any>({});
  const { id } = useParams();

  const loadComic = async (id: string | undefined) => {
    setLoading(true);

    console.log(`- ${id}`);
    const c = await api.getComic(id);
    setComic(c);
    console.log(c);

    setLoading(false);
  };

  useEffect(() => {
    loadComic(id);
  }, []);

  return (
    <S.Container>
      {loading && (
        <S.LoadingArea>
          <S.LoadingIcon>
            <FontAwesomeIcon
              icon={faSpinner}
              size="3x"
              inverse
              className="spinner"
            />
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
            </S.DescriptionArea>

            <S.ButtonsArea>
              <S.ButtonAddToCart type="button">
                Adicionar ao Carrinho
              </S.ButtonAddToCart>
            </S.ButtonsArea>
          </S.RightArea>
        </>
      )}
    </S.Container>
  );
}
