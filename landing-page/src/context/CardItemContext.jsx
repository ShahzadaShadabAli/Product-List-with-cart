import { createContext, useReducer } from "react";

export const CardItemContext = createContext();

const reduce = (state, action) => {
  switch (action.type) {
    case "addItem": {
      const existingItemIndex = state.cardItem.findIndex(
        (c) => c.foodItem.name === action.payload.foodItem.name
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...state.cardItem];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          count: action.payload.count,
        };
        return {
          ...state,
          cardItem: updatedItems,
        };
      } else {
        return {
          ...state,
          cardItem: [...state.cardItem, { ...action.payload, count: 1 }],
        };
      }
    } case "removeItem": {
      const existingItemIndex = state.cardItem.findIndex(
        (c) => c.foodItem.name === action.payload.foodItem.name
      );

      
      if (action.payload.count == 0) {
        const updatedItems = state.cardItem.filter(c => c.foodItem.name !== action.payload.foodItem.name)
        return {
          ...state,
          cardItem: updatedItems,
        };
      } else {
          const updatedItems = [...state.cardItem];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            count: action.payload.count,
          };
          return {
            ...state,
            cardItem: updatedItems,
          };
        } 
  }
  case "deleteItem": {
    const updatedItems = state.cardItem.filter(c => c.foodItem.name != action.payload.foodItem.name)
    return {
      cardItem: updatedItems
    }
  }
  case "removeAll": {
    return {
      cardItem: []
    }
  }
};
}



const CardItemContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, {
    cardItem: [],
  });
  return (
    <CardItemContext.Provider value={{ state, dispatch }}>
      {children}
    </CardItemContext.Provider>
  );
};

export default CardItemContextProvider;
