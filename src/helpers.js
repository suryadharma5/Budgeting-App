export const wait = () => new Promise(res => setTimeout(res, Math.random() * 2000))

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

export const deleteItem = ({ key }) => {
    return localStorage.removeItem(key)
}