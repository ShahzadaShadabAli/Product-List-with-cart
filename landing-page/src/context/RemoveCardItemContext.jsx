import { createContext, useReducer } from "react";

export const RemoveCardItemContext = createContext()

const reducer = (state, action) => {
    if (action.type == "removeCardItem") {
        return {
            name: action.payload
        }
    } else if (action.type == "removeAll"){
        return {
            name: "removeAll"
        }
    } else if (action.type == "restore") {
        return {
            name: null
        }
    } else {
        return state
    } 
}

const RemoveCardItemContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {
        name: null
    })
    return (
        <RemoveCardItemContext.Provider value={{state, dispatch}}>
            {children}
        </RemoveCardItemContext.Provider>
    );
}
 
export default RemoveCardItemContextProvider;