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
            <h4>{userName}</h4>
            h1
        </div>
    )
}

export default Dashboard
