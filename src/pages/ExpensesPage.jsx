import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { deleteExpense, fetchData } from '../helpers'
import Table from '../components/Table'
import { toast } from 'react-toastify'

export async function expenseLoader() {
    const budgets = fetchData("budgets")
    const expenses = fetchData("expenses")
    return { budgets, expenses }
}

export async function expenseAction({ request }) {
    const data = await request.formData()
    // Object.fromentries() untuk mengubah form data menjadi objek biasa
    const { _action, ...values } = Object.fromEntries(data)

    if (_action === 'deleteExpense') {
        try {
            deleteExpense({
                key: "expenses",
                id: values.expenseId
            })
            return toast.success(`Expense deleted!`)
        } catch (error) {
            console.log("From dashboard", error)
            throw new Error("There was a problem deleting your expense")
        }
    }
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
