import * as S from './styled';

import axios from 'axios';
import md5 from 'md5';
import {useEffect} from 'react';

export const Home = () => {
  const publicKey = '3b8aff6e86f1f335d4bdbe20817641c6';
  const privateKey = '165fa408f0c01879664bb3f80983f958e6eb6ea2';

  const time = Number(new Date());

  const hash = md5(time + privateKey + publicKey);

  useEffect(() => {
    axios.get(
      `http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`,
    )
    .then(response => console.log(response.data.data))
    .catch(err => console.log(err));
  }, [])

  return(
    <S.Container>
    </S.Container>
  )
}