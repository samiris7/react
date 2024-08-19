import React from 'react'
import { RiTailwindCssFill } from 'react-icons/ri'
import { RxDotFilled } from 'react-icons/rx'
import { Outlet } from 'react-router'

const Card = () => {
  return (
    <div>
      <div className=" bg-[url('https://wallpapers.com/images/hd/dynamic-blue-purple-light-curves-850e4ovvlkkmva1i.webp')] text-white p-[30vw] bg-cover">


        <p className='flex ml-6'>Tutorial <p className='py-2'><RxDotFilled /> </p>TailwindCSS</p>

        <div className=" font-bold text-3xl w-96 ml-6">How to create a simple & modern profile card using tailwind CSS</div>


        <div className="ml-[40vw] w-96 h-80 bg-white rounded-xl p-3 ">
          <div className="h-32 bg-[url('https://wallpapers.com/images/high/4k-moving-purple-lights-desktop-9tvk0kbqzi6vosci.webp')] rounded-xl"> </div>
          <img className='h-16 w-16 rounded-full mx-auto mt-[-28px]' src="https://images.unsplash.com/photo-1553181001-f9cf6c45afca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  " alt="" />

          <p className='font-bold text-xl text-black ml-32 mt-3'>Adela Parkson</p> <p className='text-black text-sm opacity-55  ml-32'>Product Designer</p>
          <div className="  font-bold text-xl text-black flex justify-around mt-3">
            <p>17</p>
            <p>9.7k</p>
            <p>274</p>
          </div>
          <div className="text-sm opacity-50 text-black flex justify-around">
            <p>Posts</p>
            <p>Followers </p>
            <p>Following</p>
          </div>

        </div>
        <div className="flex space-x-2 "><p className='py-2'><RiTailwindCssFill /> </p> <p className='text-xl'>tailwindcss</p></div>
      </div>
      <Outlet />
    </div>
  )
}

export default Card
