// react-router
import { redirect } from "react-router-dom";

// helper functions
import { deleteItem } from "../helpers";

// reaact toast
import { toast } from "react-toastify";

export async function logoutAction() {
    // delete user
    deleteItem({
        key: 'userName'
    })

    // toast
    toast.success("You've deleted your account")

    // return redirect
    return redirect('/')
}