import React, { useState } from 'react'
import { useEffect } from 'react'
function Dashdashboard() {
  const [movies,setmovies]=useState([])
  const [totalMovies,settotalMovies]=useState(null)
 
  useEffect(() => {

  async function fetchapi(){
const res=await fetch('/api/movie/find')
const data=await res.json()
if(res.ok){
  settotalMovies(data.totalMovies)
 
  setmovies(data.movie)
}  
}
  fetchapi()
  }, [])
  
  const hindiMovies = movies.filter(movie => movie.language.toLowerCase().includes('hindi'));
  const nepaliMovies = movies.filter(movie => movie.language.toLowerCase().includes('nepali'));
  const englishMovies = movies.filter(movie => movie.language.toLowerCase().includes('english'));
  
  return (

    <div className='h-screen text-white flex w-full flex-col gap-3 '>
  <div className='flex w-full h-96 gap-2'>
    <div className='w-2/4 rounded-lg bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 bg-opacity-50'>
      <span className='font-allerta text-6xl flex items-center flex-col gap-5 mt-10'>
        <p>
      {totalMovies}
      </p>
      <p>Movies</p>
      </span>
      
    </div>


    <div className='w-1/4 rounded-lg bg-gradient-to-r from-gray-600 via-gray-600 to-gray-800 bg-opacity-50'>
    <span className='font-allerta text-4xl flex items-center flex-col gap-5 mt-10'>
        <p>
      {nepaliMovies.length}
      </p>
      <p>Nepali</p>
      </span>
    </div>
    <div className='flex flex-col w-1/4 rounded-md gap-2'>
      <div className='h-1/2 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 rounded-lg bg-opacity-50'>
      <span className='font-allerta text-2xl flex items-center flex-col gap-5 mt-10'>
        <p>
      {hindiMovies.length}
      </p>
      <p>Hindi</p>
      </span>
      </div>
      <div className='h-1/2 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 rounded-lg bg-opacity-50'>
      <span className='font-allerta text-2xl flex items-center flex-col gap-5 mt-10'>
        <p>
      {englishMovies.length}
      </p>
      <p>English</p>
      </span>
      </div>
    </div>
  </div>
  <div className='w-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 bg-opacity-50 h-20 rounded-lg'></div>
  <div className='w-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 bg-opacity-50 h-20 rounded-lg'></div>
  <div className='w-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 bg-opacity-50 h-20 rounded-lg'></div>
  <div className='w-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 bg-opacity-50 h-20 rounded-lg'></div>
  <div className='w-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 bg-opacity-50 h-20 rounded-lg'></div>
</div>

  )
}

export default Dashdashboard