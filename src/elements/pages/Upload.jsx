import React from 'react'
import { Label, TextInput ,Button} from "flowbite-react";
function Upload() {
    return (
        <div className=' flex justify-center items-center '>
            <form className='border p-10 rounded-lg'>

            <div className="flex w-[35rem] flex-col gap-2">
                  
      <Label >Name</Label>
      <TextInput type="text"  placeholder="Disabled input"  />


      <Label >Thumbnail Url</Label>
      <TextInput type="text" i placeholder="Disabled readonly input"  className='w-full'   />


      <Label >Download Url</Label>
      <TextInput type="text" i placeholder=""   />

      <Label > Rating</Label>
      <TextInput type="text" i placeholder=""   />


      <Label > Duratioin</Label>
      <TextInput type="text" i placeholder=""   />
      <Label > Genre</Label>
      <TextInput type="text" i placeholder=""   />
      <Label > Language</Label>
      <TextInput type="text" i placeholder=""   />

      <Button>Submit</Button>

    </div>

            </form>

        </div>
    )
}

export default Upload