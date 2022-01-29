import * as S from './styled';

import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import {Card} from '../../components/Card';

import {HQTypes} from '../../types/HQTypes';
import api from '../../services/api';

export const HQs = () => {
  const [loading, setLoading] = useState(false);
  const [comics, setComics] = useState<HQTypes[]>([]);

  const displayComics = comics
    .map((comics, index) => {
      return(
        <div key={index}>
          <Card 
            image={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} 
            subtitle={`Foto do ${comics.title}`}
            title={`${comics.title}`}
            clickFn={()=> alert(`Title: ${comics.title} + ID: ${comics.id}`)}
          />
        </div>
      )
    })

  useEffect(() => {
    loadComics();
  }, [])

  const loadComics = async () => {
    setLoading(true);

    const comicList = await api.getAllComics();
    setComics(comicList);

    setLoading(false);
  }

  return(
    <S.Container>
      <S.BodyArea>

        {loading && (
          <S.LoadingArea>
            <S.LoadingIcon>
              <FontAwesomeIcon icon={faSpinner} size="3x" inverse className="spinner"/>
            </S.LoadingIcon>
          </S.LoadingArea>
        )}

        <S.TitleSection>
          <h1>Histórias em Quadrinhos</h1>
        </S.TitleSection>

        <S.CardArea>
          {displayComics}
        </S.CardArea>

      </S.BodyArea>
    </S.Container>
  )
}