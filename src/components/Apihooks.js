import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useApihooks = (url) => {

  const [data, setData] = useState();
  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);

    } catch (err) {

    }

  }
  useEffect(() => {
    getData();
  }, [url])
  return data;
}
export default useApihooks;
