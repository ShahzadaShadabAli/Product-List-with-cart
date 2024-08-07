import { useContext } from "react";
import { CardItemContext } from "../context/CardItemContext";

const useCardItemContext = () => {
    const value = useContext(CardItemContext)
    return value
}
 
export default useCardItemContext;