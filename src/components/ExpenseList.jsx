import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = ({ expenses }) => (
    <div>
        <h1>Expense List</h1>
        {expenses.map((expense) => (
            <ExpenseListItem key={expense.id} {...expense} />
        )
        )}
    </div>
);



const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expenses: visibleExpenses,
        // filters: filteredExpenses.filters
    }
}



export default connect(mapStateToProps)(ExpenseList);