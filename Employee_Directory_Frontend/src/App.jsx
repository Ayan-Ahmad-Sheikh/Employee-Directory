import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ListEmployee from './pages/ListEmployee';
import AddEmployee from './pages/AddEmployee';
import UpdateEmployee from './pages/UpdateEmployee';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/' element ={<ListEmployee/>}/>
          <Route path='/addEmployee' element ={<AddEmployee/>}/>
          <Route path='/editEmployee/:id' element={ <UpdateEmployee/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
