import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { CgSearch } from "react-icons/cg";
import Card from './components/Card';

function Home() {
    return (
        <div className='flex  flex-col items-center mt-12' >

            <div className='top'>
                <h1 className='text-white lg:text-3xl'>Find Moives Tv shows Download and enjoy</h1>
            </div>



            <div className="search relative lg:w-[50rem] flex justify-center gap-2 mt-4">
               
                    <CgSearch className='absolute top-1/2 -translate-y-1/2 font-extrabold  left-1' />
                    <input type="text" name="" id="" className='rounded-3xl w-full h-16 pl-8' placeholder='Enter the movie name ' />
                   
                   <div className='bg-white rounded-full flex justify-center items-center w-12'> <FaArrowRight /> </div>
               
            </div>






            <div>
                <p className='text-white lg:font-bold lg:px-40 mt-4 px-4'>
                    This is the website where you can download any kind of movies as per your perferieenc happy entertainment
                    This is the website where you can download any kind of movies as per your perferieenc happy entertainment
                    </p>
            </div>
            <div> </div>



            <div className='flex flex-wrap gap-3 justify-center mt-10'> 
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default Home