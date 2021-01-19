import * as types from '../actions/userConstants';

const initialState = {
  product: [],
  error: ''
}

export const updateProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCTS_GETBYID_REQUEST:
      return {
        ...state,
        product: state.products?.map(product =>
          product.id === action.id
            ? { ...product, updating: true }
            : product
        )
      }
    case types.PRODUCTS_GETBYID_SUCCESS:
      return {
        product: state.products?.filter(product => product.id !== action.id),
        product: action.product
      }
    case types.PRODUCTS_GETBYID_FAILURE:
      return {
        ...state,
        product: state.products?.map(product => {
          if (product.id === action.id) {
            const { updating, ...productCopy } = product;
            return { ...productCopy, updateError: action.error };
          }
          return product;
        })
      }
    case types.PRODUCTS_UPDATE_REQUEST:
      return {
      }
    case types.PRODUCTS_UPDATE_SUCCESS:
      return {
        product: state.products?.map(pitem => (pitem.id === action.id ? { ...pitem, ...action } : pitem)),
        product: action.product
      }
    case types.PRODUCTS_UPDATE_FAILURE:
      return {
        error: action.product
      }
    default: return state
  }
}

