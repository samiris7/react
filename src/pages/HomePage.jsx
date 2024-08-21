// import React, { useState } from 'react'

// const HomePage = () => {
//   let [count, setcount] = useState(0);
//   const [type, name] = useState('even');

//   const incre = () => {

//     if (count % 2 == 0) {
//       name('even');
//     }
//     else {
//       name('odd');
//     }
//     setcount(count++);
//   }
//   const persons = [
//     { id: 1, name: 'hari', age: 90 },
//     { id: 2, name: 'ram', age: 60 },
//     { id: 3, name: 'sita', age: 70 },
//   ];
//   const movies = [
//     {
//       title: "avatar",
//       year: 2003,
//       rated: "PG-13"

//     },
//     {
//       title: "Gladiator",
//       year: 2002,
//       rated: "PG-14"

//     }
//   ];
//   const todos = [
//     {
//       "id": 1,
//       "title": "delectus aut autem",
//       "completed": false
//     },
//     {
//       "id": 2,
//       "title": "quis ut nam facilis et officia qui",
//       "completed": false
//     },
//     {
//       "id": 3,
//       "title": "fugiat veniam minus",
//       "completed": false
//     },
//     {
//       "id": 4,
//       "title": "et porro tempora",
//       "completed": true
//     },
//   ];
//   console.log('render')

//   return (
//     <div className='p-3'>
//       <div className="">
//         <h1 className='text-2xl'>{count} </h1>
//         <h1 className='text-2xl'>{type} </h1>
//         <button className='bg-black text-white px-3 py-2' onClick={incre}>add</button></div>

//       <div className="p-3">
//         {persons.map((per, i) => {

//           return <div key={per.id} className="">
//             <h1 >{`${per.name} ${per.age}`}</h1>
//           </div>
//         })}
//         {movies.map((nem, rate) => {
//           return <div key={movies.rated} className="">
//             <h1>{`${nem.title} ${nem.year}`}</h1>
//           </div>

//         })}
//       </div>

//       <div className="">
//         {todos.map((tod, g) => {
//           return <div key={tod.id}><h1>{`${tod.completed}`}</h1></div>
//         })}
//       </div>



//     </div>

//   )
// }

// export default HomePage
import React, { useState } from 'react'

const HomePage = () => {
  const [data, setData] = useState(['bhalu', 'randi', 'chinar']);
  const addSome = (newData) => {
    const obj = {

      id: 'bitch',
      location: ' chandre machikne bhalu randi besya randikoban',
      user: '1'

    };
    setData((perv) => [...perv, obj]);
  }
  console.log(data)
  return (
    <div>
      <button className='bg-green-600 p-6 mx-30 my-20 hover:ring-2 rounded-md text-xl' onClick={() => addSome(data)}> please press the button</button>

      {data.map((per) => {
        return <h1 className='text-3xl p-2 mx-[200px]' key={per.user}>{per.location}</h1>

      })}
    </div >
  )
}

export default HomePage
