import React from 'react'
import { RiTailwindCssFill } from 'react-icons/ri'
import { RxDotFilled } from 'react-icons/rx'
import Header from '../components/Header'
import { Outlet } from 'react-router'



const HomePage = () => {
  return (
    <div>

      <div className="">
        <div className='min-h-screen w-full bg-purple-500 flex flex-col justify-center '>
          <div className='h-20 w-96 bg-white rounded-t-lg mx-auto '>
            <div className="">
              <h1 className='font-bold mx-auto px-32 pt-3 text-xl'>Tailwind CSS</h1>
              <p className='italic  px-10 pt-1 font-extralight text-xs'>A utility-first CSS framework for rapid UI development</p>
            </div>


          </div>

          <div className="bg-purple-950  h-20 w-96 rounded-b-lg mx-auto">
            <div className=" flex space-x-8 text-white  mt-4 px-8"><img className='rounded-full h-10 w-10  ml-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5Lhy3AVi5gO_JJOeywcjfSHyfvLHMPPgxw&s" alt="" /> <p className=''><h1 className='font-thin text-sm'>Created By</h1> <p className='font-bold'>Adam Wathan</p></p></div> </div>
        </div>

      </div>
      <Outlet />
    </div >

  )
}

export default HomePage
