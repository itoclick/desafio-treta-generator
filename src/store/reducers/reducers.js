// reducers
import { combineReducers } from 'redux';

const initialState = {
  nome: '',
  preferencia: 'bolacha',
  comida: '',
  animal: '',
}

const forms = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_NAME':
      return { ...state, nome: action.payload }
    case 'SET_PREFERENCE':
      return { ...state, preferencia: action.payload }
    case 'SET_FOOD':
      return { ...state, comida: action.payload }
    case 'SET_ANIMAL':
      return { ...state, animal: action.payload }
    default:
      return state;
  }
}

export default combineReducers({
  forms
});
