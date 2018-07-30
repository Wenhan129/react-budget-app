// EXPENSES REDUCER
const expenseReducerDefaultState = []

export default (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return (
                state.filter((item) =>
                    (item.id !== action.id)
                ));
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    console.log(action.amount);
                    return {
                        ...expense,
                        amount: action.amount
                    };
                } else
                    return expense;
            })

        default:
            return state;
    }

}