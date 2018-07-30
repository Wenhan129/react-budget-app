

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(...visibleExpenses);
}
)

const expenseOne = store.dispatch(addExpense({ description: "Rent", amount: 100, createdAt: 130 }));
const expenseTwo = store.dispatch(addExpense({ description: "Internet", amount: 50, createdAt: 140 }));
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 900 }));
// store.dispatch(setTextFilter("net"));
store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
store.dispatch(setEndDate(160));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
