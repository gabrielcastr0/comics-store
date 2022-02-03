/* eslint-disable react/button-has-type */
import * as S from "./styled";

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

type Props = {
  limit: number;
  total: number;
  offset: number;
  setOffset: (...args: number[]) => void;
};

export function Pagination({ limit, total, setOffset, offset }: Props) {

  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
  const first = Math.min(
    Math.max(current - MAX_LEFT, 1),
    maxFirst
  );

  function onPageChange(page: number) {
    setOffset((page - 1) * limit);
  }

  return (
    <S.Container>
      <S.ListPagination>
      <li>
        <S.LargeButton
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
          Anterior
        </S.LargeButton>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <S.Button
              onClick={() => onPageChange(page)}
              activeButton={page === current}
            >
              {page}
            </S.Button>
          </li>
        ))}
      <li>
        <S.LargeButton
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          Próxima
        </S.LargeButton>
      </li>
      </S.ListPagination>
    </S.Container>
  );
}
