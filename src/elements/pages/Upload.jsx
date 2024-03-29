import React, { useState,useEffect } from 'react'
import { Label, TextInput, Button } from "flowbite-react";

function Upload() {


    const [form, setform] = useState({})
    const [thumbnail, setThumbnail] = useState(null);

 
    function handlechange(e) {
        const { id, value } = e.target;
        setform({ ...form, [id]: value });
       
    }

    function handleThumbnailChange(e) {
      
        setThumbnail(e.target.files[0]);
    }


    async function handleSubmit(e) {
        e.preventDefault();
   const data={  "id": 1,
   "name": "raga hu ma raga",
   "movie_url": "jdfhjh",
   "thumbnail": null,
   "rating": 3,
   "genre": "jhgjdfhg",
   "language": "jhgjhg",
   "duration": 123,
   "release_date": null,}
        fetch('https://lyricsa-z.xyz/api/movie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then((res)=>res.json()).then((a)=>{console.log(a);});
    }
    

  

    return (
        <div className=' flex justify-center items-center '>
            <form className='border p-10 rounded-lg'>

                <div className="flex lg:w-[35rem] flex-col gap-2 w-full">

                    <Label>Name</Label>
                    <TextInput type="text" placeholder="Enter Name" id='name' onChange={handlechange} />



                    <Label>Thumbnail</Label>
                    <input type="file" className='w-full' id='thumbnail' onChange={handleThumbnailChange} />

                    <Label >Download Url</Label>
                    <TextInput type="text" i placeholder="" id='movie_url' onChange={handlechange} />

                    <Label > Rating</Label>
                    <TextInput type="number" i placeholder="" id='rating' onChange={handlechange} />


                    <Label > Duratioin</Label>
                    <TextInput type="number" i placeholder="" id='duration' onChange={handlechange} />
                    <Label > Genre</Label>
                    <TextInput type="text" i placeholder="" id='genre' onChange={handlechange} />
                    <Label > Language</Label>
                    <TextInput type="text" i placeholder="" id='language' onChange={handlechange} />

                    <Label > Release Date</Label>
                    <TextInput type="number" i placeholder="" id='release_date' onChange={handlechange} />
                    <Button onClick={handleSubmit}>Submit</Button>

                </div>

            </form>

        </div>
    )
}

export default Upload