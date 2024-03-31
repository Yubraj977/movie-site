import React, { useState, useEffect } from 'react'
import { Label, TextInput, Button } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
function Upload() {
    const navigate = useNavigate()

    const [form, setform] = useState({})
    const [thumbnail, setThumbnail] = useState(null);
    const [status,setstatus]=useState(null)
    const [error,seterror]=useState(null)
   


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
                
               
                
                if (response.status == 201) {
                    setform('');
                    setThumbnail(null);
                    navigate('/')
                }
                

               

            })
            .catch(function (err) {
                let errorState = [];
                const obj=err.response.data;
                Object.entries(obj).forEach(([key, value]) => {
                  

                  const file=value[0]
                  errorState.push(  '    '+key, file  + '\n')
                 seterror(errorState)
                
                    
                   
                });
                  
                  setstatus(err.response.status)
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

                    {error?<Alert color="failure" >
                        <span className="font-medium"> <span className='text-4xl'>{status  }! </span>  </span>
                        {error.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <li key={index}>
                {item}: {error[index + 1]}
              </li>
            );
          }
          return null; // Skip odd-indexed items
        })}
                    </Alert>:''}
                    
                </div>

            </form>

        </div>
    )
}

export default Upload