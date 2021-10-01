import * as types from '../actions/userConstants'


const initialState = {
  users: [],
  success: "IS"
}

export function userReducer(state = initialState, action) {

  switch (action.type) {
    case types.REGISTER_REQUEST:
      return {
        ...state,
      }
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        success: "SS"
      }
    case types.REGISTER_FAILURE:
      return {
        ...state,
        users: [],
        success: "SF",
        error: action.payload

      }
    default:
      return state;
  }
}
