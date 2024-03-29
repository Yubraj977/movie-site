import React from 'react'
import { useState, useEffect } from 'react'
import Card from './components/Card'
function Comedy() {
  const [movies,setmovies]=useState()
const [filteredMovies,setfilteredMovies]=useState()
  useEffect(() => {
    fetch('https://lyricsa-z.xyz/api/movie/')
      .then((data) => data.json())
      .then((movie) => {
        setmovies(movie);

      })
  }, [])

  useEffect(() => {
    if (movies) {
        const filtered = movies.filter(movie => movie.genre.toLowerCase() === "jhgjhg");
        setfilteredMovies(filtered);
    }
}, [movies]);
console.log(filteredMovies);
  return (
    <div className='h-screen'>

      <div className='flex flex-wrap gap-3 justify-center mt-10 min-h-screen'>
        {filteredMovies.map((item) => <Card
          name={item.name}
          genre={item.genre}
          language={item.language}
          duratioin={item.duration}
          thumbinal={item.thumbinal}
          date={item.date}
          rating={item.rating}

        />)}
      </div>
    </div>
  )
}

export default Comedy