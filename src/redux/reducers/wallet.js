import { DELETE_EXPENSES,
  EDIT_EXPENSES, GET_CURRENCIES,
  SAVE_EXPENSES, SAVE_EDITED_EXPENSE } from '../actions/walletActions';

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
  case EDIT_EXPENSES:
    return {
      ...state,
      editor: true,
      idToEdit: payload,
    };
  case SAVE_EDITED_EXPENSE:
    return {
      ...state,
      editor: false,
      expenses: [...state.expenses.slice(0, state.idToEdit),
        payload, ...state.expenses.slice(state.idToEdit + 1),
      ],
    };
  default:
    return state;
  }
};

export default wallet;
