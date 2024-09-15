// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import ListCard from './ListCard';

// const HomePage = () => {
//   const [data, SetData] = useState();
//   const getData = async () => {
//     try {
//       const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
//       SetData(response.data);


//     }
//     catch (err) {

//     }
//   }
//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div>
//       {data && <ListCard categories={data.categories} />}
//     </div>
//   )
// }

// export default HomePage


import React, { useState } from 'react';
import useApihooks from '../components/Apihooks';
import ListCard from './ListCard';
import { button } from '@material-tailwind/react';

const HomePage = () => {
  const [toggle, setToggle] = useState(false);
  const getval = () => {
    setToggle((perv) => !toggle)
  }

  console.log(toggle);

  const data = useApihooks('https://jsonplaceholder.typicode.com/albums');

  return (

    <div className='grid grid-cols-1 gap-2 m-2   '>



      <button className='' onClick={getval}>Click Here
        <div className=" ">
          {toggle ? <div className="">{data && data.map((photo, i) => {
            return <ListCard key={photo.id || i} photo={photo} />
          })}
          </div> : null}
        </div>

      </button>

    </div>
  );
}

export default HomePage;

