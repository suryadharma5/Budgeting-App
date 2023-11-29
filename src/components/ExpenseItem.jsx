import React from 'react'
import { formatCurrency, formatDate, getAllMatchingItems } from '../helpers'

const ExpenseItem = ({ expense }) => {
    const budget = getAllMatchingItems({
        category: "budgets",
        key: "id",
        value: expense.budgetId
    })
    return (
        <>
            <td>{expense.name}</td>
            <td>{formatCurrency(expense.amount)}</td>
            <td>{formatDate(expense.createdAt)}</td>
            <td>{formatDate(expense.createdAt)}</td>
        </>
    )
}

export default ExpenseItem
