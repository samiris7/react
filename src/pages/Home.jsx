import { Input } from '@material-tailwind/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [query, setQuery] = useState('avatar');
  const [data, setData] = useState('');
  const sig = new AbortController();
  const getData = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie',
        {
          signal: sig.signal,

        },
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2Y0NWI2MzQwNjQ5Zjk3NmNmZWZjNTVhYmE3YTAyMCIsIm5iZiI6MTcyNjczNjA4Ny42ODUxMzQsInN1YiI6IjY2ZTlhNjAxMWJlY2E4Y2UwN2QyZjUyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qyuum0xKDJTCPAqXF3WvjMUZjTpJ1-vDwOJdwAPB8WE'
          },
          params: {
            query: query
          }

        });
      setData(response.data)
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
    return () => {
      sig.abort();
    }
  }, [query])
  console.log(data)
  return (
    <div className=' w-36'>
      <Input onChange={(e) => setQuery(e.target.value)} />
      <h1>{query}</h1>
    </div>
  )
}

export default Home 