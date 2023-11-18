// helper function
import { fetchData } from '../helpers'
import { useLoaderData } from 'react-router-dom';

// components
import Intro from '../components/Intro';
import { toast } from 'react-toastify';

export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName }
}

export async function dashboardAction({ request }) {
    const data = await request.formData()
    const formData = Object.fromEntries(data)
    try {
        localStorage.setItem('userName', JSON.stringify(formData.userName))
        toast.success(`Welcome, ${formData.userName}`)
    } catch (error) {
        console.log("From dashboard", error)
        throw new Error("There was a problem creating your acc")
    }
}

function Dashboard() {
    const { userName } = useLoaderData()

    return (
        <div>
            {userName ? (
                <p>{userName}</p>
            ) : (
                <Intro />
            )}
        </div>
    )
}

export default Dashboard
