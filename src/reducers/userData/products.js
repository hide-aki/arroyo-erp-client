import createReducer from 'redux/create-reducer';
import {GET_PROVIDER} from 'actions/types';

const INITIAL_STATE = {
  products: [],
};

const ACTION_HANDLERS = {
  [GET_PROVIDER.REQUEST]: (state, {products}) => ({...state, ...products}),
  [GET_PROVIDER.SUCCESS]: (state, {products}) => ({...state, ...products}),
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);