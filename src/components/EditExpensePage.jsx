import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }
                }
            />
            <button onClick={
                () => {
                    props.dispatch(removeExpense({ id: props.expense.id }));
                    props.history.push('/');
                }}
            >Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    console.log("Props", props.id);
    console.log(state);
    return ({
        expense: state.expenses.find((expense) => {
            console.log(`expense id${expense.id}, props.id${props.match.params.id}`);
            return expense.id === props.match.params.id;
        })
    });
};

export default connect(mapStateToProps)(EditExpensePage);
