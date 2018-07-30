import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore.js';
import { addExpense } from "./actions/expenses";
import { setTextFilter, setStartDate, setEndDate } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses"


import './styles/styles.scss'
import 'normalize.css/normalize.css'

ReactDOM.render(<AppRouter />, document.getElementById('app'));


const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(...visibleExpenses);
}
)
store.dispatch(addExpense({ description: "Water bill", amount: 100, createdAt: 120 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 200, createdAt: 180 }));
store.dispatch(setStartDate(100));
store.dispatch(setEndDate(190));
store.dispatch(setTextFilter("water"));


