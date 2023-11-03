import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action-types/expenses"

export const addExpense=(data)=>{
    console.log(data);
    return {  //data will be sent to reducer from here
        type:ADD_EXPENSE,  
        data,

    }
    console.log(data);
}

export const deleteExpense=(data)=>{
    return {
        type:DELETE_EXPENSE,
        data,

    };
}


export const searchExpense=(query)=>{
    return {
        type:SEARCH_EXPENSE,
        query,

    };
}