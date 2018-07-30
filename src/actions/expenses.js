import uuid from "uuid";
// ADD_EXPENSE
export const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) => {
    return ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    });
}

// REMOVE_EXPENSE
export const removeExpense = ({
    id = 0
} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
export const editExpense = (id, {
    amount
} = {}) => ({
    type: 'EDIT_EXPENSE',
    id,
    amount
});