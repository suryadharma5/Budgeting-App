// assets
import logomark from '../assets/logomark.svg'

// react-router
import { Form, NavLink } from 'react-router-dom'

import { TrashIcon } from '@heroicons/react/24/solid'

const handleSubmit = (e) => {
    if (!confirm("Delete user and all the data?")) {
        e.preventDefault()
    }

}

function Nav({ userName }) {
    return (
        <nav>
            <NavLink
                to={'/'}
                aria-label='go to home'
            >
                <img src={logomark} alt="" height={30} />
                <span>Home Budget</span>
            </NavLink>

            {userName && (
                <Form method='POST' action='/logout' onSubmit={handleSubmit}>
                    <button type='submit' className='btn btn--warning'>
                        <span>Delete User</span>
                        <TrashIcon width={20} />
                    </button>
                </Form>
            )}
        </nav>
    )
}

export default Nav
