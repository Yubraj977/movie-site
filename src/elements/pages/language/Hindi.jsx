import React from 'react'
import { useState,useEffect } from 'react'
import Card from '../components/Card'
function Hindi() {
    const [hindi,sethindi]=useState()


    useEffect(() => {
      fetch('https://lyricsa-z.xyz/api/movie/')
        .then((data) => data.json())
        .then((movie) => {
          console.log(movie);
        const hindi=movie.filter((movie)=>movie.language.toLowerCase().includes("hindi"))
            sethindi(hindi)
        })
    }, [])
  return (
    <div className='min-h-screen'>

    <div className='flex flex-wrap gap-3 justify-center mt-10 '>
    
       { hindi&&hindi.map((item) => <Card
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

export default Hindi