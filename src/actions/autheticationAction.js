  export const registerUser = (user) => {
    return (dispatch) => {
      dispatch(registerUserRequest())
      return userApi.saveUser(user)
        .then(response => {
          // response.data is the users
          const user = response.data
          dispatch(registerUserSuccess(user))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(registerUserFailure(error.toString()))
        })
    }
  }
 