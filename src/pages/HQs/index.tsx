import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Card } from "../../components/Card";
import { Pagination } from "../../components/Pagination";
import api from "../../services/api";
import { HQTypes } from "../../types/HQTypes";
import * as S from "./styled";

export function HQs() {
  const [loading, setLoading] = useState(false);
  const [comics, setComics] = useState<HQTypes[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [comicsPerPage] = useState(8);

  const indexOfLastComic = currentPage * comicsPerPage;
  const indexOfFirsComic = indexOfLastComic - comicsPerPage;
  const currentComics = comics.slice(indexOfFirsComic, indexOfLastComic);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const displayComics = currentComics.map((comics) => {
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

  const loadComics = async () => {
    setLoading(true);

    const comicList = await api.getAllComics();
    setComics(comicList);
    console.log(comicList);

    setLoading(false);
  };

  useEffect(() => {
    loadComics();
  }, []);

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
          comicsPerPage={comicsPerPage}
          totalComics={comics.length}
          paginate={paginate}
        />
      </S.BodyArea>
    </S.Container>
  );
}
