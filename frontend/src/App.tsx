
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Signup from './screen/signup'
import { PageNotFound } from './screen/pageNotFound'
import Login from './screen/login'
import Dashboard from './screen/dashboard'

function App() {
  const token = "eeeeeeeeee"
  return (
    <>
    
     <BrowserRouter >
  
   <Routes>
   
     { !token ? <Route  path='/' element={<Login/>}/> :
      <Route  path='/' element={<Dashboard/>}/>}
      <Route  path='/Signup' element={<Signup/>}/>
      <Route  path='/*' element={<PageNotFound/>}/>
      
   </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
