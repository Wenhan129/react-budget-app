import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expenseReducer(undefined, {
        type: '@@INIT'
    });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should add an expense', () => {
    const expense = {
        id: 123123123,
        description: 'Rent',
        note: '',
        amount: 123,
        createdAt: -1000

    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const updates = {
        id: expenses[1].id,
        description: 'No more video game',
        note: 'Focus on job searching',
        amount: 180,
        createdAt: -1000
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: updates.id,
        updates
    }
    const state = expenseReducer(expenses, action);
    expect(state[1].amount).toBe(updates.amount);

})

test('should not edit expense if ', () => {
    const updates = {
        id: 123,
        description: 'No more video game',
        note: 'Focus on job searching',
        amount: 180,
        createdAt: -1000
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: updates.id,
        updates
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
})