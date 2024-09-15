// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router';
// import ItemPages from './ItemPages';

// const Item = () => {
//   const { Random } = useParams();
//   const [data, SetData] = useState();

//   const getData = async () => {
//     try {
//       const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
//         params: {
//           c: Random
//         }

//       }
//       );
//       SetData(response.data);
//     } catch (err) {

//     }
//   }
//   useEffect(() => {
//     getData();

//   }, [])

//   return (
//     <div className="p-4 grid grid-cols-4 gap-2">
//       {data && data.meals.map((meal) => {
//         return <ItemPages key={meal.idMeal} meal={meal} />;
//       })}
//     </div>
//   )
// }

// export default Item
