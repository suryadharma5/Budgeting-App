import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import Main, { mainLoader } from "./layouts/Main";
import { logoutAction } from "./actions/Logout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // imidiately hit this loader function when we hit '/' route
    loader: mainLoader,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: dashboardLoader,
      },
      {
        path: '/logout',
        action: logoutAction
      },
      {
        path: '*',
        element: <Error />
      },
    ]
  },


]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
