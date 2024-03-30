import React from 'react'
import { useState,useEffect } from 'react'
import Card from '../components/Card'
function English() {
    const [english,setenglish]=useState()


    useEffect(() => {
      fetch('https://lyricsa-z.xyz/api/movie/')
        .then((data) => data.json())
        .then((movie) => {
          console.log(movie);
        const english=movie.filter((movie)=>movie.language.toLowerCase().includes("english"))
            setenglish(english)
        })
    }, [])

  return (
    <div className='min-h-screen'>

    <div className='flex flex-wrap gap-3 justify-center mt-10 '>
    
       { english&&english.map((item) => <Card
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

export default English