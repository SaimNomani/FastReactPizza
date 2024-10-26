/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import Button from "./Button"
import { deleteItem } from "../features/cart/cartSlice"

function DeleteItemButton({pizzaId}) {
    const dispatch=useDispatch()
    return (
        <Button type="small" onClick={()=>dispatch(deleteItem(pizzaId))}>Delete</Button>

    )
}

export default DeleteItemButton

