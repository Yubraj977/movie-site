import React, { useState } from 'react'
import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
function Check() {
  const navigate=useNavigate()
  const [secret,setsecret]=useState('')
  
  console.log(secret);
  function handleclick(e){
    if(secret=="admin"){
      navigate('/upload')
    }
    else{

    }
  }
  return (
    <div>

      <input type="text" placeholder='Enter our secret code' onChange={(e)=>setsecret(e.target.value)}/>
<Button onClick={handleclick}>Check</Button>

    </div>
  )
}

export default Check