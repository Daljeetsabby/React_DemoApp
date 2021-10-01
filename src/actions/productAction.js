import * as types from './userConstants';
import ProductApi from '../data/productApi';

export function getAll() {
    return function(dispatch) {
        dispatch(getAllRequest())
      return ProductApi.getAllProducts()
      .then(products => {
        dispatch(getAllSuccess(products));
      })
      .catch(error => {
        dispatch(getAllFailure(error.message))
        throw(error);
      });
    };
  }
  
  export const getAllRequest = () => {
    return {
      type: types.GETALL_REQUEST
    }
  }
  
  export const getAllSuccess = (products) => {
    return {
      type: types.GETALL_SUCCESS,
      payload:products
    }
  }
  
  export const getAllFailure = (error) => {
    return {
      type: types.GETALL_FAILURE,
      payload:error
    }
  }
  
  export function removeProduct(id) {
    console.log(id);
    return function(dispatch) {
        dispatch(deleteProductRequest(id))
      return ProductApi.deleteProduct(id)
      .then(id => {
        dispatch(deleteProductSuccess(id));
        dispatch(getAll());
      })
      .catch(error => {
        dispatch(deleteProductFailure(id,error))
        //alert("something went wrong !! Please try again ")
        throw(error);
      });
    };
  }

  export const deleteProductRequest = (id) => {
    return {
      type: types.DELETE_REQUEST,
      id:id
    }
  }
  
  export const deleteProductSuccess = (id) => {
    return {
      type: types.DELETE_SUCCESS,
      id:id
    }
  }
  
  export const deleteProductFailure = (id,error) => {
    return {
      type: types.DELETE_FAILURE,
      id:id,
      error:error
    }
  }
  
  export const registerProduct = (product) => {
    return (dispatch) => {
      dispatch(registerProductRequest())
      const payload = {...product,viewCounter:0}
      return ProductApi.saveProduct(payload)
        .then(response => {
          const product = response.data
          dispatch(registerProductSuccess(product))
          alert("Product added succesfully");
          dispatch(getAll());
        })
        .catch(error => {
          dispatch(registerProductFailure(error.toString()))
          alert("Something went wrong !!")
        })
    }
  }

  export const registerProductRequest = () => {
    return {
      type: types.PRODUCTS_ADD_REQUEST
    }
  }
  
  export const registerProductSuccess = product => {
    return {
      type: types.PRODUCTS_ADD_SUCCESS,
      payload:product
    }
  }
  
  export const registerProductFailure = error => {
    return {
      type: types.PRODUCTS_ADD_FAILURE,
      payload:error
    }
  }

  export function getProductById(id) {
    return function(dispatch) {
        dispatch(getProductByIdRequest(id))
      return ProductApi.getProductByIdApi(id)
      .then(product => {
        dispatch(getProductByIdSuccess(product));
      })
      .catch((id,error) => {
        dispatch(getProductByIdFailure(id,error))
        throw(error);
      });
    };
  }

  export const getProductByIdRequest = (id) => {
    return {
      type: types.PRODUCTS_GETBYID_REQUEST,
      id:id
    }
  }
  
  export const getProductByIdSuccess = (product) => {
    let counter = product?.viewCounter
    const payload = {
      ...product,
      viewCounter: ++counter
    }
    ProductApi.updateProduct(product.id,payload) 
    return {
      type: types.PRODUCTS_GETBYID_SUCCESS,
      product:product
    }
  }
  
  export const getProductByIdFailure = (id,error) => {
    return {
      type: types.PRODUCTS_GETBYID_FAILURE,
      id:id,
      error:error
    }
  }

  export function updateProduct(id,product) {
    return function(dispatch) {
        dispatch(updateProductRequest(id,product))
      return ProductApi.updateProduct(id,product)
      .then(res => {
          
        dispatch(updateProductSuccess(id,product));
        alert("Product Updated Sucessfully!!")
      })
      .catch((error) => {
        dispatch(updateProductFailure(id,error))
        alert("Something went wrong !!")
        throw(error);
      });
    };
  }

  export const updateProductRequest = (id) => {
    return {
      type: types.PRODUCTS_UPDATE_REQUEST,
      id:id,
    }
  }
  
  export const updateProductSuccess = (id,product) => {
    return {
      type: types.PRODUCTS_UPDATE_SUCCESS,
      product:product,
      id:id
    }
  }
  
  export const updateProductFailure = (id,error) => {
    return {
      type: types.PRODUCTS_UPDATE_FAILURE,
      id:id,
      error:error
    }
  }


