// helper function
import { fetchData, addBudget, wait } from '../helpers'
import { useLoaderData } from 'react-router-dom';

// components
import Intro from '../components/Intro';
import { toast } from 'react-toastify';
import AddBudgetForm from '../components/AddBudgetForm';

export function dashboardLoader() {
    const userName = fetchData("userName");
    const budgets = fetchData("budgets")
    return { userName, budgets }
}

export async function dashboardAction({ request }) {
    await wait()

    const data = await request.formData()
    const { _action, ...values } = Object.fromEntries(data)
    // console.log(values._ac)

    if (_action === "newUser") {
        try {
            localStorage.setItem('userName', JSON.stringify(values.userName))
            return toast.success(`Welcome, ${values.userName}`)
        } catch (error) {
            console.log("From dashboard", error)
            throw new Error("There was a problem creating your acc")
        }

    }

    if (_action === 'addBudget') {
        try {
            addBudget({
                name: values.newBudget,
                amount: values.newBudgetAmount
            })
            return toast.success("Budget Created")
        } catch (error) {
            console.log("From dashboard", error)
            throw new Error("There was a problem creating your budget")
        }
    }
}

function Dashboard() {
    const { userName, budgets } = useLoaderData()

    return (
        <div>
            {userName ? (
                <div className='dashboard'>
                    <h1>Welcome back, <span className='accent'>{userName}</span></h1>
                    <div className="grid-sm">
                        {/* {budgets ? (): ()} */}
                        <div className="grid-lg">
                            <div className="flex-lg">
                                <AddBudgetForm />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Intro />
            )}
        </div>
    )
}

export default Dashboard
