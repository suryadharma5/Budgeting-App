import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { fetchData } from '../helpers'
import Table from '../components/Table'

export function expenseLoader() {
    const budgets = fetchData("budgets")
    const expenses = fetchData("expenses")
    return { budgets, expenses }
}

const ExpensesPage = () => {
    const { budgets, expenses } = useLoaderData()
    return (
        <div className='grid-lg'>
            <h1>All Expenses</h1>
            {
                expenses && expenses.length > 0 ?
                    (
                        <div className="grid-md">
                            <h2>
                                Recent Expenses <small>({expenses.length} total)</small>
                            </h2>
                            <Table expenses={expenses} />
                        </div>
                    ) : (
                        <p>No Expenses to Show</p>
                    )
            }
        </div>
    )
}

export default ExpensesPage
