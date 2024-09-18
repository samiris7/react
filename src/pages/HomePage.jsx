import { Button } from '@material-tailwind/react';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'
import { useParams } from 'react-router';

const HomePage = () => {
  const [page, setpage] = useState(1)
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
        params: {
          page: page
        },
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2Y0NWI2MzQwNjQ5Zjk3NmNmZWZjNTVhYmE3YTAyMCIsIm5iZiI6MTcyNjY1Nzc0Mi4yNTMwMzYsInN1YiI6IjY2ZTlhNjAxMWJlY2E4Y2UwN2QyZjUyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7anfV8hGXNIJLIFhcdCYwwvA8J8y-AqlULJ-M2GlUZU'
        }
      });
      setData(response.data);
      console.log(response.data);
    } catch (err) {

    }
  }
  useEffect(() => {
    getData();
  }, [page]);
  console.log(data);

  return (
    <div className=' grid grid-cols-4' >
      {data?.results?.map((item) => {
        return (
          <div key={item.id} className=" bg-white  my-2">

            <div className=""><h1>{item.title}</h1>
              <img className='w-[200px]' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />

              <Button className='rounded-none px-5 py-1'>{item.release_date}</Button></div>


          </div>
        )
      })}

      <div className=" w-full flex justify-evenly">

        <Button disabled={(page === 1)} onClick={() => setpage(page - 1)}>Previous </Button>
        <h1 className='font-bold text-xl'>{data && data.page}</h1>
        <Button onClick={() => setpage(page + 1)}>Next </Button>
      </div>
    </div>
  )
}

export default HomePage
