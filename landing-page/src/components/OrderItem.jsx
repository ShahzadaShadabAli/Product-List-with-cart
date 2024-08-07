const OrderItem = ({item}) => {
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
        <div className="flex justify-between items-center border-b py-5 border-gray-200">
              <div className="flex gap-4">
                <img
                  src={item.foodItem.image.thumbnail}
                  className="rounded-lg"
                  width={50}
                  alt=""
                />
                <div>
                  <h1 className="base-text text-[#190803] text-sm fontibold font-text my-1">
                    {item.foodItem.name}
                  </h1>
                  <div className="flex justify-between items-center w-24">
                    <h1 className="mb-0 text-orange-700 heading-text text-sm">
                      {item.count}x
                    </h1>
                    <h1 className="mb-0 text-sm text-yellow-800 font-text font-extralight ">
                      @ ${item.foodItem.price}
                    </h1>
                  </div>
                </div>
              </div>
              <h1 className="font-bold heading-text text-base text-[#190803]">
                ${totalPrice().toFixed(2)}
              </h1>
            </div>
    );
}
 
export default OrderItem;