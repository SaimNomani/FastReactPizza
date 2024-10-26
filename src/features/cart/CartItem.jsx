/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import DeleteItemButton from "../../ui/DeleteItemButton";
import { formatCurrency } from "../../utils/helpers";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantotyByID } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity=useSelector(getCurrentQuantotyByID(pizzaId))

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity}/>
        <DeleteItemButton pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
