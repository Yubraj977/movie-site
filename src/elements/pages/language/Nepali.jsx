import React, { useState } from 'react';
import { useEffect } from 'react';
import { CgSearch } from 'react-icons/cg';
import Card from '../components/Card';
import { Pagination } from 'flowbite-react';
import {Oval} from 'react-loader-spinner'
function Nepali() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      setLoading(true);
      try {
        const res = await fetch(`https://ymshub-api.onrender.com/api/movie/find/?startIndex=${(currentPage - 1) * 4}&limit=4 &ln=nepali`);
        const data = await res.json();
        if (res.ok) {
          setMovies(data.movie);
          console.log(data)
          setTotalPage(Math.ceil(data.totalLanguage / 4));
          setLoading(false);
        } else {
          setError(data.message);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
        setError('Error fetching data. Please try again later.');
      }
    }
    fetchApi();
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPage));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="top ">
        <h1 className="dark:text-white lg:text-3xl font-allerta">Find Movies TV shows Download and enjoy</h1>
      </div>
      
      <div className=''>
        <div className="dark:text-white lg:font-bold lg:px-10 m-8 px-8 font-allerta">
          <p> Nepali MOvie || High Rated Nepali Movies || Top Movies From Nepal || most rated movies </p>
          <p> Nepali MOvie || High Rated Nepali Movies || Top Movies From Nepal || most rated movies </p>
     

        </div>
      </div>
      {loading ? (
        <div className='h-screen'>
       <Oval
       visible={true}
       height="80"
       width="80"
       color="#4fa94d"
       ariaLabel="oval-loading"
       wrapperStyle={{}}
       wrapperClass=""
       />
       </div>
      ) : (
        <div className="flex flex-wrap gap-3 justify-center mt-10 min-h-screen">
          {movies.map((item) => (
            <Card
              key={item._id}
              name={item.name}
              genre={item.genre}
              language={item.language}
              duration={item.duration}
              thumbnail={item.thumbnail}
              date={item.release_date}
              rating={item.rating}
              movie_url={item.movie_url}
              id={item._id}
            />
          ))}
        </div>
      )}
      <div className="flex mt-8">
        <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange} />
      </div>
    </div>
  )
}

export default Nepali