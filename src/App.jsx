import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import Main, { mainLoader } from "./layouts/Main";
import { logoutAction } from "./actions/Logout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ExpensesPage, { expenseAction, expenseLoader } from "./pages/ExpensesPage";
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // imidiately hit this loader function when we hit '/' route
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expenseLoader,
        action: expenseAction,
      },
      {
        path: "budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
      },
      {
        path: 'logout',
        action: logoutAction
      }
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
