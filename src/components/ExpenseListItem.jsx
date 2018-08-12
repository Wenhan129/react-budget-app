import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from "../actions/expenses";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <h4>{amount} - {createdAt}</h4>


    </div>
)


export default ExpenseListItem;