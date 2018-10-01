import React from 'react'
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';

test('should render AddExpensePage correctly', () => {
    const addExpense = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage
        addExpense={addExpense}
        history={history} />);
    expect(wrapper).toMatchSnapshot();
});
