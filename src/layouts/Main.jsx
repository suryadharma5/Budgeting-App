// helper function
import { fetchData } from '../helpers'

// react-router
import { Outlet, useLoaderData } from 'react-router-dom';

// assets
import wave from '../assets/wave.svg'

// components
import Nav from '../components/Nav';

export function mainLoader() {
    const userName = fetchData("userName");
    return { userName }
}

function Main() {
    const { userName } = useLoaderData()

    return (
        <div className='layout'>
            <Nav userName={userName} />
            <main>
                {/* outler merupakan children dari main yang ada di app.js */}
                <Outlet />
            </main>
            <img src={wave} alt="" />

        </div>
    )
}

export default Main
