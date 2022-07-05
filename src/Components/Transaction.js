import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState"

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    return(
        <li className= {transaction.amount > 0 ? "plus":"minus"}>
            {transaction.desc}<span>${transaction.amount}</span>
            <button className="delete-btn" onClick={()=>{deleteTransaction(transaction.id)}}>x</button>
        </li>
    )
}