/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-plusplus */
/* eslint-disable default-case */
/* eslint-disable consistent-return */
/* eslint-disable no-unreachable */
/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
const initialState = {
  products: [],
  address: [],
  discount: 0,
};

export default (state: any = initialState, action: any) => {
  let products = [...state.products];

  switch (action.type) {
    case "ADD_PRODUCT":
      const { id } = action.payload.comic;
      console.log(id);

      const index = products.findIndex((item) => item.id === id);
      if (index > -1) {
        products[index].qtd += action.payload.qtd;
      } else {
        products.push({
          ...action.payload.comic,
          qtd: action.payload.qtd,
        });
      }

      console.log(products);

      return { ...state, products };
      break;

    case "CHANGE_PRODUCT":
      if (products[action.payload.key]) {
        switch (action.payload.type) {
          case "-":
            products[action.payload.key].qtd--;

            if (products[action.payload.key].qtd <= 0) {
              products = products.filter(
                (item, index) => index !== action.payload.key
              );
            }
            break;

          case "+":
            products[action.payload.key].qtd++;

            break;
        }
      }

      return { ...state, products };
      break;

    default:
      break;
  }

  return state;
};
