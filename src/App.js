import Home from './pages/home/index'
import Header from './components/header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddExpense from './pages/add-expense';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add-expense' element={<AddExpense/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    
  );
}

export default App;
