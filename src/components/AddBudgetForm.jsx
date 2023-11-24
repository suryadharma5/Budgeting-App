import { useEffect, useRef } from 'react'
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Form, useFetcher } from 'react-router-dom'

const AddBudgetForm = () => {
    // ini untuk control state (react router hooks)
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === "submitting"

    const formRef = useRef()
    const focusRef = useRef()

    useEffect(() => {
        if (!isSubmitting) {
            formRef.current.reset()
            focusRef.current.focus()
        }
    }, [isSubmitting])

    return (
        <div className='form-wrapper'>
            <h2 className='h3'>
                Create Budget
            </h2>
            <fetcher.Form method='POST' className='grid-sm' ref={formRef}>
                <div className='grid-xs'>
                    <label htmlFor="newBudget">Budget Name</label>
                    <input type="text" name='newBudget' id='newBudget' placeholder='e.g., Groceries' required ref={focusRef} />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newBudgetAmount">amount</label>
                    <input type="number" name="newBudgetAmount" id="newBudgetAmount" step={0.01} placeholder='e.g., $350' required inputMode='decimal' />
                </div>
                {/* ini buat kasi tau ke dashboard data ini berasal dari form mana (di loader function bergunanya) */}
                <input type="hidden" name='_action' value='addBudget' />
                <button type='submit' className='btn btn--dark' disabled={isSubmitting}>
                    <span>
                        {isSubmitting
                            ? <span>Submitting...</span>
                            : <>
                                <span>Create Budget</span>
                                <CurrencyDollarIcon width={20} />
                            </>
                        }
                    </span>
                </button>
            </fetcher.Form>
        </div>
    )
}

export default AddBudgetForm
