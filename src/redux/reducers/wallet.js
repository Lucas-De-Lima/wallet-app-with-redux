import { GET_CURRENCIES } from '../actions/walletActions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(payload).filter((currency) => currency !== 'USDT'),
    };
  default:
    return state;
  }
};

export default wallet;
