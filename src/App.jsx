import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Cooking from './pages/cookingNinja/Cooking'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<h1>This is the home page</h1>}/>
      <Route path='/cooking' element={<Cooking/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App