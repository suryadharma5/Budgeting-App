import React from 'react'

// helper function
import { fetchData } from '../helpers'
import { useLoaderData } from 'react-router-dom';

export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName }
}

function Dashboard() {
    const { userName } = useLoaderData()

    return (
        <div>
            {userName}
            Dashboard
        </div>
    )
}

export default Dashboard
