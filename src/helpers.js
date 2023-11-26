export const wait = () => new Promise(res => setTimeout(res, Math.random() * 800))

const generateRandomColor = () => {
    const existingBudgetsLength = fetchData("budgets")?.length ?? 0
    return `${existingBudgetsLength * 34} 65% 50%`
}

// Local storages
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

export const addBudget = ({ name, amount }) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        amount: +amount,
        createdAt: Date.now(),
        color: generateRandomColor()
    }

    const existingBudgets = fetchData("budgets") ?? []
    return localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem]))
}

export const addExpense = ({ name, amount, budgetId }) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        amount: +amount,
        createdAt: Date.now(),
        budgetId: budgetId
    }

    const existingExpenses = fetchData("expenses") ?? []
    return localStorage.setItem("expenses", JSON.stringify([...existingExpenses, newItem]))
}

export const deleteItem = ({ key }) => {
    return localStorage.removeItem(key)
}

export const calculateSpentBudget = (budgetId) => {
    const expenses = fetchData("expenses") ?? []
    const budgetSpent = expenses.reduce((acc, expense) => {
        // check if expense.budgetId = budgetId
        if (expense.budgetId !== budgetId) return acc

        // add the current amount to total
        return acc += expense.amount
    }, 0)
    return budgetSpent
}

// formatting

export const formatDate = (date) => new Date(date).toLocaleDateString()

export const formatCurrency = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "currency",
        currency: "USD"
    })
}

export const formatPercentage = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "percent",
        minimumFractionDigits: 0
    })
}