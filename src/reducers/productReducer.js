import * as types from '../actions/userConstants';


const initialState = {
  loading: false,
  products: [],
  product: [],
  error: ''
}

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GETALL_REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: ''
      }
    case types.GETALL_FAILURE:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload
      }
    case types.DELETE_REQUEST:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.id
            ? { ...product, deleting: true }
            : product
        )
      }
    case types.DELETE_SUCCESS:
      return {
        products: state.products.filter(product => product.id !== action.id)
      }
    case types.DELETE_FAILURE:
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.id) {
            const { deleting, ...productCopy } = product;
            return { ...productCopy, deleteError: action.error };
          }
          return product;
        })
      }
    case types.PRODUCTS_ADD_REQUEST:
      return {
        ...state,
      }
    case types.PRODUCTS_ADD_SUCCESS:
      return {
        ...state,
        products: action.payload
      }
    case types.PRODUCTS_ADD_FAILURE:
      return {
        ...state,
        products: [],
        error: action.payload
      }
    default: return state
  }
}

