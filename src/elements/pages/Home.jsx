import React, { useState } from 'react'
import { useEffect,useMemo } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { CgSearch } from "react-icons/cg";
import Card from './components/Card';
import Lazy from '../../utils/Lazy';



function Home() {
    const [movies, setMovies] = useState([])
    const [searchQuery, setsearchQuery] = useState('')
    const [loading,setLoading]=useState(true)
    const [error,seterror]=useState(null)
    // console.log(movies);
    const filteredMovies = useMemo(() => {
        return movies.filter(movie => (movie.name || '').toLowerCase().includes(searchQuery.toLowerCase()));
    }, [movies, searchQuery]);
    console.log(filteredMovies);
   
    useEffect(() => {
        fetch('https://lyricsa-z.xyz/api/movie/')
            .then((response) => {

                if (!response.ok) {
                    throw new Error('Failed to fetch movies');
                }
                return response.json();
            })
            .then((data) => {
                
                setMovies(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);


   


   

    return (
    
        <div className='flex  flex-col items-center mt-12' >

            <div className='top'>
                <h1 className='dark:text-white lg:text-3xl font-allerta'>Find Moives Tv shows Download and enjoy</h1>
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
                <p className='dark:text-white lg:font-bold lg:px-40 mt-4 px-4 font-allerta'>
                    This is the website where you can download any kind of movies as per your perferieenc happy entertainment
                    This is the website where you can download any kind of movies as per your perferieenc happy entertainment
                </p>
            </div>
           


   {loading?(<Lazy/>)
   :  <div className='flex flex-wrap gap-3 justify-center mt-10 min-h-screen'>
                {filteredMovies && filteredMovies.map((item) => <Card
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
            </div>}
          


        </div>
    )
}

export default Home