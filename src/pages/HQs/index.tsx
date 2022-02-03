import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Card } from "../../components/Card";
import { Pagination } from "../../components/Pagination";
import api from "../../services/api";
import { HQTypes } from "../../types/HQTypes";
import * as S from "./styled";

const LIMIT = 8;

export function HQs() {
  const [loading, setLoading] = useState(false);
  const [comics, setComics] = useState<HQTypes[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [count, setCount] = useState();

  const displayComics = comics.map((comics) => {
    const storeImg = `${comics.thumbnail.path}.${comics.thumbnail.extension}`;

    return (
      <div key={comics.id}>
        <Link to={`/comics/${comics.id}`}>
          <Card
            image={storeImg}
            subtitle={`Foto do ${comics.title}`}
            title={`${comics.title}`}
          />
        </Link>
      </div>
    );
  });

  const loadComics = async (offset: number | undefined) => {
    setLoading(true);

    const comicList = await api.getAllComics(offset);
    setComics(comicList.results);
    setCount(comicList.total);
    console.log(comicList);

    setLoading(false);
  };

  useEffect(() => {
    loadComics(offset);
  }, [offset]);

  return (
    <S.Container>
      <S.BodyArea>
        {loading && (
          <S.LoadingArea>
            <S.LoadingIcon>
              <FontAwesomeIcon icon={faSpinner} size="3x" />
            </S.LoadingIcon>
          </S.LoadingArea>
        )}

        <S.TitleSection>
          <h1>Histórias em Quadrinhos</h1>
        </S.TitleSection>

        <S.CardArea>{displayComics}</S.CardArea>
        <Pagination
          limit={LIMIT}
          total={count}
          offset={offset}
          setOffset={setOffset}
        />
      </S.BodyArea>
    </S.Container>
  );
}
