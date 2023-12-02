import { toast } from "react-toastify";
import { deleteExpense, getAllMatchingItems } from "../helpers";
import { redirect } from "react-router-dom";

export function deleteBudget({ params }) {
    try {
        deleteExpense({
            key: 'budget',
            id: params.id
        })

        const associatedExpenses = getAllMatchingItems({
            category: 'expenses',
            key: "budgetId",
            value: params.id
        })

        associatedExpenses.forEach((expense) => {
            deleteExpense({
                key: 'expenses',
                id: expense.id
            })
        });

        toast.success("Budget deleted successfully")
    } catch (error) {
        throw new Error(error.message)
    }
    return redirect("/")
}