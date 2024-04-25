import React from 'react'
import { Table } from "flowbite-react";
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useSelector } from 'react-redux';





function Dashmovie() {
  const {currentUser}=useSelector((state)=>state.user)
  const [openModal, setOpenModal] = useState(false);
  const navigate=useNavigate()
  const [movies, setmovies] = useState();
  const [fetchError, setfetchError] = useState(null)
  const [movieIdToDelete,setmovieIdToDelete]=useState(null)

  useEffect(() => {
    try {
      async function fetchData() {
        const res = await fetch('https://letsdownload.xyz/api/movie/find/')
        const data = await res.json()
        if (res.ok) {
          setmovies(data.movie)
        }
        if (!res.ok) {
          setfetchError(data.error)
        }

      }
      fetchData()
    } catch (error) {
      setfetchError(error.message)
    }


  }, [])

  async function handleDelete(){
setOpenModal(false)
   try {
    const res=await fetch(`/api/movie/delete/${movieIdToDelete}`,{
      method:"DELETE"
    })
    const data=await res.json()
    if(!res.ok){
      setfetchError(data.message)
    }
    if(res.ok){
     
      setmovies((prev)=>prev.filter((post)=>post._id!==movieIdToDelete))

    }
   } catch (error) {
    setfetchError(error.message)
   }
  }


  async function handleMoiveEdit(id){
    navigate(`/updatemovie/${id}`)
  }
  return (
    <div className="overflow-x-auto  w-full">
      <Table>
        <Table.Head>
          <Table.HeadCell>Movie name</Table.HeadCell>
          <Table.HeadCell>Thumbnail</Table.HeadCell>
          <Table.HeadCell className=' w-10'>Language</Table.HeadCell>
          <Table.HeadCell>Rating</Table.HeadCell>
          <Table.HeadCell>Release Date</Table.HeadCell>
          <Table.HeadCell>Edit</Table.HeadCell>
          {currentUser.isAdmin&&  <Table.HeadCell>Delete</Table.HeadCell>}
         
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">



          {movies && movies.map((movie) => {
            return (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {movie.name}
                </Table.Cell>
                <Table.Cell> <div className='h-10 w-10'><img src={movie.thumbnail} alt=""  className='h-full w-full object-cover'/></div> </Table.Cell>
                <Table.Cell>{movie.language}</Table.Cell>
                <Table.Cell>{movie.rating}</Table.Cell>
                <Table.Cell>{movie.release_date}</Table.Cell>
                <Table.Cell onClick={()=>handleMoiveEdit(movie._id)}>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </a>
                </Table.Cell>


{currentUser.canDelete?  <Table.Cell  onClick={() =>
                 {
                  setOpenModal(true) 
                  setmovieIdToDelete(movie._id)
                } } >
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-red-500">
                    Delete
                  </a>
                </Table.Cell> :<Table.Cell>Not Allowded</Table.Cell> }
              




              </Table.Row>

            )
          })}



        </Table.Body>
      </Table>






     
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this Movie?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDelete}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>





    </div>
  )
}

export default Dashmovie