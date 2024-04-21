import React from 'react'
import { useNavigate } from 'react-router-dom';


function Card({name,genre,language,duration,thumbnail,date,rating,id}) {
    const navigate = useNavigate();
  
    function handleClick(){
        navigate(`/movie/${id}`);
    }

    return (
        <div className="main  lg:w-64 lg:h-[30rem] w-40 h-[19rem] hover:scale-100 bg-cyan-400 dark:bg-opacity-5 bg-opacity-20 flex flex-col justify-between  relative"  onClick={handleClick} >

            <div className="image  w-full lg:h-5/6 h-4/6">
                <img src={thumbnail} alt="" className='objec-cover h-full w-full' />
            </div>

            <div className='info mb-2 p-2 flex flex-col justify-center items-center'>
                <h1 className='dark:text-white font-bold w-full '>{name}</h1>
               
              
            
                
                <div className='w-full justify-between flex py-2 dark:text-white'>
                    <h1 className=' dark:text-white font-allerta'>{duration} min</h1>
                    <h2 className='font-allereta bg-slate-900 px-4  text-white rounded-lg'>{date}</h2>
                </div>
                <div className='text-white flex justify-start font-inter text-sm  absolute bottom-0 left-2'>{language}</div>

            </div>
        </div>
    )
}

export default Card