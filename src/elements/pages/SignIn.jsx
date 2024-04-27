import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput,Alert } from "flowbite-react";
import { SiEnterprisedb } from 'react-icons/si';
import { HiInformationCircle } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {signInStart,signInSucess,signInFaliure} from '../../app/slice/userSlice'
function SignIn() {
  const user=useSelector((state)=>state.user)
  const dispatch=useDispatch()
  console.log(user)
  const navigate=useNavigate()
    const [form,setform]=useState({})
    const [fetchError,setfetchError]=useState(null)
    console.log(form)
    console.log(fetchError)
    async function handleSubmit(e){
      dispatch(signInStart())
        console.log(`clicked`)
        e.preventDefault();
        try {
            const res=await fetch('https://ymshub-api.onrender.com/api/user/signin',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(form)
            })
            const data=await res.json()
            console.log(data)
            
            if(!res.ok){
              setfetchError(data.message)
              dispatch(signInFaliure(data.message))
            }
            if(res.ok){
              dispatch(signInSucess(data))
              navigate('/dashboard?tab=dashboard')
            }

        } catch (error) {
            console.log(error)
            setfetchError(error.message)
        }
    }
    return (
        <div className='h-screen text-black dark:text-white flex justify-center  w-full'>
         
<form className="flex max-w-md flex-col gap-4 w-full mt-20 ">
<h1 className='flex justify-center text-2xl mt-5 font-64'>Only for Admins</h1>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Enter your Email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@fame.com" required onChange={(e)=>{
          setform({...form,email:e.target.value})
          setfetchError(null)
        }   } />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your Password" />
        </div>
        <TextInput id="password1" type="password" required
          onChange={(e) => {
            setform({...form, password: e.target.value});
            setfetchError(null); // This will reset fetch error to null when input changes.
          }}
          />
      </div>
     
      <Button type="submit" onClick={handleSubmit}>Submit</Button>
      {fetchError&&(
   <Alert color="failure" icon={HiInformationCircle}>
   <span className="font-medium">Info alert!</span>{fetchError}
 </Alert>
      )}
   
    </form>
   
        </div>
    )
}

export default SignIn