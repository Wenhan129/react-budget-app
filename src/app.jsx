import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './styles/styles.scss'
import 'normalize.css/normalize.css'

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component.
  </div>
)

const AddDashboardPage = () => (
    <div>
        This is from my add dashboard component.
  </div>
)

const EditExpensePage = () => (
    <div>
        This is from my Edit Expense component.
  </div>
)

const HelpPage = () => (
    <div>
        This is from my Help component.
  </div>
)


const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path='/create' component={AddDashboardPage} />
            <Route path='/edit' component={EditExpensePage} />
            <Route path='/help' component={HelpPage} />
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));
