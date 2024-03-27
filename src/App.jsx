import './App.css'
import { createBrowserRouter ,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Nav from './elements/pages/Nav'
import Home from './elements/pages/Home'
import About from './elements/pages/About'
import Comedy from './elements/pages/Comedy'
import Tvshows from './elements/pages/Tvshows'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Nav/>}>

      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='comedy' element={<Comedy/>}/>
      <Route path='tvshows' element={<Tvshows/>}/>
    </Route>
  )
)

function App() {


  return (
    <div className='dark:bg-[#1f2937] bg-[#302d57]'>
  
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
