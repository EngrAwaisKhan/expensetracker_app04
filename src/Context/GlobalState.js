import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer";

const initialState ={
    transactions:[
        {id:"1", desc:"Salary", amount:5000},
        {id:"2", desc:"Bill", amount:-1000},
        {id:"3", desc:"Grocery", amount:-1000}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    // delete transaction code
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    // add transaction code
    function addTransaction(transaction){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}