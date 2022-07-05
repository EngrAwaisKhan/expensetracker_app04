import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState"

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => (transaction.amount));
    const balance = amounts.reduce((acc, item)=>(acc+=item),0).toFixed(2);

    return(
        <div>
            <h4>Balance</h4>
            <h1>${balance}</h1>
        </div>
    )
}