import { useEffect, useState } from "react";
import useCardItemContext from "../hooks/useCardItemContext";
import CartItem from "./CartItem";
import OrderItem from "./OrderItem";
import useRemoveCardItemContext from "../hooks/useRemoveCardItemContext";

const Cart = () => {
  const {state, dispatch} = useCardItemContext()
  const value = useRemoveCardItemContext()
  const [total, setTotal] = useState(0)

  const handleClick = () => {
    value.dispatch({type: "removeAll"})
    dispatch({type: "removeAll"})
  }

  useEffect(() => {
    let total = 0
    if (state.cardItem.length > 0) {
      state.cardItem.forEach(c => {
        let price = parseFloat(c.foodItem.price)
        let totalPrice = price * c.count
        total += totalPrice
      })
    }
    total = total.toFixed(2);
    setTotal(total)
  }, [state])

  return (
    <div className="w-[325px] max-md:w-full">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box px-9">
          <svg
            className="mt-2 mb-4"
            width="35"
            height="35"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z"
              fill="#1EA575"
            />
            <path
              d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z"
              fill="#1EA575"
            />
          </svg>

          <h3 className="font-bold text-3xl text-[#190803] heading-text mb-1">
            Order Confirmed
          </h3>
          <p className="text-sm text-[#756351]">We hope you enjoy your food!</p>
          <div className="bg-[#fcf8f5] px-5 rounded-lg mt-7">
          {state.cardItem.map((c) => (
            <OrderItem key={c.foodItem.name} item={c} />
          ))}
            <div className="py-5 flex justify-between items-center">
              <div className="font-text text-sm">Order Total</div>
              <h1 className="text-[#190803] heading-text text-xl">${total && total}</h1>
            </div>
          </div>

          <div className="modal-action w-full">
            <form method="dialog" className="w-full">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={handleClick}
                className="rounded-full w-full outline-none font-text bg-[#c73a0f] text-white flex justify-center items-center p-3 text-sm  cursor-pointer hover:brightness-90"
              >
                Start New Order
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="w-full bg-white p-5 rounded-lg">
        <h1 className="text-orange-700 heading-text text-xl">Your Cart ({state.cardItem.length > 0 ? state.cardItem.length : 0})</h1>
        
        {(!state.cardItem || state.cardItem.length === 0) && (
      <div className="flex flex-col items-center mb-5 mt-8">
        <img
          src="/images/illustration-empty-cart.svg"
          width={100}
          alt="img"
        />
        <h1 className="text-[12px] text-[#93817c] font-text mt-3">
          Your added items will appear here
        </h1>
      </div>
    )}

    {state.cardItem && state.cardItem.length > 0 && (
      <div>
        <div className="mt-2">
          {state.cardItem.map((c) => (
            <CartItem key={c.foodItem.name} item={c} />
          ))}
        </div>
        <div>
          <div className="py-5 flex justify-between items-center">
            <div className="font-text text-sm">Order Total</div>
            <h1 className="text-[#190803] heading-text text-xl">${total && total}</h1>
          </div>
          <div className="rounded-lg bg-[#fcf8f5] flex items-center justify-center font-text gap-2 p-4 text-[12px]">
            <img src="/images/icon-carbon-neutral.svg" alt="" />
            <span>
              This is a <span className="font-bold">carbon-neutral</span> delivery
            </span>
          </div>
          <div
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="rounded-full font-text bg-[#c73a0f] text-white flex justify-center items-center p-3 text-sm mt-5 cursor-pointer hover:brightness-90"
          >
            Confirm Order
          </div>
        </div>
      </div>
    )}
        </div>
    </div>
  );
};

export default Cart;
