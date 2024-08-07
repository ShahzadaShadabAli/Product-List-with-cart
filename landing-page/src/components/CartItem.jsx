import useCardItemContext from "../hooks/useCardItemContext";
import useRemoveCardItemContext from "../hooks/useRemoveCardItemContext";

const CartItem = ({item}) => {

  const {dispatch} = useCardItemContext()
  const value = useRemoveCardItemContext()

  const handleClick = () => {
    dispatch({type: "deleteItem", payload: item})
    value.dispatch({type: "removeCardItem", payload: item.foodItem.name})
  }

  const totalPrice = () => {
    let price = 0;
    const itemPrice = parseFloat(item.foodItem.price); // Convert string to number

    for (let i = 0; i < item.count; i++) {
      if (itemPrice < 0) {
        // Condition to stop the loop if the price is negative
        break;
      }
      price += itemPrice;

      
      }
    

    return price;
  };
    return (
        <div className="flex justify-between items-center border-b py-3 border-gray-200">
        <div>
          <h1 className="base-text text-[#190803] heading-text my-1" style={{fontWeight: 700}}>
            {item.foodItem.name}
          </h1>
          <div className="flex justify-between items-center w-32">
            <h1 className="mb-0 text-orange-700 heading-text text-sm">
              {item.count}x
            </h1>
            <h1 className="mb-0 text-sm text-gray-500 font-text font-extralight">
              @ {item.foodItem.price}
            </h1>
            <h1 className="mb-0 text-sm text-yellow-800 font-text font-extralight ">
              {}
              ${totalPrice().toFixed(2)}
            </h1>
          </div>
        </div>
        <svg onClick={handleClick} className="rounded-full cursor-pointer w-5 h-5 p-[2px] border-2 border-[#cfb6af] text-[#cfb6af] transition-all hover:text-yellow-800 hover:border-yellow-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10"><path fill="currentColor" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
      </div>
    );
}
 
export default CartItem;