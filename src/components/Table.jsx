import React from 'react'
import ExpenseItem from './ExpenseItem'

const Table = ({ expenses, showbudget = true }) => {
    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        {
                            ["Name", "Amount", "Date", showbudget ? "Budget" : "", ""].map((item, index) => (
                                <th key={index}>{item}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.map((exp) => (
                            <tr key={exp.id}>
                                <ExpenseItem expense={exp} showbudget={showbudget} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
