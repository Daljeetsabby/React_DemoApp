import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import {authentication} from './authReducer';
import {ProductReducer} from './productReducer';
import {updateProductReducer} from './updateProductReducer';

const rootReducer = combineReducers({
  userReducer,
  authentication,
  ProductReducer,
  updateProductReducer,
  
});

export default rootReducer;
