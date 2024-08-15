import React from 'react'
import { FaLock } from "react-icons/fa";

const Sample1 = () => {
  return (
    <div className="h-[500px] w-[1100px] border-2 m-96  ">

      <div className='  p-[100px] '>
        <div className="border-2 flex  space-x-8 p-2">
          <div className="img ">
            <img className='h-[300px]' src="https://plus.unsplash.com/premium_photo-1670445354434-69aa48677aaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHdpdGglMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="content">
            <p className='flex space-x-2 opacity-60'><FaLock /> <p>Members Only</p></p>
            <p className=' w-[500px] text-wrap'><h1 className='font-bold text-xl'>Can Coffee Make You A Better Developer? </h1>
              <p className='opacity-60 text-[17px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis autem maxime nostrum unde labore quod eaque officiis corrupti ea ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laborum.</p></p>
            <div className="icon space-x-4  mt-9 flex align-middle"><img className='h-10 w-10 rounded-full ' src="https://plus.unsplash.com/premium_photo-1669688173781-7ac8317079dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" /><p className='opacity-60'>Johnathan Reinink <br />Aug 18</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sample1
