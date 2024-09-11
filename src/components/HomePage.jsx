import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import ListCard from "./ListCard";
import { categoryUrl } from "../pages/app_data/api_Urls";


const HomePage = () => {
  const [data, setData] = useState();
  const [err, setErr] = useState();

  const getData = async () => {
    try {
      const response = await axios.get(categoryUrl);

      setData(response.data);
    } catch (err) {

    }

  }


  useEffect(() => {
    getData();

  }, []);







  return (
    <div className="p-4">

      {data && <ListCard categories={data.categories} />}









    </div>
  )
}
export default HomePage