import { useEffect, useState } from "react";
import Button from "./Button";
import useCardItemContext from "../hooks/useCardItemContext";
import useRemoveCardItemContext from "../hooks/useRemoveCardItemContext";

const Card = ({foodItem}) => {
    const [items, setItems] = useState({foodItem: null, count: 0})
    const [count, setCount] = useState(0)
    const {state, dispatch} = useCardItemContext()
    const value = useRemoveCardItemContext()
  
  useEffect(() => {
  
    if (!value.state.name || value.state.name !== foodItem.name) return;

  
    setItems({ foodItem: null, count: 0 });
    setCount(0);
  }, [value.state, foodItem.name]);

  useEffect (() => {
    if (value.state.name == "removeAll") {
      setItems({ foodItem: null, count: 0 });
      setCount(0);
    }
    // value.dispatch({type: "restore"})
  }, [value.state])
    
    const addToCart =  (foodItem) => {
      setItems((prevItems) => {
        let daCount = prevItems.count > 0 ? prevItems.count + 1 : 1;
        setCount(daCount);
        dispatch({type: "addItem", payload: { foodItem, count: daCount }})
        return { foodItem, count: daCount };
    });
    }

    const removeItem = () => {
      setItems((prevItems) => {
          let daCount = prevItems.count - 1;
          setCount(daCount);
          dispatch({type: "removeItem", payload: {foodItem: prevItems.foodItem, count: daCount}});
          return { foodItem: prevItems.foodItem, count: daCount };
      });
  }



    return (
        <div className="w-[235px] max-sm:w-full relative mb-3">
           
           <img
  src={foodItem.image.mobile}
  className={`w-full rounded-lg ${items.count > 0 ? "border-3 border-[#c73a0f]" : ""} hidden max-sm:block md:hidden`}
  alt="waffle"
/>
<img
  src={foodItem.image.tablet}
  className={`w-full rounded-lg ${items.count > 0 ? "border-[2px] border-[#c73a0f]" : ""} hidden sm:block md:block lg:hidden`}
  alt="waffle"
/>
<img
  src={foodItem.image.desktop}
  className={`w-full rounded-lg ${items.count > 0 ? "border-[2px] border-[#c73a0f]" : ""} hidden lg:block`}
  alt="waffle"
/>
             
              <Button count={count} counter={items.count > 0 ? true : false} removeFromCart={() => removeItem(foodItem)} addToCart={() => addToCart(foodItem)} />
              <h1 className="text-sm text-gray-500 font-text font-extralight mt-10">
                {foodItem.category}
              </h1>
              <h1 className="base-text text-[#190803] font-semibold heading-text my-1">
              {foodItem.name}
              </h1>
              <h1 className="text-orange-700 heading-text">${foodItem.price}</h1>
            </div>
    );
}
 
export default Card;