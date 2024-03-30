import React from 'react'
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function MovieDetailsPage() {
    const [movie,setmovie]=useState()
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://lyricsa-z.xyz/api/movie/${id}`)
            .then((data) => data.json())
            .then((movie) => {
                setmovie(movie);
                
            })
    }, [])
   console.log(id);
   console.log(movie);
  return (
    <>     {movie ? (
                <div className='flex flex-col items-center mt-12'>
                    <h1 className=' dark:text-white text-6xl font-bold'>{movie.name}</h1>
                    <div className='border w-11/12 aspect-video' >
                        <img src={movie.thumbnail} alt=""  className='h-full w-full object-cover'/>
                    </div>
                    <div className='dark:text-white text-2xl mt-4'>
                        <h1>Movie Name:{movie.name}</h1>
                        <h1>Duration:{movie.duration} m </h1>
                        <h1>Language:{movie.language} </h1>
                        <h1>Rating: {movie.rating}</h1>
                        <h1>Genre: {movie.genre}</h1>
                    </div>
                    <button className='border hover:border-blue-600 px-10 py-3 mt-12 dark:text-white bg-blue-900 hover:bg-transparent' > <a href={movie.movie_url} target='_blank'>Download </a></button>
                    {/* Render other movie details here */}
                </div>
            ) : (
                <div className='felx h-screen justify-center items-center'>
                <p className='text-white text-6xl' >Loading...</p> 
                </div>// You can replace this with any loading indicator or placeholder content
            )}
  </>

  )
}

export default MovieDetailsPage