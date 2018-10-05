import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore.js';
import { addExpense } from "./actions/expenses";
import { setTextFilter, setStartDate, setEndDate } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import './firebase/firebase';
import "react-dates/lib/css/_datepicker.css";
import moment from 'moment';
import LoadingPage from './components/LoadingPage'




const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(state.filters);
}
)


store.dispatch(addExpense({ description: "Water bill", amount: 7000.11, createdAt: 1538748340426 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 20000, createdAt: 1538748332345 }));
store.dispatch(addExpense({ description: "Electricity bill", amount: 7090, createdAt: 1538748332345 }));
import './firebase/firebase'







const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
