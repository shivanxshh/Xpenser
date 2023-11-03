import React from 'react'
import './home.css'
import TopFold from '../../components/topfold/index'
import ExpenseList from '../../components/expense-list'

const Home = () => {
  return (
    <div className='home'>
      <TopFold/>
      <ExpenseList/>
    </div>
  )
}

export default Home