import React from 'react'
import './expense-list.css'
import {ToastContainer, toast} from 'react-toastify'
import Card from './card';
import { useSelector } from 'react-redux';

const ExpenseList = () => {
    const {expenseList:list , query}=useSelector(state=>state.expenses);
    const filterList=list.filter(item=>item.title.includes(query))

    const notifySuccess=()=>{
      toast.success("Expense deleted")
    }
  return(
    <div className='expense-list'>
       <ToastContainer
position="bottom-left"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick

/>
     {filterList.length ? (filterList.map((item)=><Card item={item}  notifySuccess={notifySuccess}/>))
     :(

        <div className='empty-state'>
            <img src={require('../../assets/images/empty.jpg')}
            alt='Empty List'
            className='empty-image'
            />

            <label>Uh Oh! Your expense list is empty </label>
            </div>
     )}

    </div>
  ) ;
  
}
 
export default ExpenseList