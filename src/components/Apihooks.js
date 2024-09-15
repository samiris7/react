import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useApihooks = (url) => {

  const [data, SetData] = useState();

  const getData = async () => {
    try {
      const response = await axios.get(url);
      SetData(response.data);
    } catch (err) {

    }
  }
  useEffect(() => {
    getData();

  }, [])
  return data;

}

export default useApihooks
