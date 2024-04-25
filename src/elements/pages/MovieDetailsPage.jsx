import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function MovieDetailsPage() {
    const [movie, setmovie] = useState()
    const { id } = useParams();
    console.log(movie)
    useEffect(() => {
        fetch(`/api/movie/find/?postId=${id}`)
            .then((data) => data.json())
            .then((movie) => {
                setmovie(movie.movie[0]);

            })
    }, [])
    console.log(id);
    console.log(movie);
    return (
        <>     {movie ? (
            <div className='flex flex-col items-center mt-12 '>
                <h1 className=' dark:text-white text-6xl font-bold font-inter mt-10'>{movie.name}</h1>
                <div className=' w-9/12 h-[25rem] mt-10' >
                    <img src={movie.thumbnail} alt="" className='h-full w-full object-contain' />
                </div>
                <div class="dark:text-white text-2xl mt-4 font-inter  px-20 py-10 flex flex-col bg-gray-800 rounded-lg">
                    <h1 class="text-xl font-bold mb-2">Movie Name : <span class="text-gray-300 ml-4 opacity-80">{movie.name}</span></h1>
                    <h1 class="text-xl font-bold mb-2">Duration: <span class="text-gray-300 ml-4 opacity-80">{movie.duration}</span></h1>
                    <h1 class="text-xl font-bold mb-2">Language: <span class="text-gray-300 ml-4 opacity-80">{movie.language}</span></h1>
                    <h1 class="text-xl font-bold mb-2">Rating: <span class="text-gray-300 ml-4 opacity-80">{movie.rating}</span></h1>
                    <h1 class="text-xl font-bold mb-2">Genre: <span class="text-gray-300 ml-4 opacity-80">{movie.genre}</span></h1>
                </div>

                <button className='border hover:border-blue-600 px-10 py-3 mt-10 dark:text-white bg-blue-900 hover:bg-transparent' > <a href={movie.movie_url} target='_blank'>Download </a></button>
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