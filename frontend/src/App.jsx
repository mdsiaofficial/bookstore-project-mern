
// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateBooks from './pages/CreateBooks'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/books/create' element={ <CreateBooks/>} />
        <Route path='/books/details/:id' element={ <ShowBook/>} />
        <Route path='/book/edit/:id' element={<EditBook/> } />
        <Route path='/book/delete/:id' element={ <DeleteBook/>} />
      </Routes>
    </>
  )
}

export default App
