import React from 'react'
import { useState,useEffect } from 'react'
import Card from '../components/Card'
function English() {
    const [english,setenglish]=useState([])

    const languagesToCheck=['english','en','eng']



    useEffect(() => {
      fetch('https://lyricsa-z.xyz/api/movie/')
        .then((data) => data.json())
        .then((movie) => {
          console.log(movie);
       


        const english = movie.filter((movie) => {
          const movieLanguage = movie.language.toLowerCase();
          return languagesToCheck.some(lang => movieLanguage.includes(lang));
          
      });
      setenglish(english)
    })
    }, [])

  return (
    <div className='min-h-screen'>

    <div className='flex flex-wrap gap-3 justify-center mt-10 '>
    
       { english&&english.map((item) => <Card
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

export default English