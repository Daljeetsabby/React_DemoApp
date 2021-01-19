import * as types from './userConstants';
import userApi from '../data/userApi';
import { history } from '../_helper/history';

  export const registerUser = (user) => {
    return (dispatch) => {
      dispatch(registerUserRequest())
      return userApi.saveUser(user)
        .then(response => {
          const user = response.data
          dispatch(registerUserSuccess(user))
            history.push('/login');
        })
        .catch(error => {
          dispatch(registerUserFailure(error.toString()))
        })
    }
  }

export function login() {
  return function(dispatch) {
    dispatch(request());
    return userApi.getUser().then(user => {
      dispatch(success(user));
    }).catch(error => {
      dispatch(failure());
      throw(error);
    }); 
  };
}
  
  export const registerUserRequest = () => {
    return {
      type: types.REGISTER_REQUEST
    }
  }
  
  export const registerUserSuccess = user => {
    return {
      type: types.REGISTER_SUCCESS,
      payload:user
    }
  }
  
  export const registerUserFailure = error => {
    return {
      type: types.REGISTER_FAILURE,
      payload:error
    }
  }


export const request = () => {
  return {
    type: types.LOGIN_REQUEST
  }
}

export const success = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    user
  }
}

export const failure = () => {
  return {
    type: types.LOGIN_FAILURE
  }
}


