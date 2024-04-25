
import React, { useState, useEffect } from 'react'
import { Button } from 'flowbite-react'
import { HiInformationCircle } from "react-icons/hi";
import { Checkbox, Label, TextInput } from "flowbite-react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Alert } from "flowbite-react";
//For the firebase
import app from '../../firebase'
import { getDownloadURL, getStorage, uploadBytesResumable, ref } from 'firebase/storage'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
function Updatemovie() {
  const navigate = useNavigate()
  const [form, setform] = useState({})
  const [imgFile, setimgFile] = useState(null)
  const [imageUploadError, setimageUploadError] = useState(null)
  const [imageUploadProgress, setImageUploadProgress] = useState(null)
  const [fetchError, setfetchError] = useState(null)
  const { postId } = useParams();
  console.log(postId)
  console.log(fetchError)
  console.log(form)

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const res = await fetch(`https://ymshub-api.onrender.com/api/movie/find/?postId=${postId}`);
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);

          return;
        }
        if (res.ok) {
          console.log(data.movie[0])

          setform(data.movie[0]);
        }
      };

      fetchPost();
    } catch (error) {
      console.log(error.message);
    }
  }, [postId]);

  function handleImageUpload() {
    try {
      if (!imgFile) {
        setimageUploadError('Please Select a image')
        return;
      }
      setimageUploadError(null)
      const storage = getStorage(app)
      const fileName = new Date().getTime() + '_' + imgFile.name
      const storageRef = ref(storage, fileName)
      const uploadTask = uploadBytesResumable(storageRef, imgFile)
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setimageUploadError('image upload failed')
          setImageUploadProgress(null)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            setImageUploadProgress(null)
            setimageUploadError(null)
            setform({ ...form, thumbnail: downloadUrl })
          })
        }
      )


    } catch (error) {
      setimageUploadError(error.message)
      setImageUploadProgress(null)
      console.log(error)
    }
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(`/api/movie/update/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        console.log(data)
        navigate('/dashboard?tab=movies')
        alert('Update sucess')
      }
    } catch (error) {
      console.log(error)
      setfetchError(error.message);
    }
  }

  return (

    <div className='w-full h-full'>
      <div className='flex justify-center'>
        <h1 className='font-64 text-2xl align-middle dark:text-white mt-10'>Update Movie</h1>
      </div>
      <form className='w-full h-full flex flex-col gap-2' >

        <div>
          <Label value="Download Url" />
          <TextInput id="name" value={form.movie_url || ''} type="text" required onChange={(e) => { setform({ ...form, movie_url: e.target.value }) }} />
        </div>
        <div>
          <Label value="Movie name" />
          <TextInput id="name" value={form.name} type="text" required onChange={(e) => { setform({ ...form, name: e.target.value }) }} />
        </div>

        <div className=''>
          <Label value=" thumbnail" />
          <div className='flex w-full  justify-between'>
            <TextInput id="thumbnail" type="file" required onChange={(e) => setimgFile(e.target.files[0])} />
            <div className='h-20 w-30'>
              <img src={form.thumbnail} className='h-full w-full object-cover' />
            </div>
            <div className='relative'>
              <Button onClick={handleImageUpload} disabled={imageUploadProgress !== null}>Upload</Button>
              {imageUploadProgress &&
                <CircularProgressbar value={imageUploadProgress} text={`${imageUploadProgress}%`} className='absolute top-0' />
              }
            </div>
          </div>

        </div>
        <div>
          <Label value="Movie Genre" />
          <TextInput id="genre" type="text" required onChange={(e) => setform({ ...form, genre: e.target.value })} value={form.genre || ''} />
        </div>

        <div>
          <Label value="Duration" />
          <TextInput id="duration" type="number" required onChange={(e) => setform({ ...form, duration: e.target.value })} value={form.duration || ''} />
        </div>





        <div>
          <Label value="Language" />
          <TextInput id="language" type="text" required onChange={(e) => setform({ ...form, language: e.target.value })} value={form.language || ''} />
        </div>

        <div>
          <Label value="Rating" />
          <TextInput id="rating" type="number" required onChange={(e) => setform({ ...form, rating: e.target.value })} value={form.rating || ''} />
        </div>

        <div>
          <Label value="release Date" />
          <TextInput id="releaedate" type="number" required onChange={(e) => setform({ ...form, release_date: e.target.value })} value={form.release_date || ''} />
        </div>



        <Button onClick={handleFormSubmit}>Update</Button>
      </form>
      {fetchError && <Alert color="failure" icon={HiInformationCircle}>
        <span className="font-medium">Info alert!</span> {fetchError}
      </Alert>}
    </div>
  )
}

export default Updatemovie