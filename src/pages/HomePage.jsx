import React from 'react'
import { RiTailwindCssFill } from 'react-icons/ri'
import { RxDotFilled } from 'react-icons/rx'



const HomePage = () => {
  return (
    <div>
      <div className="">
        <div className='min-h-screen w-full bg-purple-500 flex flex-col justify-center '>
          <div className='h-20 w-[500px] bg-white rounded-t-lg mx-auto '>
            <div className="">
              <h1 className='font-bold mx-auto px-[200px] pt-3 text-[15px]'>Tailwind CSS</h1>
              <p className='italic  px-[100px] pt-1 font-extralight text-[12px]'>A utility-first CSS framework for rapid UI development</p>
            </div>


          </div>

          <div className="bg-purple-950 bg-gradient-to-bl h-20 w-[500px] rounded-b-lg mx-auto">
            <div className=" flex space-x-8 text-white  mt-4 px-8"><img className='rounded-full h-10 w-10  ml-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5Lhy3AVi5gO_JJOeywcjfSHyfvLHMPPgxw&s" alt="" /> <p className=''><h1 className='font-thin text-sm'>Created By</h1> <p className='font-bold'>Adam Wathan</p></p></div> </div>
        </div>

      </div>
      <div className="min-h-screen w-full bg-[url('https://wallpapers.com/images/hd/dynamic-blue-purple-light-curves-850e4ovvlkkmva1i.webp')] text-white p-60">
        <p className='flex ml-6'>Tutorial <p className='py-2'><RxDotFilled /> </p>TailwindCSS</p>

        <div className=" font-bold text-3xl w-[350px] ml-6">How to create a simple & modern profile card using tailwind CSS</div>


        <div className="ml-[450px] w-[400px] h-[300px] bg-white rounded-xl p-3 ">
          <div className="h-[110px] bg-[url('https://wallpapers.com/images/high/4k-moving-purple-lights-desktop-9tvk0kbqzi6vosci.webp')] rounded-xl"> </div>
          <img className='h-16 w-16 rounded-full mx-auto mt-[-28px]' src="https://images.unsplash.com/photo-1553181001-f9cf6c45afca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  " alt="" />

          <p className='font-bold text-xl text-black ml-[120px] mt-3'>Adela Parkson</p> <p className='text-black text-sm opacity-55  ml-[130px]'>Product Designer</p>
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

    </div >

  )
}

export default HomePage
