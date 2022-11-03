// Esse reducer será responsável por tratar as informações da pessoa usuária

import { SAVE_EMAIL } from '../actions/userActions';

const INITIAL_STATE = {
  email: '', // string que armazena o email da pessoa usuária
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SAVE_EMAIL:
    return {
      email: payload,
    };
  default:
    return state;
  }
};

export default user;
