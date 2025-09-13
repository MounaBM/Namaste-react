import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = ()=>{
    const itemsList = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch()

    const handleClearCart = ()=>{
        dispatch(clearItem())
    }
    return <div>
        <h1 className="text-center font-bold text-2xl m-4 p-4">Cart</h1>
        <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-black rounded-lg text-white"
         onClick={handleClearCart}>Clear Cart</button>
         {itemsList.length === 0 && <h1 className="font-bold text-center">Cart Items are empty , Please Add items to the Cart</h1>}
        {<ItemList items={itemsList}/>}
        </div>
    </div>
}

export default Cart;