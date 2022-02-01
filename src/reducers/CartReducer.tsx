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
  switch (action.type) {
    case "ADD_PRODUCT":
      const products = [...state.products];
      const { id } = action.payload.comic.id;

      const index = products.findIndex((item) => item.id === id);
      if (index > -1) {
        ///
      } else {
        products.push({
          ...action.payload.comic,
        });
      }

      console.log(products);

      return { ...state, products };
      break;

    default:
      break;
  }

  return state;
};
