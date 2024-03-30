import React from 'react'
import { useState, useEffect } from 'react'
import Card from './components/Card'
function Comedy() {
  const [comedy,setcomedy]=useState()

  useEffect(() => {
    fetch('https://lyricsa-z.xyz/api/movie/')
      .then((data) => data.json())
      .then((movie) => {
        console.log(movie);
      const comedy=movie.filter((movie)=>movie.genre.toLowerCase().includes("adventure"))
          setcomedy(comedy)
      })
  }, [])

  console.log(comedy);
  return (
    <div className='h-screen'>

      <div className='flex flex-wrap gap-3 justify-center mt-10 min-h-screen'>
      
         { comedy&&comedy.map((item) => <Card
          name={item.name}
          genre={item.genre}
          language={item.language}
          duratioin={item.duration}
          thumbnail={item.thumbnail}
          date={item.date}
          rating={item.rating}
          id={item.id}

        />)}
      </div>
    </div>
  )
}

export default Comedy