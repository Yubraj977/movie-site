import React, { useState,useEffect } from 'react'
import { Label, TextInput, Button } from "flowbite-react";
import axios from 'axios';
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


    function handleSubmit(e) {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('movie_url', form.movie_url);
        formData.append('rating', form.rating);
        formData.append('duration', form.duration);
        formData.append('genre', form.genre);
        formData.append('language', form.language);
        formData.append('release_date', form.release_date);
        formData.append('thumbnail', thumbnail);
    
        axios.post('https://lyricsa-z.xyz/api/movie/', formData)
            .then(function (response) {
                console.log(response.data);
                // Clear form after successful submission
                setform({});
                setThumbnail(null);
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    }
    

    return (
        <div className=' flex justify-center items-center '>
            <form className='border p-10 rounded-lg' encType="multipart/form-data"> 

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
                    <Button onClick={handleSubmit} type='submit'>Submit</Button>


                </div>

            </form>

        </div>
    )
}

export default Upload