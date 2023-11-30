import React from 'react'
import { getAllMatchingItems } from '../helpers'
import { useLoaderData } from 'react-router-dom'
import BudgetItem from '../components/BudgetItem'
import AddExpenseForm from '../components/AddExpenseForm'
import Table from '../components/Table'

export async function budgetLoader({ params }) {
    const budget = await getAllMatchingItems({
        category: "budgets",
        key: "id",
        value: params.id
    })[0]

    const expenses = await getAllMatchingItems({
        category: "expenses",
        key: "budgetId",
        value: params.id
    })

    if (!budget) {
        throw new Error("The budget you're trying to find is doesn't exist")
    }
    return { budget, expenses }
}


const BudgetPage = () => {
    const { budget, expenses } = useLoaderData()

    return (
        <div className='grid-lg'>
            <h1 className='h2'>
                <span className='accent'>{budget.name}</span>
                Overview
            </h1>
            <div className="flex-lg">
                <BudgetItem budget={budget} />
                <AddExpenseForm budgets={[budget]} />
            </div>
            {
                expenses && expenses.length > 0 && (
                    <div className="grid-md">
                        <h2>
                            <span className='accent'>{budget.name}</span>
                            <Table expenses={expenses} />
                        </h2>
                    </div>
                )
            }
        </div>
    )
}

export default BudgetPage
