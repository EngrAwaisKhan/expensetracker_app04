import { useContext, useState } from "react"
import { GlobalContext } from "../Context/GlobalState";

export const AddTransaction = () => {

    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");

    const {addTransaction} = useContext(GlobalContext);

    const FormSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: new Date().getTime(),
            desc,
            amount : +amount
        }

        addTransaction(newTransaction);
    }
    return(
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={FormSubmit}>
                <div className="form-control">
                <label htmlFor="Desc">Description</label>
                <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter Description..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (positive - income, negative - expense)</label
                >
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}