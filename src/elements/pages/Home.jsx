import React, { useState } from 'react'
import { useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { CgSearch } from "react-icons/cg";
import Card from './components/Card';
import movie from '../../movie';


function Home() {
    const [movies, setmovies] = useState([])
    const [searchQuery, setsearchQuery] = useState('')
    console.log(movies);
    useEffect(() => {
        fetch('https://lyricsa-z.xyz/api/movie/')
            .then((data) => data.json())
            .then((movie) => {
                setmovies(movie);

            })
    }, [])


    // const filtredMovies=movies.filter((movie)=>movie.name.toLowerCase().includes(searchQuery.toLowerCase()))
    // console.log(searchQuery);
    // console.log(filtredMovies);
    console.log(movies);

    const filteredMovies = movies.filter(movie =>
        movie.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <div className='flex  flex-col items-center mt-12' >

            <div className='top'>
                <h1 className='text-white lg:text-3xl font-allerta'>Find Moives Tv shows Download and enjoy</h1>
            </div>



            <div className="search relative lg:w-[50rem] flex justify-center gap-2 mt-4">

                <CgSearch className='absolute top-1/2 -translate-y-1/2 font-extrabold  left-1 h-12 w-8 aspect-square' />
                <input type="text"
                    name="" id=""
                    className='rounded-3xl w-full h-16 pl-12'
                    placeholder='Enter the movie name '
                    onChange={(e) => setsearchQuery(e.target.value)}
                />


            </div>






            <div>
                <p className='text-white lg:font-bold lg:px-40 mt-4 px-4 font-allerta'>
                    This is the website where you can download any kind of movies as per your perferieenc happy entertainment
                    This is the website where you can download any kind of movies as per your perferieenc happy entertainment
                </p>
            </div>
            <div> </div>



            <div className='flex flex-wrap gap-3 justify-center mt-10 min-h-screen'>
                {filteredMovies.map((item) => <Card
                    key={item.id}
                    name={item.name}
                    genre={item.genre}
                    language={item.language}
                    duration={item.duration}
                    thumbnail
                    ={item.thumbnail
                    }
                    date={item.release_date}
                    rating={item.rating}
                    movie_url={item.movie_url}
                    id={item.id}

                />)}
            </div>
        </div>
    )
}

export default Home