export const GET_CURRENCIES = 'GET_CURRENCIES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';
export const EDIT_EXPENSES = 'EDIT_EXPENSES';
export const SAVE_EDITED_EXPENSE = 'SAVE_EDITED_EXPENSE';

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  payload: currencies,
});

export const saveExpenses = (expenses) => ({
  type: SAVE_EXPENSES,
  payload: expenses,
});

export const deleteExpenses = (expense) => ({
  type: DELETE_EXPENSES,
  payload: expense,
});

export const editExpenses = (id) => ({
  type: EDIT_EXPENSES,
  payload: id,
});

export const saveEditedExpense = (expense) => ({
  type: SAVE_EDITED_EXPENSE,
  payload: expense,
});

export function fetchCurrencies() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((json) => dispatch(getCurrencies(json)));
}
