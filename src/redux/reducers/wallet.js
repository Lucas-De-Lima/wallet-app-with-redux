import { DELETE_EXPENSES, GET_CURRENCIES, SAVE_EXPENSES } from '../actions/walletActions';

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
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== payload.id),
    };
  default:
    return state;
  }
};

export default wallet;
