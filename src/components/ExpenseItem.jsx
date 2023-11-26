import React from 'react'
import { formatCurrency, formatDate } from '../helpers'

const ExpenseItem = ({ expense }) => {
    return (
        <>
            <td>{expense.name}</td>
            <td>{formatCurrency(expense.amount)}</td>
            <td>{formatDate(expense.createdAt)}</td>
        </>
    )
}

export default ExpenseItem
