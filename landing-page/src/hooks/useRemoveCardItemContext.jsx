import { useContext } from "react";
import { RemoveCardItemContext } from "../context/RemoveCardItemContext";

const useRemoveCardItemContext = () => {
    const value = useContext(RemoveCardItemContext)
    return value;
}
 
export default useRemoveCardItemContext;