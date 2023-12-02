import React from 'react'
import { calculateSpentBudget, formatCurrency, formatPercentage } from '../helpers'
import { Form, Link } from 'react-router-dom'
import { BanknotesIcon, TrashIcon } from '@heroicons/react/24/outline'

const BudgetItem = ({ budget, showDelete = false }) => {
    const { id, name, amount, color } = budget
    const spent = calculateSpentBudget(id)

    return (
        <div className='budget' style={{ "--accent": color }}>
            <div className="progress-text">
                <h3>{name}</h3>
                <p>{formatCurrency(amount)} Budgeted</p>
            </div>
            <progress max={amount} value={spent}>
                {formatPercentage(spent / amount)}
            </progress>
            <div className="progress-text">
                <small>{formatCurrency(spent)} spent</small>
                <small>{formatCurrency(amount - spent)} remaining</small>
            </div>
            {
                showDelete ? (
                    <div className="flex-sm">
                        <Form method='POST' action='delete' onSubmit={(event) => {
                            if (!confirm('are you sure?')) {
                                event.preventDefault()
                            }
                        }}>
                            <button type='submit' className='btn'>
                                <span>Delete budget</span>
                                <TrashIcon width={20} />
                            </button>
                        </Form>
                    </div>
                ) : (
                    <div className="flex-sm">
                        <Link to={`/budget/${id}`} className='btn'>
                            <span>View Details</span>
                            <BanknotesIcon width={20} />
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default BudgetItem
