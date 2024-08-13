
import React from 'react'
import Cardbtn from './Cardbtn'

const CardCompo = ({ title, url, about, title1, url1, about1, title2, about2, url2, url3, title3, about3 }) => {



  return (
    <div className='p-4  '>
      <div className='space-y-4 flex space-x-3'>
        <div className=' w-[200px] bg-pink-500 rounded-xl'>
          <img src={url} alt='' className='w-[200px] h-[200px] rounded-xl' />
          <h1 className='font-bold'>{title}</h1>
          <p>{about}</p>
          <Cardbtn />
        </div>
        <div className=' w-[200px] bg-red-500 rounded-xl'>
          <img src={url1} alt='' className='w-[200px] h-[200px] rounded-xl' />
          <h1 className='font-bold'>{title1}</h1>
          <p>{about1}</p>
          <Cardbtn />
        </div>
        <div className=' w-[200px] bg-orange-500 rounded-xl'>
          <img src={url2} alt='' className='w-[200px] h-[200px] rounded-xl' />
          <h1 className='font-bold'>{[title2]}</h1>
          <p>{[about2]}</p>
          <Cardbtn />
        </div>
        <div className=' w-[200px] bg-yellow-400 rounded-xl'>
          <img src={url3} alt='' className='w-[200px] h-[200px] rounded-xl' />
          <h1 className='font-bold'>{title3}</h1>
          <p>{about3}</p>
          <Cardbtn />
        </div>

      </div>


    </div>

  )
}

export default CardCompo;
