import React from 'react'
import ExpenseItem from './ExpenseItem'

const Table = ({ expenses }) => {
    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        {
                            ["Name", "Amount", "Date"].map((item, index) => (
                                <th key={index}>{item}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.map((exp) => (
                            <tr key={exp.id}>
                                <ExpenseItem expense={exp} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
