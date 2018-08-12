import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore.js';
import { addExpense } from "./actions/expenses";
import { setTextFilter, setStartDate, setEndDate } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses"
import './styles/styles.scss'
import 'normalize.css/normalize.css'
import './firebase/firebase'



const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(state.filters);
}
)
store.dispatch(addExpense({ description: "Water bill", amount: 100.11, createdAt: 120 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 200, createdAt: 180 }));
store.dispatch(addExpense({ description: "Electricity bill", amount: 290, createdAt: 100 }));
import './firebase/firebase'







const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
