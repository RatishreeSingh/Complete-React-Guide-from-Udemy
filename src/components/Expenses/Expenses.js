import React, {useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2022');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
		console.log(selectedYear);
	};

	const filteredExpenses = props.expenses.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	});


	return (
		<Card className="expenses">
			<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
			<ExpensesList expenses={filteredExpenses}/>

		</Card>
	);
}

export default Expenses;
