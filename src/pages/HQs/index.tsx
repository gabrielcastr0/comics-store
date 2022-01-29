import * as S from './styled';

import {useEffect, useState} from 'react';

import {Card} from '../../components/Card';

import {HQTypes} from '../../types/HQTypes';
import api from '../../services/api';

export const HQs = () => {
  const [comics, setComics] = useState<HQTypes[]>([]);

  const displayComics = comics
    .map((comics) => {
      return(
        <div key={comics.id}>
          <Card 
            image={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} 
            subtitle={`Foto do ${comics.title}`}
            title={comics.title}
          />
        </div>
      )
    })

  useEffect(() => {
    api
      .get('/comics')
      .then(response => {
        console.log(response.data.data.results);
        setComics(response.data.data.results);
      })
      .catch(err => console.log(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <S.Container>
      <S.BodyArea>
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