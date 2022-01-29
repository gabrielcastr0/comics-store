import * as S from "./styled";

type Props = {
  comicsPerPage: number;
  totalComics: number;
  paginate: (n: number) => void;
};

export function Pagination({ comicsPerPage, totalComics, paginate }: Props) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalComics / comicsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <S.Container>
      <S.ListPagination>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)} type="button">
              {number}
            </button>
          </li>
        ))}
      </S.ListPagination>
    </S.Container>
  );
}
