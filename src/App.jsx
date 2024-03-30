import './App.css'
import { createBrowserRouter ,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import ReactGA from "react-ga4";
import { useEffect } from 'react';
import Nav from './elements/pages/Nav'
import Home from './elements/pages/Home'
import About from './elements/pages/About'
import Comedy from './elements/pages/Comedy'
import Tvshows from './elements/pages/Tvshows'
import Check from './elements/pages/Check'
import Upload from './elements/pages/Upload'
import Language from './elements/pages/Language'
import Hindi from './elements/pages/language/Hindi'
import English from './elements/pages/language/English'
import Nepali from './elements/pages/language/Nepali'
import MovieDetailsPage from './elements/pages/MovieDetailsPage'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Nav/>}>

      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='comedy' element={<Comedy/>}/>
      <Route path='tvshows' element={<Tvshows/>}/>
      <Route path='language' element={<Language/>}/>

      <Route path='hindi' element={<Hindi/>}/>
      <Route path='english' element={<English/>}/>
      <Route path='nepali' element={<Nepali/>}/>

      <Route path='upload' element={<Upload/>}/>
      <Route path='check' element={<Check/>}/>
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
    
    </Route>
  )
)

function App() {
const bg=' bg-[#302d57]'

useEffect(() => {
  ReactGA.initialize("G-3ZDYPS9JLG");
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });

}, [])
  return (
    <div className='dark:bg-[#1f2937] bg-white'>
  
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
